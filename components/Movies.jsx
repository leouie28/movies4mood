import React from 'react'
import Link from 'next/link'

const getData = async (genre_id, page = 1) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    const params = `?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre_id}&language=en-US&page=${page}&sort_by=popularity.desc`
    console.log(params)
    const res = await fetch(`${process.env.TMDB_API_URL}/3/discover/movie${params}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}

export default async function Movies({ mood, page }) {
    const data = await getData(mood.id, page)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-10'>
            {data.results.map((d, i) => (
                <Link href={`/${mood.name}/${d.id}`} key={i}>
                    <div className='rounded-xl p-2 hover:bg-zinc-700 hover:shadow-lg cursor-pointer'>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`}
                            width={400}
                            height={700}
                            alt='Poster'
                            className='aspect-[10/14] rounded-xl overflow-hidden mb-4'
                        />
                        <h2 className='line-clamp-1'>{d.title}</h2>
                        <p className='text-sm text-gray-400'>{d.release_date.split("-")[0]}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
