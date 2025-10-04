export default function Button({ text, bgColor, bdColor }) {
    return (
        <button className={`text-white ${bgColor || "bg-red-500"} ${bdColor || "border-red-600"} border-4 rounded-full text-xl font-semibold py-2 px-4 leading-none`}>{text}</button>
    )
}
