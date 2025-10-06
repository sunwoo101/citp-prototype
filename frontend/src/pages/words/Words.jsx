import { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import pattern from "../../assets/Pattern.svg";
import WordSearch from "./components/word-search/WordSearch";
import Categories from "./components/categories/Categories";
import LetterSearch from "./components/letter-search/LetterSearch";
import WordList from "./components/word-list/WordList";

export default function Words() {
    const [englishPartial, setEnglishPartial] = useState("");
    const [category, setCategory] = useState("");
    const [selectCategory, setSelectCategory] = useState(false);
    const [selectLetter, setSelectLetter] = useState(false);

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
                    {selectCategory ? (
                        <Categories
                            setCategory={setCategory}
                            setSelectCategory={setSelectCategory}
                        />
                    ) : selectLetter ? (
                        <LetterSearch
                            setEnglishPartial={setEnglishPartial}
                            setSelectLetter={setSelectLetter}
                        />
                    ) : category || englishPartial ? (
                        <WordList
                            title={category || englishPartial}
                            englishPartial={englishPartial}
                            category={category}
                        />
                    ) : (
                        <WordSearch
                            setSelectCategory={setSelectCategory}
                            setSelectLetter={setSelectLetter}
                            setEnglishPartial={setEnglishPartial}
                        />
                    )}
                </main>
                <Footer />
            </div>
        </>
    );
}
