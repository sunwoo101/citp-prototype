import pattern from "../../../assets/Pattern.svg";

export default function Button({
    text,
    bgColor = "bg-[#ff0000]",
    ptColor = "bg-[#ff4f4f]",
    zoom = "200%",
    clickAction,
}) {
    return (
        <button
            onClick={clickAction}
            className={`relative text-white rounded-2xl sm:rounded-3xl md:rounded-4xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 leading-none overflow-hidden cursor-pointer`}
        >
            <span className={`absolute inset-0 ${bgColor} rounded-2xl sm:rounded-3xl md:rounded-4xl`} />

            <span
                className={`absolute inset-1 sm:inset-2 ${ptColor} rounded-2xl sm:rounded-3xl md:rounded-4xl`}
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
