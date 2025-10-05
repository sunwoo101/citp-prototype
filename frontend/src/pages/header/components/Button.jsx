import pattern from "../../../assets/Pattern.svg";

export default function Button({
    text,
    bgColor = "bg-red-500",
    bdColor = "border-red-600",
    ptColor = "bg-red-400",
}) {
    return (
        <button
            className={`relative text-white ${bdColor} border-6 rounded-full text-2xl font-semibold py-3 px-8 leading-none overflow-hidden`}
        >
            {/* Background color */}
            <span className={`absolute inset-0 ${bgColor}`}></span>

            {/* Pattern overlay using mask and ptColor */}
            <span
                className={`absolute inset-0 ${ptColor}`}
                style={{
                    WebkitMaskImage: `url(${pattern})`,
                    maskImage: `url(${pattern})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                }}
            ></span>

            {/* Text */}
            <span className="relative z-10">{text}</span>
        </button>
    );
}
