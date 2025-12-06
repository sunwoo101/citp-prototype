import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function Categories({ setCategory, setSelectCategory }) {
    const categories = [
        "verb",
        "adjective",
        "preposition",
        "determiner",
        "predeterminer",
        "adverb",
        "conjunction",
        "place",
        "animal",
        "body part",
        "person",
        "tool",
        "clothing",
        "time",
        "environment",
        "emotion",
        "speech",
        "food",
        "common",
        "pronoun",
        "abstract",
        "material",
        "number",
        "vehicle",
        "medical",
        "collective",
        "position",
    ];

    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center">
                CATEGORIES
            </h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <div className="w-full sm:flex-1 sm:basis-0.5 sm:min-w-[320px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 p-2 sm:p-4">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                text={category.charAt(0).toUpperCase() + category.slice(1)}
                                bgColor="bg-[#ff6600]"
                                ptColor="bg-[#e55c00]"
                                setCategory={setCategory}
                                setSelectCategory={setSelectCategory}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
