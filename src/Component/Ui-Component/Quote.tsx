import React, { FC } from 'react'
import { CiBookmarkPlus } from 'react-icons/ci'
import { Quote } from '../../model/quote'

type P = {
  quote: string,
  author: string
}

const QuoteComponent: FC<P> = ({ quote, author }) => {
  return <div className='bg-red-400 m-4 rounded-xl shadow-md sm:max-w-3xl py-20 text-center font-bold text-2xl text-white sm:mx-auto px-6 flex flex-col'>
    <p>{quote}</p>
    <div className='flex mt-10 gap-4 items-center justify-center'>
      <p className='text-lg '>~{author}</p>
      <CiBookmarkPlus size={20} />
    </div>
  </div>
}

export default QuoteComponent;