import Result from '@/components/Result';
import React from 'react'

interface SearchProps{
    params: {
        searchId: string
    }
}
export default async function page({params}:SearchProps) {
    const searchTerm = params.searchId;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`)
    const data = await res.json()
    const results = data.results
    return (
        <>
        {
            results && results.length === (
                <h1 className='text-center pt-6'>No results Found</h1>
            )
        }
        {
            <Result results={results} />
        }
        </>
    )
}
