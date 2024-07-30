import Container from '@/components/Container'
import Movies from '@/components/Movies'
import MoviesLoader from '@/components/MoviesLoader'
import Pagination from '@/components/Pagination'
import { getMood } from '@/utils/mood'
import React, { Suspense } from 'react'

export default async function MoodPage({ params, searchParams }) {
    
    const mood = getMood(params.slug)

    return (
        <Container>
            <Suspense key={searchParams.page} fallback={<MoviesLoader />}>
                <Movies mood={mood} page={searchParams.page} />
            </Suspense>
            <Pagination route={params.slug} page={searchParams.page||1} />
        </Container>
    )
}
