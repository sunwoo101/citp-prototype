import torresFlag from "../../../../../assets/TorresStraitFlag.png";
import englishFlag from "../../../../../assets/EnglishFlag.png";
import { Volume2 } from "lucide-react";
import pattern from "../../../../../assets/Pattern.svg";

export default function Word({ english, kky, tsc }) {
    return (
        <div className="relative flex flex-col gap-2 w-full h-full text-white rounded-4xl py-2 px-2 leading-none overflow-hidden">
            <span className="absolute inset-0 bg-[#ff6600] rounded-4xl" />
            <span
                className="absolute inset-3 bg-[#e55c00] rounded-4xl"
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
            <div className="relative z-10 flex flex-col gap-4 h-full p-8">
                <h2 className="flex items-center justify-center gap-16 text-5xl font-extrabold leading-none">
                    {kky}
                </h2>

                <div className="flex items-center justify-between px-6 mt-auto">
                    <div className="flex flex-col gap-6">
                        <h2 className="flex items-center gap-2 text-3xl font-extrabold leading-none">
                            <img
                                src={englishFlag}
                                alt="English Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {english}
                        </h2>
                        <h2 className="flex items-center gap-2 text-3xl font-extrabold leading-none">
                            <img
                                src={torresFlag}
                                alt="Torres Strait Islander Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {tsc}
                        </h2>
                    </div>
                    <Volume2 color="white" size={80} strokeWidth={2} />
                </div>
            </div>
        </div>
    );
}
