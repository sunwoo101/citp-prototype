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
            className={`relative w-full text-white rounded-4xl text-7xl font-extrabold py-36 px-8 leading-none overflow-hidden cursor-pointer`}
        >
            <span className={`absolute inset-0 ${bgColor} rounded-4xl`} />

            <span
                className={`absolute inset-3 ${ptColor} rounded-4xl`}
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
