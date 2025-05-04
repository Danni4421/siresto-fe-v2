
import { useState } from "react"

export default function SearchBar() {
    const [appear, setAppear] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')

    const handleSearch = (searchValue: string) => {
        setSearch(searchValue)
    }

    return (
        <>
            {appear && (
                <input 
                    type="text" 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="px-4 py-1 border border-gray-500 rounded-lg"
                    placeholder="Cari menu pilihan"
                />
            )}
            <button 
                onClick={() => setAppear((prevAppear) => !prevAppear)} 
                className="cursor-pointer hover:scale-105 transition-transform"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                        <path d="m21 21-4.34-4.34"/>
                        <circle cx="11" cy="11" r="8"/>
                    </svg>
            </button>
        </>
    )
}