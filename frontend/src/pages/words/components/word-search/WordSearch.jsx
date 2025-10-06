import SearchInput from "./components/SearchInput";
import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function WordSearch({
    setSelectCategory,
    setSelectLetter,
    setEnglishPartial,
}) {
    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-7xl font-black leading-none">
                FIND KALAW KAWAW YA WORDS!
            </h1>
            <div className="w-full max-w-lg">
                <SearchInput setEnglishPartial={setEnglishPartial} />
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4">
                        <Button
                            text={"CATEGORIES"}
                            bgColor="bg-[#589c00]"
                            ptColor={"bg-[#8cbb4f]"}
                            setSelect={setSelectCategory}
                        />
                        <Button
                            text={"A-Z"}
                            bgColor="bg-[#0000ff]"
                            ptColor={"bg-[#4f4fff]"}
                            setSelect={setSelectLetter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
