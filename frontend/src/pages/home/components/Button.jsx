import pattern from "../../../assets/Pattern.svg";

export default function Button({
    text,
    bgColor = "bg-[#ff0000]",
    ptColor = "bg-[#ff4f4f]",
    zoom = "200%",
}) {
    return (
        <button
            className={`relative w-full text-white rounded-2xl sm:rounded-3xl md:rounded-4xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 px-4 sm:px-6 md:px-8 leading-none overflow-hidden cursor-pointer`}
        >
            <span className={`absolute inset-0 ${bgColor} rounded-2xl sm:rounded-3xl md:rounded-4xl`} />

            <span
                className={`absolute inset-1 sm:inset-2 md:inset-3 ${ptColor} rounded-2xl sm:rounded-3xl md:rounded-4xl`}
                style={{
                    WebkitMaskImage: `url(${pattern})`,
                    maskImage: `url(${pattern})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "50% 60%",
                    maskPosition: "50% 60%",
                    WebkitMaskSize: zoom,
                    maskSize: zoom,
                }}
            />

            <span className="relative z-10">{text}</span>
        </button>
    );
}
