import { useState, useEffect } from "react";
import Word from "./components/Word";
import { Link } from "react-router-dom";

export default function WordList({ title, englishPartial, category }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(20);

    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-9xl font-black leading-none">{title}</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <Word english={"Axe"} kky={"Aga"} tsc={"Tomyok"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
