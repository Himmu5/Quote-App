import { takeLatest } from 'redux-saga/effects'
import { fetchQuote, loadingRandomQuote } from '../slices/Quotes';
import { getQuote, getTagsSaga } from './quote';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga(){
    yield takeLatest(loadingRandomQuote , getQuote);
    yield takeLatest(loadingRandomQuote , getTagsSaga);

}

export default sagaMiddleware;