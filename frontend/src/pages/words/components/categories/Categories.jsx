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
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-7xl font-black leading-none">
                CATEGORIES
            </h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-3 gap-4 p-4">
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
