import SearchInput from "./components/SearchInput";
import Button from "./components/Button";

export default function WordSearch({ setSelectCategory, setSelectLetter }) {
    return (
        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center">
                FIND KALAW KAWAW YA WORDS!
            </h1>
            <div className="w-full max-w-lg">
                <SearchInput />
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <div className="w-full sm:flex-1 sm:basis-0.5 sm:min-w-[320px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
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
