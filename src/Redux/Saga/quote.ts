import { call , put } from 'redux-saga/effects'
import { fetchTags, getRandomQuote } from '../../Component/Api/Quote';
import { fetchQuote, fetchTagsAction } from '../slices/Quotes';
import { Action } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getQuote(action:PayloadAction<string>):Generator<any , any , any>{
    console.log("🚀 ~ file: quote.ts:8 ~ function*getQuote ~ action:", action)
    const data = yield call(getRandomQuote , action.payload);
    console.log("🚀 ~ file: quote.ts:10 ~ function*getQuote ~ data:", data)
    yield put(fetchQuote(data));
    
}
export function* getTagsSaga():Generator<any , any , any>{
    const data = yield call(fetchTags);
    yield put(fetchTagsAction(data));
    
}