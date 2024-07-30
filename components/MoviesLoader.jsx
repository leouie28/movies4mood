import React from 'react'

export default function MoviesLoader() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-10'>
            {Array.from({ length: 10 }).map((d, i) => (
                <div className='rounded-xl p-2' key={i}>
                    <div className='aspect-[10/14] bg-zinc-700/80 animate-pulse rounded-xl overflow-hidden mb-4'></div>
                    <div className='p-3.5 rounded-xl bg-zinc-700/80 my-2 max-w-[70%]'></div>
                    <div className='p-2.5 rounded-xl bg-zinc-700/80 my-2 max-w-[30%]'></div>
                </div>
            ))}
        </div>
    )
}
