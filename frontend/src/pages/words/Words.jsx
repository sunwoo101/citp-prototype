import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import pattern from "../../assets/Pattern.svg";
import WordSearch from "./components/WordSearch";

export default function Words() {
    const [englishPartial, setEnglishPartial] = useState("");
    const [category, setCategory] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(20);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="relative flex-1 flex flex-col gap-8 justify-center items-center p-8">
                    <span className="absolute inset-0 bg-[#008cff] pointer-events-none z-0" />
                    <span
                        className="absolute inset-0 bg-[#1eaaee] pointer-events-none z-0"
                        style={{
                            WebkitMaskImage: `url(${pattern})`,
                            maskImage: `url(${pattern})`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "50% 60%",
                            maskPosition: "50% 60%",
                            WebkitMaskSize: "500% 500%",
                            maskSize: "500% 500%",
                        }}
                    />

                    {!englishPartial && !category ? <WordSearch /> : null}
                </main>
                <Footer />
            </div>
        </>
    );

    if (!englishPartial) {
        return <div></div>;
    }

    if (!category) {
        return <div></div>;
    }
}
