import React,{FC} from 'react'
import { ConnectedProps, connect } from 'react-redux';
import { BookmarkedQuoteArraySelector } from '../../Redux/selector/quote';
import { State } from '../../Redux/store';
import Quote from '../Ui-Component/Quote';
import NoQuoteAvailable from './NoQuoteAvailable';
import { removeBookmark } from '../../Redux/slices/Quotes';
type P ={} & ReduxProps
const Bookmark:FC<P>=({ BookMarks })=>{

  if(BookMarks.length == 0){
    return <NoQuoteAvailable />
  }

  return <div className='h-full max-w-5xl mx-auto pt-20 pb-28'>
    {
    BookMarks.map((quote)=>{
      return <Quote _id={quote._id}  quote={quote.content} author={quote.author} key={quote.author} booked={true} />
    })
    }
  </div>
}
const mapStateToProps = (state:State)=>( {
  BookMarks : BookmarkedQuoteArraySelector(state)
})


const connector = connect(mapStateToProps );

type ReduxProps = ConnectedProps<typeof connector>

export default connector(Bookmark);