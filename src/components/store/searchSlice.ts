import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchState {
  totalItems: string[];
  searchOrd: string;
  isShowItems: boolean;
}

const initialState: searchState = {
  totalItems: [],
  searchOrd: "",
  isShowItems: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMenuItems(state, action: PayloadAction<string[]>) {
      state.totalItems = action.payload;
      console.log(state.totalItems);
    },
    getSearchOrd(state, action: PayloadAction<string>) {
      state.searchOrd = action.payload;
    },
    isShowSearchItems(state) {
      state.isShowItems = !state.isShowItems;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
