import torresFlag from "../../../assets/TorresStraitFlag.png"
import englishFlag from "../../../assets/EnglishFlag.png"
import { Volume2 } from "lucide-react"

export default function WordOfTheDay() {
    return (
        <div className={`flex flex-col gap-2 w-full h-full bg-orange-500 border-orange-600 border-12 rounded-[4vw] py-2 px-2 leading-none`}>
            <h3 className="text-white text-7xl text-center font-extrabold">WORD OF THE DAY</h3>
            <h2 className="text-white text-9xl text-center font-extrabold">AGA</h2>

            <div className="flex items-center justify-between px-6">
                <div className="flex flex-col gap-6">
                    <h2 className="flex items-center gap-2 text-white text-5xl font-extrabold leading-none">
                        <img
                            src={englishFlag}
                            alt="Torres Strait Islander Flag"
                            className="h-[1em] w-auto object-contain"
                        />
                        AXE
                    </h2>
                    <h2 className="flex items-center gap-2 text-white text-5xl font-extrabold leading-none">
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
    )
}
