import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchState {
  totalItems: string[];
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
    searchMenuItems(state, action: PayloadAction<string[]>) {
      state.totalItems = action.payload;
      console.log(state.totalItems);
    },
    getSearchOrd(state, action: PayloadAction<string>) {
      state.searchOrd = action.payload;
      // console.log(state.searchOrd);

      //let selectedItem;
      // selectedItem
      //   ? state.totalItems.find((el: any) => el.label === state.searchOrd)
      //   : alert("please enter a correct ord");
      // state.showOrd = selectedItem;
      // console.log(state.showOrd);
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
