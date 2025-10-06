import { Search as SearchIcon } from "lucide-react";

export default function SearchInput({ setEnglishPartial }) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="w-full h-16 text-2xl bg-white rounded-full focus:outline-none px-8 pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                <SearchIcon color="#3B82F6" size={32} strokeWidth={3} />
            </span>
        </div>
    );
}
