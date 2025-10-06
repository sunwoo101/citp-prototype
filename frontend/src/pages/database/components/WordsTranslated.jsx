import { useState, useEffect } from "react";
import pattern from "../../../assets/Pattern.svg";
import { count as getCount } from "../../../api/word-bank";

export default function WordsTranslated() {
    const [count, setCount] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchCount = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data: result } = await getCount();

                if (result?.success === false) {
                    throw new Error(result?.message || "Request failed");
                }

                setCount(result?.data || null);
            } catch (err) {
                const serverMsg =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Failed to fetch words";

                setError(serverMsg);
                setCount(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="relative flex flex-col gap-2 w-full h-full text-white rounded-[2vw] py-2 px-2 leading-none overflow-hidden">
            <span className="absolute inset-0 bg-[#ff6600] rounded-[2vw]" />
            <span
                className="absolute inset-3 bg-[#e55c00] rounded-[2vw]"
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
            <div className="relative z-10 flex flex-col gap-8 h-full p-8">
                <h2 className="text-7xl text-center font-extrabold">
                    {count || error || "####"}
                </h2>
                <h3 className="text-5xl text-center font-extrabold">
                    WORDS TRANSLATED
                </h3>
            </div>
        </div>
    );
}
