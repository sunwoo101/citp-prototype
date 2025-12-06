import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function LetterSearch({ setEnglishPartial, setSelectLetter }) {
    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center">WORDS A-Z</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <div className="w-full sm:flex-1 sm:basis-0.5 sm:min-w-[320px]">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-4">
                        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                            <Button
                                key={letter}
                                text={letter}
                                bgColor="bg-[#ff6600]"
                                ptColor="bg-[#e55c00]"
                                setEnglishPartial={setEnglishPartial}
                                setSelectLetter={setSelectLetter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
