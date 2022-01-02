import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchState {
  totalItems: any;
  searchOrd: string;
  showOrd: string;
}

const initialState: searchState = {
  totalItems: [],
  searchOrd: "",
  showOrd: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMenuItems(state, action: PayloadAction<any>) {
      state.totalItems = action.payload;
      console.log(state.totalItems);
    },
    getSearchOrd(state, action: PayloadAction<any>) {
      state.searchOrd = action.payload;
      const selectedItem = state.totalItems.find(
        (el: any) => el === state.searchOrd
      );
      state.showOrd = selectedItem;
      console.log(state.showOrd);
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
