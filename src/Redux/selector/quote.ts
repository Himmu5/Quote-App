import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

const stateSelector = (state:State)=>{
    return state.quotes;
}

export const loadingSelector = createSelector(stateSelector , (quoteState)=>{
    return quoteState.loading;
})

export const quoteSelector = createSelector(stateSelector , (quoteState)=>{
    return quoteState.quote;
})

export const tagSelector = createSelector(stateSelector , (quoteState)=>{
    return quoteState.tags;
})

export const selectedTag = createSelector(stateSelector  , (quoteState)=>{
    return quoteState.selectedTag;
})

export const BookmarkedQuoteMapSelector = createSelector(stateSelector  , (quoteState)=>{
    return quoteState.BookmarkedQuote;
})

export const BookmarkedQuoteArraySelector = createSelector(stateSelector  , (quoteState)=>{
    return  Object.keys(quoteState.BookmarkedQuote).map((key)=>{
        return quoteState.BookmarkedQuote[key];
    });
})
