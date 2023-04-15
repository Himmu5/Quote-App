import React, { FC } from 'react'
import { CiBookmarkPlus } from 'react-icons/ci'
import { Quote } from '../../model/quote'
import { removeBookmark, saveQuote } from '../../Redux/slices/Quotes'
import { ConnectedProps, connect } from 'react-redux'
import { State } from '../../Redux/store'
import { loadingSelector } from '../../Redux/selector/quote'
import Loader from './Loader'
import { AiOutlineDelete } from 'react-icons/ai'
import Button from './Button'

type P = {
  quote: string,
  author: string,
  booked: boolean,
  _id:string
} & ReduxProps


const QuoteComponent: FC<P> = ({ quote, author, saveQuote, loading, booked , removeBookmark , _id}) => {


  if (loading) {
    return <Loader />
  }

  return <div className='bg-red-400 m-4 rounded-xl shadow-md sm:max-w-3xl py-20 text-center font-bold text-2xl text-white sm:mx-auto px-6 flex flex-col'>
    <p>{quote}</p>
    <div className='flex mt-10 gap-4 items-center justify-center'>
      <p className='text-lg '>~{author}</p>
      {booked == false ? <div className='cursor-pointer bg-green-500 hover:bg-green-600 p-2' onClick={() => saveQuote()}><CiBookmarkPlus size={20} /></div> : <Button extraClass='px-2 hover:bg-red-700 bg-red-600' mode='Primary' onClick={()=>removeBookmark(_id)} > <AiOutlineDelete size={25}/> </Button>}
    </div>
  </div>
}

const mapDispatchToProps = {
  saveQuote,
  removeBookmark
}

const mapStateToProps = (state: State) => ({ loading: loadingSelector(state) })

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(QuoteComponent);