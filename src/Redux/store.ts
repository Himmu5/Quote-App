import { configureStore } from  '@reduxjs/toolkit' 
import { quoteReducer } from './slices/Quotes'
import sagaMiddleware, { rootSaga } from './Saga'

export const store = configureStore({
    reducer : {
        quotes : quoteReducer
    },
    middleware:[sagaMiddleware]
})
sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof store.getState>
