"use client"
import React from 'react'
import Link from "next/link";
import { Nunito } from "next/font/google";
import { Icon } from '@iconify-icon/react';

const nunito = Nunito({
    subsets: ["latin"],
    variable: '--font-nunito'
});

export default function Button({name, emote}) {
    return (
        <div className="rounded-lg p-[1px] bg-gradient-to-r from-fuchsia-600 to-pink-600">
            <Link href={`/${name}`} className="relative hover:bg-gradient-to-r block text-center hover:from-fuchsia-600 hover:to-pink-600 bg-zinc-800 w-full rounded-lg py-2 md:py-4">
                <div className="flex justify-center items-center gap-0.5 md:gap-2 flex-col md:flex-row">
                    <Icon icon={emote} className="text-2xl" />
                    <span className={`${nunito.className} font-sans md:text-lg uppercase font-extrabold`}>
                        {name}
                    </span>
                </div>
            </Link>
        </div>
    )
}
