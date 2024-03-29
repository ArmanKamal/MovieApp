import Result from '@/components/Result';
import React from 'react'
const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}){

    const genre = searchParams.genre || 'fetchTrending'
    const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);

    const data = await response.json()
    if(!response.ok){
      throw new Error('Failed to Fetch data')
    }
    const results = data.results;
    
    return (
      <div>
          <Result results={results} />
      </div>
    )
}
