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


