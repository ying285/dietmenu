import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface weekMenuState {
  isColorMon: boolean;
  isColorTue: boolean;
  isColorWed: boolean;
  isColorThu: boolean;
  isColorFri: boolean;
  isColorSat: boolean;
  isColorSun: boolean;
  choosedItem: any;
}

const initialState: weekMenuState = {
  isColorMon: false,
  isColorTue: false,
  isColorWed: false,
  isColorThu: false,
  isColorFri: false,
  isColorSat: false,
  isColorSun: false,
  choosedItem: [],
};

const weekMenuSlice = createSlice({
  name: "weekMenu",
  initialState,
  reducers: {
    changeBtnColor(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "mon":
          state.isColorMon = !state.isColorTue;
          console.log(state.isColorMon);
          break;
        case "tue":
          state.isColorTue = !state.isColorTue;
          break;
        case "wed":
          state.isColorWed = !state.isColorWed;
          break;
        case "thu":
          state.isColorThu = !state.isColorThu;
          break;
        case "fri":
          state.isColorFri = !state.isColorFri;
          break;
        case "sat":
          state.isColorSat = !state.isColorSat;
          break;
        case "sun":
          state.isColorSun = !state.isColorSun;
          break;
      }
    },
    labelMatch(state, action: PayloadAction<any>) {
      state.choosedItem = state.choosedItem.concat({
        label: action.payload.label,
        id: action.payload.id,
      });
      console.log(state.choosedItem);
    },
  },
});

export const weekMenuActions = weekMenuSlice.actions;
export default weekMenuSlice.reducer;
