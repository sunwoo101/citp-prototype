import SearchInput from "./SearchInput";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function WordSearch() {
    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-8">
            <h1 className="text-white text-7xl font-black leading-none">
                FIND KALAW KAWAW YA WORDS!
            </h1>
            <div className="w-full max-w-lg">
                <SearchInput />
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                <div className="flex-1 basis-0.5 min-w-[320px]">
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4">
                        <Link to="/words">
                            <Button
                                text={"CATEGORIES"}
                                bgColor="bg-[#ff0000]"
                                ptColor="bg-[#ff4f4f]"
                            />
                        </Link>
                        <Link to="/games">
                            <Button
                                text={"A-Z"}
                                bgColor="bg-[#ffa100]"
                                ptColor={"bg-[#ffbe4f]"}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
