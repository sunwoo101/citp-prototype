import pattern from "../../../assets/Pattern.svg";

export default function Button({
    text,
    bgColor = "bg-[#ff0000]",
    ptColor = "bg-[#ff4f4f]",
    zoom = "200%",
}) {
    return (
        <button className="relative overflow-hidden rounded-full text-white text-2xl font-semibold py-3 px-8 leading-none cursor-pointer">
            <span className={`absolute inset-0 ${bgColor} rounded-full`} />

            <span
                className={`absolute inset-2 rounded-full ${ptColor}`}
                style={{
                    WebkitMaskImage: `url(${pattern})`,
                    maskImage: `url(${pattern})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "60% 60%",
                    maskPosition: "60% 60%",
                    WebkitMaskSize: zoom,
                    maskSize: zoom,
                }}
            />

            <span className="relative z-10">{text}</span>
        </button>
    );
}
