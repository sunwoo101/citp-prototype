export default function Button({ text, bgColor, bdColor }) {
    return (
        <button className={`w-full text-white ${bgColor || "bg-red-500"} ${bdColor || "border-red-600"} border-6 rounded-4xl text-5xl font-extrabold py-14 px-8 leading-none`}>{text}</button>
    )
}
