import React, { FC } from 'react'
import { CiBookmarkPlus } from 'react-icons/ci'
import { Quote } from '../../model/quote'
import { saveQuote } from '../../Redux/slices/Quotes'
import { ConnectedProps, connect } from 'react-redux'
import { State } from '../../Redux/store'
import { loadingSelector } from '../../Redux/selector/quote'
import Loader from './Loader'

type P = {
  quote: string,
  author: string
} & ReduxProps


const QuoteComponent: FC<P> = ({ quote, author , saveQuote , loading}) => {


  if(loading){
    return <Loader />
  }

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

const mapStateToProps = (state:State)=>({ loading : loadingSelector(state) })

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(QuoteComponent);