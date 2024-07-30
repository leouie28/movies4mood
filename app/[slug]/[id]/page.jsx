import Container from '@/components/Container'
import { minutesToHours } from '@/constant/time'
import React from 'react'

const getDetails = async (movie_id) => {
    const res = await fetch(`${process.env.TMDB_API_URL}/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,watch/providers&language=en-US`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    const trailer = data?.videos?.results.filter((x) => x.type == "Trailer" && x.official == true && x.site == "YouTube").reverse()[0]
    const providers = data["watch/providers"].results['PH'] || data["watch/providers"].results['US']
    delete data.videos
    delete data["watch/providers"]

    return { trailer, providers, ...data }
}

export default async function DetailsPage({ params }) {

    const data = await getDetails(params.id)

    return (
        <Container>
            <div className='my-10'>
                <div className='shadow-lg bg-zinc-700/20 rounded-xl overflow-hidden'>
                    {data?.trailer ? (
                        <iframe 
                            className="w-full aspect-video" 
                            src={`https://youtube.com/embed/${data?.trailer.key}`}
                            referrerPolicy='strict-origin-when-cross-origin'
                        ></iframe>
                    ) : (
                        <img 
                            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                            className='w-full aspect-video object-contain'
                            content='contain'
                        />
                    )}
                    <div className='p-6 space-y-3'>
                        <h1 className='font-bold text-xl sm:text-3xl'>{data?.title} <span className='text-gray-400 font-medium'>({data.release_date.split("-")[0]})</span></h1>
                        <div className='text-gray-400'>
                            {minutesToHours(data.runtime)} · ⭐ {data.vote_average.toFixed(1)}/10
                        </div>
                        <div className='border border-pink-600 inline-block px-2 rounded-full text-sm font-bold text-pink-600'>{data.genres[0].name}</div>
                        <p className='text-gray-300 text-sm sm:text-base'>{data.overview}</p>
                        {data.providers?.link ? (
                            <a className='px-3 cursor-pointer py-2 inline-flex items-center gap-2 rounded-xl bg-pink-600' href={data.providers?.link} target='_blank'>
                                <span>View watch options</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f2095id0)"><rect width="27.875" height="27.875" x="2.066" y="1.813" fill="url(#f2095id5)" rx="3.6"/><rect width="27.875" height="27.875" x="2.066" y="1.813" fill="url(#f2095id8)" rx="3.6"/></g><g filter="url(#f2095id1)"><path stroke="url(#f2095id6)" strokeLinecap="round" strokeWidth="1.5" d="M28.253 4.313v22.875"/></g><g filter="url(#f2095id2)"><path stroke="url(#f2095id7)" strokeLinecap="round" strokeWidth="1.5" d="M5.53 3.625h21.78"/></g><g filter="url(#f2095id3)"><path fill="#579fff" d="M25.197 16.443a1 1 0 0 0 0-1.386l-5.112-5.313c-.625-.649-1.72-.207-1.72.693V13.5a.25.25 0 0 1-.25.25h-9.75a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9.75a.25.25 0 0 1 .25.25v3.063c0 .9 1.096 1.342 1.72.693z"/></g><g filter="url(#f2095id4)"><path fill="#fcf2ff" d="M25.197 16.443a1 1 0 0 0 0-1.386l-5.112-5.313c-.625-.649-1.72-.207-1.72.693V13.5a.25.25 0 0 1-.25.25h-9.75a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9.75a.25.25 0 0 1 .25.25v3.063c0 .9 1.096 1.342 1.72.693z"/></g><defs><filter id="f2095id0" width="28.875" height="28.875" x="2.066" y=".813" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="1" dy="-1"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.188235 0 0 0 0 0.470588 0 0 0 0 0.843137 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_722"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.27451 0 0 0 0 0.34902 0 0 0 0 0.8 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18590_722" result="effect2_innerShadow_18590_722"/></filter><filter id="f2095id1" width="5.5" height="28.375" x="25.503" y="1.563" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_722" stdDeviation="1"/></filter><filter id="f2095id2" width="27.281" height="5.5" x="2.78" y=".875" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_722" stdDeviation="1"/></filter><filter id="f2095id3" width="20.112" height="14.63" x="6.364" y="8.435" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_722" stdDeviation=".5"/></filter><filter id="f2095id4" width="19.112" height="13.63" x="6.764" y="9.035" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-.6" dy=".6"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.854902 0 0 0 0 0.980392 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_722"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".4" dy="-.4"/><feGaussianBlur stdDeviation=".2"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18590_722" result="effect2_innerShadow_18590_722"/></filter><linearGradient id="f2095id5" x1="16.003" x2="16.003" y1="5.387" y2="38.64" gradientUnits="userSpaceOnUse"><stop stopColor="#5cb7ff"/><stop offset="1" stopColor="#4878dd"/></linearGradient><linearGradient id="f2095id6" x1="28.753" x2="28.753" y1="4.313" y2="27.188" gradientUnits="userSpaceOnUse"><stop stopColor="#7fd9ff"/><stop offset="1" stopColor="#639df4"/></linearGradient><linearGradient id="f2095id7" x1="28.467" x2="2.936" y1="3.875" y2="3.875" gradientUnits="userSpaceOnUse"><stop stopColor="#7dd8ff"/><stop offset="1" stopColor="#5db6ff"/></linearGradient><radialGradient id="f2095id8" cx="0" cy="0" r="1" gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.722 3.906)" gradientUnits="userSpaceOnUse"><stop stopColor="#7bd7ff"/><stop offset="1" stopColor="#7bd7ff" stopOpacity="0"/></radialGradient></defs></g></svg>
                            </a>
                        ) : (
                            <div className='p-3 bg-pink-600/10 rounded-xl'>
                                <h3 className='text-pink-600/80 font-bold'>Note</h3>
                                <p className='text-pink-400 text-sm'>This movie is currently available on cinema's</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}
