import React from 'react'

interface ResultProps{
  results: [
    id: number,
    original_title: string
  ]
}

export default function Result({results}) {
  console.log(results)
  return (
    <div>
        {
          results.map((result) => (
              <div key={result.id}>
                  <h2>{result.original_title}</h2>
              </div>
          ))
        }
    </div>
  )
}
