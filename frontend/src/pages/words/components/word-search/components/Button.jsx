import pattern from "../../../../../assets/Pattern.svg";

export default function Button({
    text,
    bgColor = "bg-[#ff0000]",
    ptColor = "bg-[#ff4f4f]",
    zoom = "200%",
    setSelect,
}) {
    return (
        <button
            onClick={() => setSelect && setSelect(true)}
            className={`relative w-full text-white rounded-2xl sm:rounded-3xl md:rounded-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-36 px-4 sm:px-6 md:px-8 leading-none overflow-hidden cursor-pointer`}
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
