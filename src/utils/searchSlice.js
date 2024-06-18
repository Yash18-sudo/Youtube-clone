import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults:""
  },

  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    searchBarResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { cacheResults, searchBarResults } = searchSlice.actions;

export default searchSlice.reducer;
