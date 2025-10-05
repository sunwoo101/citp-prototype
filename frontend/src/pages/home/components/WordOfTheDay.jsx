import torresFlag from "../../../assets/TorresStraitFlag.png";
import englishFlag from "../../../assets/EnglishFlag.png";
import axe from "../../../assets/Axe.svg";
import { Volume2 } from "lucide-react";
import pattern from "../../../assets/Pattern.svg";

export default function WordOfTheDay() {
    return (
        <div className="relative flex flex-col gap-2 w-full h-full text-white rounded-[4vw] py-2 px-2 leading-none overflow-hidden">
            {" "}
            {/* Base background */}
            <span className="absolute inset-0 bg-[#ff6600] rounded-[4vw]" />
            {/* Pattern overlay */}
            <span
                className="absolute inset-3 bg-[#e55c00] rounded-[4vw]"
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
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-2 h-full p-8">
                <h3 className="text-7xl text-center font-extrabold">WORD OF THE DAY</h3>

                <h2 className="flex items-center justify-center gap-16 text-9xl font-extrabold leading-none">
                    <span
                        className="h-[1em] w-[1em] bg-white object-contain"
                        style={{
                            WebkitMaskImage: `url(${axe})`,
                            maskImage: `url(${axe})`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                        }}
                    />
                    AGA
                </h2>

                <div className="flex items-center justify-between px-6 mt-auto">
                    <div className="flex flex-col gap-6">
                        <h2 className="flex items-center gap-2 text-5xl font-extrabold leading-none">
                            <img
                                src={englishFlag}
                                alt="English Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            AXE
                        </h2>
                        <h2 className="flex items-center gap-2 text-5xl font-extrabold leading-none">
                            <img
                                src={torresFlag}
                                alt="Torres Strait Islander Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            TOMYOK
                        </h2>
                    </div>
                    <Volume2 color="white" size={120} strokeWidth={2} />
                </div>
            </div>
        </div>
    );
}
