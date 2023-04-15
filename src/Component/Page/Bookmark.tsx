import React,{FC} from 'react'
import { ConnectedProps, connect } from 'react-redux';
import { BookmarkedQuoteSelector } from '../../Redux/selector/quote';
import { State } from '../../Redux/store';
import Quote from '../Ui-Component/Quote';
type P ={} & ReduxProps
const Bookmark:FC<P>=({ BookMarks })=>{
  return <div className='h-full max-w-5xl mx-auto'>
    {
    BookMarks.map((quote)=>{
      return <Quote quote={quote.content} author={quote.author} key={quote.author} />
    })
    }
  </div>
}
const mapStateToProps = (state:State)=>( {
  BookMarks : BookmarkedQuoteSelector(state)
})
const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>

export default connector(Bookmark);