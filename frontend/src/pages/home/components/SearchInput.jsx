import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (query.trim()) {
            navigate(`/words?search=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full">
            <input
                type="text"
                placeholder="Search words..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl lg:text-2xl bg-white rounded-full focus:outline-none px-4 sm:px-6 md:px-8 pr-12 sm:pr-14 md:pr-16"
            />
            <button
                type="submit"
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
            >
                <div className="hidden sm:block md:hidden">
                    <SearchIcon color="#3B82F6" size={28} strokeWidth={3} />
                </div>
                <div className="hidden md:block">
                    <SearchIcon color="#3B82F6" size={32} strokeWidth={3} />
                </div>
                <div className="sm:hidden">
                    <SearchIcon color="#3B82F6" size={24} strokeWidth={3} />
                </div>
            </button>
        </form>
    );
}
