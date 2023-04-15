import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Quote } from "../../model/quote";
import { Tag } from "../../model/Tag";

// const quoteAdapter = createEntityAdapter<Tag>();

const initialState = {
  loading: false,
  quote: {} as Quote,
  tags:[] as Tag[],
  selectedTag : "",
  BookmarkedQuote:{} as  {[id:string]:Quote}
};

type State = typeof initialState;

const quote = createSlice({
  name: "Quote",
  initialState,
  reducers: {
    loading: loadingQuote,
    fetchQuote: getQuote,
    fetchTags: getTags,
    selectTag:tagSelect,
    saveQuote : bookmarkQuote,
    removeBookmark:removeBookmarkFunction
  },
});

function removeBookmarkFunction(state:State , action:PayloadAction<string>){
  console.log(action.payload);
  delete state.BookmarkedQuote[action.payload];
}


function bookmarkQuote(state:State){

  state.BookmarkedQuote = { ...state.BookmarkedQuote , [state.quote._id]:state.quote}
}


function tagSelect(state:State , action:PayloadAction<string>){
  state.selectedTag = action.payload;
}

function getTags(state: State , action:PayloadAction<Tag[]>) {
    let data = action.payload;
    data =data.map((tagObj)=>{
      return {...tagObj , id : tagObj._id}
    })
    state.tags = data;
}

function loadingQuote(state: State , action:PayloadAction<string>) {
  state.loading = true;
}

function getQuote(state: State, action: PayloadAction<Quote>) {
  state.quote = action.payload;
  state.loading = false;
}

export const { fetchQuote, loading: loadingRandomQuote , fetchTags:fetchTagsAction , selectTag:selectTagAction , saveQuote , removeBookmark} = quote.actions;
export const quoteReducer = quote.reducer;
