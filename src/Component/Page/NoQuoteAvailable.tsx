import React, { FC } from 'react'
type P = {}
const NoQuoteAvailable: FC<P> = () => {
    return <div className='font-bold  text-2xl text-center text-white h-screen flex flex-col  my-20 '>
        <h1 className='p-20 bg-red-400 rounded-md shadow-md m-3 sm:max-w-4xl sm:mx-auto'>
            No Bookmarked Quote
        </h1>
    </div>
}
export default NoQuoteAvailable;