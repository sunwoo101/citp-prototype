import torresFlag from "../../../../../assets/TorresStraitFlag.png";
import englishFlag from "../../../../../assets/EnglishFlag.png";
import { Volume2 } from "lucide-react";
import pattern from "../../../../../assets/Pattern.svg";

export default function Word({ english, kky, tsc }) {
    return (
        <div className="relative flex flex-col gap-2 w-full h-full text-white rounded-2xl sm:rounded-3xl md:rounded-4xl py-2 px-2 leading-none overflow-hidden">
            <span className="absolute inset-0 bg-[#ff6600] rounded-2xl sm:rounded-3xl md:rounded-4xl" />
            <span
                className="absolute inset-1 sm:inset-2 md:inset-3 bg-[#e55c00] rounded-2xl sm:rounded-3xl md:rounded-4xl"
                style={{
                    WebkitMaskImage: `url(${pattern})`,
                    maskImage: `url(${pattern})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "50% 60%",
                    maskPosition: "50% 60%",
                    WebkitMaskSize: "150%",
                    maskSize: "150%",
                }}
            />
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4 h-full p-4 sm:p-6 md:p-8">
                <h2 className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-none">
                    {kky}
                </h2>

                <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 mt-auto gap-2 sm:gap-4">
                    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
                        <h2 className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold leading-none">
                            <img
                                src={englishFlag}
                                alt="English Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {english}
                        </h2>
                        <h2 className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold leading-none">
                            <img
                                src={torresFlag}
                                alt="Torres Strait Islander Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {tsc}
                        </h2>
                    </div>
                    <div className="hidden">
                        <Volume2 color="white" size={60} strokeWidth={2} />
                    </div>
                    <div className="hidden">
                        <Volume2 color="white" size={40} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
