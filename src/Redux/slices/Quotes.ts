import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Quote } from "../../model/quote";
import { Tag } from "../../model/Tag";

// const quoteAdapter = createEntityAdapter<Tag>();

const initialState = {
  loading: false,
  quote: {} as Quote,
  tags:[] as Tag[]
};

type State = typeof initialState;

const quote = createSlice({
  name: "Quote",
  initialState,
  reducers: {
    loading: loadingQuote,
    fetchQuote: getQuote,
    fetchTags: getTags,
  },
});

function getTags(state: State , action:PayloadAction<Tag[]>) {
    let data = action.payload;
    data =data.map((tagObj)=>{
      return {...tagObj , id : tagObj._id}
    })
    state.tags = data;
}

function loadingQuote(state: State) {
  state.loading = true;
}

function getQuote(state: State, action: PayloadAction<Quote>) {
  state.quote = action.payload;
  state.loading = false;
}

export const { fetchQuote, loading: loadingRandomQuote , fetchTags:fetchTagsAction } = quote.actions;
export const quoteReducer = quote.reducer;
