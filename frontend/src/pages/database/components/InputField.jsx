export default function InputField({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-12 text-xl bg-white rounded-full focus:outline-none px-6"
        />
    );
}
