import React, { FC } from 'react'
import { CiBookmarkPlus } from 'react-icons/ci'
import { Quote } from '../../model/quote'
import { saveQuote } from '../../Redux/slices/Quotes'
import { ConnectedProps, connect } from 'react-redux'

type P = {
  quote: string,
  author: string
} & ReduxProps

const QuoteComponent: FC<P> = ({ quote, author , saveQuote }) => {
  return <div className='bg-red-400 m-4 rounded-xl shadow-md sm:max-w-3xl py-20 text-center font-bold text-2xl text-white sm:mx-auto px-6 flex flex-col'>
    <p>{quote}</p>
    <div className='flex mt-10 gap-4 items-center justify-center'>
      <p className='text-lg '>~{author}</p>
      <div className='cursor-pointer' onClick={()=>saveQuote()}><CiBookmarkPlus size={20} /></div>
    </div>
  </div>
}

const mapDispatchToProps = {
  saveQuote
}

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(QuoteComponent);