import { call , put } from 'redux-saga/effects'
import { fetchTags, getRandomQuote } from '../../Component/Api/Quote';
import { fetchQuote, fetchTagsAction } from '../slices/Quotes';

export function* getQuote():Generator<any , any , any>{
    const data = yield call(getRandomQuote);
    yield put(fetchQuote(data));
    
}
export function* getTagsSaga():Generator<any , any , any>{
    const data = yield call(fetchTags);
    yield put(fetchTagsAction(data));
    
}