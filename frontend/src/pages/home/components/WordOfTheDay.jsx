import torresFlag from "../../../assets/TorresStraitFlag.png";
import englishFlag from "../../../assets/EnglishFlag.png";
import axe from "../../../assets/Axe.svg";
import { Volume2 } from "lucide-react";
import pattern from "../../../assets/Pattern.svg";
import { useState, useEffect } from "react";
import { wotd } from "../../../api/word-bank";

export default function WordOfTheDay() {
    const [word, setWord] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data: result } = await wotd();

                if (result?.success === false) {
                    throw new Error(result?.message || "Request failed");
                }

                setWord(result?.data || null);
            } catch (err) {
                const serverMsg =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Failed to fetch word of the day";

                setError(serverMsg);
                setWord(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);
    return (
        <div className="relative flex flex-col gap-2 w-full h-full text-white rounded-[4vw] py-2 px-2 leading-none overflow-hidden">
            <span className="absolute inset-0 bg-[#ff6600] rounded-[4vw]" />
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
            <div className="relative z-10 flex flex-col gap-2 h-full p-8">
                <h3 className="text-7xl text-center font-extrabold">WORD OF THE DAY</h3>

                <h2 className="flex items-center justify-center gap-16 text-7xl font-extrabold leading-none">
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
                    {word && word.kky}
                </h2>

                <div className="flex items-center justify-between px-6 mt-auto">
                    <div className="flex flex-col gap-6">
                        <h2 className="flex items-center gap-2 text-5xl font-extrabold leading-none">
                            <img
                                src={englishFlag}
                                alt="English Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {word && word.english}
                        </h2>
                        <h2 className="flex items-center gap-2 text-5xl font-extrabold leading-none">
                            <img
                                src={torresFlag}
                                alt="Torres Strait Islander Flag"
                                className="h-[1em] w-auto object-contain"
                            />
                            {word && word.tsc}
                        </h2>
                    </div>
                    <Volume2 color="white" size={120} strokeWidth={2} />
                </div>
            </div>
        </div>
    );
}
