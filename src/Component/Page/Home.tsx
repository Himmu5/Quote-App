import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import QuoteComponent from '../Ui-Component/Quote';
import Button from '../Ui-Component/Button';
import { ConnectedProps, connect, useDispatch } from 'react-redux';
import { loadingRandomQuote, selectTagAction } from '../../Redux/slices/Quotes';
import { State } from '../../Redux/store';
import { quoteSelector, selectedTag } from '../../Redux/selector/quote';
import Selector from '../Ui-Component/Selector';

type P = {} & ReduxProps

const Home: FC<P> = ({ loadingRandomQuote, quoteData , selectTagAction , tag}) => {
  const [next, setNext] = useState(1);

  useEffect(() => {
    loadingRandomQuote(tag);
  }, [next])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {selectTagAction(e.target.value)}



  return <div className='flex flex-col gap-4 items-center h-screen justify-center'>
    <QuoteComponent quote={quoteData.content} author={quoteData.author} />
    <Selector onChange ={handleChange}/>
    <Button mode='Primary' onClick={() => setNext(next + 1)} extraClass=" px-3 py-1 ">Next Quote</Button>
  </div>
}


const mapDispatchToProps = {
  loadingRandomQuote,
  selectTagAction
}

const mapStateToProps = (state: State) => ({ quoteData: quoteSelector(state) , tag : selectedTag(state) })


const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);