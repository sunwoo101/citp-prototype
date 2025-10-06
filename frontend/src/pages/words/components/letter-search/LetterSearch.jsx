import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function LetterSearch({ setEnglishPartial, setSelectLetter }) {
    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-9xl font-black leading-none">WORDS A-Z</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-5 gap-4 p-4">
                        <Button
                            text={"A"}
                            bgColor="bg-[#ff6600]"
                            ptColor={"bg-[#e55c00]"}
                            setEnglishPartial={setEnglishPartial}
                            setSelectLetter={setSelectLetter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
