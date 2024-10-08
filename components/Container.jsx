import React from 'react'

export default function Container({ children }) {
    return (
        <div className='mx-auto px-4 max-w-5xl'>
            {children}
        </div>
    )
}
