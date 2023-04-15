import React,{FC, useEffect, useState} from 'react'
import QuoteComponent from '../Ui-Component/Quote';
import Button from '../Ui-Component/Button';
import { ConnectedProps, connect, useDispatch } from 'react-redux';
import { loadingRandomQuote } from '../../Redux/slices/Quotes';
import { State } from '../../Redux/store';
import { quoteSelector } from '../../Redux/selector/quote';
import Selector from '../Ui-Component/Selector';

type P ={} & ReduxProps

const Home:FC<P>=({ loadingRandomQuote , quoteData })=>{
    const [next , setNext] = useState(1);
    
    useEffect(()=>{
        loadingRandomQuote();
    },[next])

  return <div className='flex flex-col gap-4 items-center'>
    <QuoteComponent quote={quoteData.content} author={quoteData.author}/>
    <Selector />
    <Button mode='Primary' onClick={()=>setNext(next + 1)} extraClass=" px-3 py-1 ">Next Quote</Button>
  </div>
}

const mapDispatchToProps = {
    loadingRandomQuote
}

const mapStateToProps = (state:State)=>({ quoteData : quoteSelector(state) })

const connector = connect( mapStateToProps , mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default  connector(Home);