export default function InputField({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-10 sm:h-11 md:h-12 text-base sm:text-lg md:text-xl bg-white rounded-full focus:outline-none px-4 sm:px-5 md:px-6"
        />
    );
}
