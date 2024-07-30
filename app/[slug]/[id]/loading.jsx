import React from 'react'
import Container from '@/components/Container'

export default function loading() {
    return (
        <Container>
            <div className='my-10'>
                <div className='shadow-lg bg-zinc-700/20 rounded-xl overflow-hidden'>
                    <div 
                        className="w-full aspect-video bg-zinc-600 animate-pulse"
                    ></div>
                    <div className='p-6 space-y-3'>
                        <div className='p-5 rounded-xl bg-zinc-600 animate-pulse w-2/6'></div>
                        <div className='p-3 rounded-xl bg-zinc-600 animate-pulse w-3/6'></div>
                        <div className='p-4 rounded-xl bg-zinc-600 animate-pulse w-4/6'></div>
                        <div className='p-5 rounded-xl bg-zinc-600 animate-pulse w-1/6'></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
