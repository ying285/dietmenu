import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  menuItem: object;
  isFetch: boolean;
}

const initialState: menuState = { menuItem: {}, isFetch: false };

const menuSlice = createSlice({
  name: "extramenu",
  initialState,
  reducers: {
    openNewMenuItems(state, action: PayloadAction<any>) {
      state.menuItem = action.payload;
      console.log(state.menuItem);
    },
    isFetchHandler(state) {
      state.isFetch = !state.isFetch;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
