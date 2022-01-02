import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface mainMenuState {
  mainMenuItem: any;
}

const initialState: mainMenuState = { mainMenuItem: {} };

const mainMenuSlice = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    getMainMenuItems(state, action: PayloadAction<any>) {
      state.mainMenuItem = action.payload;
    },
  },
});

export const mainMenuActions = mainMenuSlice.actions;
export default mainMenuSlice.reducer;
