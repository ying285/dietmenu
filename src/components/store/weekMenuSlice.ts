import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRecipe {
  weekday: string[] | any;
  weekdayId: number;
  recipe: {};
}

interface weekMenuState {
  isColorMon: boolean;
  isColorTue: boolean;
  isColorWed: boolean;
  isColorThu: boolean;
  isColorFri: boolean;
  isColorSat: boolean;
  isColorSun: boolean;
  recipes: IRecipe[];
}

const initialState: weekMenuState = {
  isColorMon: false,
  isColorTue: false,
  isColorWed: false,
  isColorThu: false,
  isColorFri: false,
  isColorSat: false,
  isColorSun: false,
  recipes: [],
};

const weekMenuSlice = createSlice({
  name: "weekMenu",
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<IRecipe>) {
      const { weekday, recipe, weekdayId } = action.payload;

      state.recipes.push({ weekday, recipe, weekdayId });
    },
    removeRecipe(state, action: PayloadAction<string[] | any>) {
      const { weekday } = action.payload;

      state.recipes = state.recipes.filter(
        (recipe) => recipe.weekday !== weekday
      );
    },

    removeAll(state) {
      state.recipes.length = 0;
    },

    changeBtnColor(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "mon":
          state.isColorMon = !state.isColorTue;

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
  },
});

export const weekMenuActions = weekMenuSlice.actions;
export default weekMenuSlice.reducer;
