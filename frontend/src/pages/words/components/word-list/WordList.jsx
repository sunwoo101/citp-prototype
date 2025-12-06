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
        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center">{title}</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <div className="w-full sm:flex-1 sm:basis-0.5 sm:min-w-[320px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 p-2 sm:p-4">
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
                            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl col-span-1 sm:col-span-2 md:col-span-3 text-center">
                                {error || "Loading"}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
