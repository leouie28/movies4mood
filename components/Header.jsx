"use client"
import React from 'react'
import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import { Nunito } from "next/font/google";
import Image from "next/image";
import { Icon } from '@iconify-icon/react';
import { getMood } from '@/utils/mood';

const nunito = Nunito({
    subsets: ["latin"],
    variable: '--font-nunito'
});

export default function Header() {
    const router = useRouter()
    const segments = useSelectedLayoutSegments()

    const emote = segments.length ? getMood(segments[0]).emote : null

    return (
        <>
            <div className="grid grid-cols-7 gap-2 md:grid-cols-3 items-center bg-zinc-700/20 max-w-3xl mx-auto my-4 p-3 rounded-xl shadow-md">
                <Image 
                    src='/icon.png'
                    width={40}
                    height={40}
                    alt="Logo"
                    className='cursor-pointer col-span-2 md:col-span-1'
                    onClick={() => router.push('/')}
                />
                <h1 className={`${nunito.className} col-span-3 md:col-span-1 font-sans font-extrabold capitalize text-lg md:text-xl text-center`}>
                    {segments.length ? (
                        <div className='flex items-center gap-2 justify-center'>
                            <Icon icon={emote} className="text-xl sm:text-2xl" />
                            <span className='text-left leading-tight'>{segments[0]} Mood</span>
                        </div>
                    ) : "Movies4Mood"}
                </h1>
                <div className='text-right col-span-2 md:col-span-1'>
                    {segments.length ? (
                        <button onClick={() => router.push('/')} className='bg-pink-600 font-semibold text-sm md:text-base px-1.5 py-1 sm:px-3 sm:5py-2 rounded-lg'>
                            Change Mood
                        </button>
                    ) : ""}
                </div>
            </div>
        </>
    )
}
