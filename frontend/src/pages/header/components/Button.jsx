export default function Button({ text, bgColor, bdColor }) {
    return (
        <button className={`text-white ${bgColor || "bg-red-500"} ${bdColor || "border-red-600"} border-6 rounded-full text-2xl font-semibold py-3 px-8 leading-none`}>{text}</button>
    )
}
