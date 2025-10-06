import { useState, useEffect } from "react";
import Word from "./components/Word";
import { Link } from "react-router-dom";
import { get } from "../../../../api/word-bank";

export default function WordList({ title, englishPartial, category }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(20);
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data: result } = await get(
                    englishPartial,
                    category,
                    pageNumber,
                    resultsPerPage,
                );

                if (result?.success === false) {
                    throw new Error(result?.message || "Request failed");
                }

                setWords(result?.data || []);
            } catch (err) {
                const serverMsg =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Failed to fetch words";

                setError(serverMsg);
                setWords([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, [englishPartial, category, pageNumber, resultsPerPage]);

    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-7xl font-black leading-none">{title}</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {words.length > 0 ? (
                            words.map((word) => (
                                <Word
                                    key={word.id}
                                    english={word.english}
                                    kky={word.kky}
                                    tsc={word.tsc}
                                />
                            ))
                        ) : (
                            <p className="text-white text-3xl col-span-3 text-center">
                                {error || "Loading"}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
