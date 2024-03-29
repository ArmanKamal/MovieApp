'use client'
import React, { useState } from 'react'
import { useRouter} from 'next/navigation'

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    };
    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto mt-2'
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder='Seach...' 
                className='w-full h-14 rounded-md placeholder-gray-500 
                outline-none bg-transparent flex-1' 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-1 px-4 border border-amber-500 hover:border-transparent rounded disabled:text-gray-400' disabled={search === ''}>Search</button>
        </form>
    )
}
