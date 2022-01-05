import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRecipe {
  weekday: string;
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
  choosedItem: any;
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
  choosedItem: [],
  recipes: []
};

const weekMenuSlice = createSlice({
  name: 'weekMenu',
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<IRecipe>) {
      const { weekday, recipe } = action.payload;
      state.recipes.push({ weekday, recipe });
    },
    removeRecipe(state, action: PayloadAction<any>) {
      const { weekday } = action.payload;
      console.log(weekday);
      state.recipes = state.recipes.filter(
        (recipe) => recipe.weekday !== weekday
      );
    },
    changeBtnColor(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'mon':
          state.isColorMon = !state.isColorTue;

          break;
        case 'tue':
          state.isColorTue = !state.isColorTue;
          break;
        case 'wed':
          state.isColorWed = !state.isColorWed;
          break;
        case 'thu':
          state.isColorThu = !state.isColorThu;
          break;
        case 'fri':
          state.isColorFri = !state.isColorFri;
          break;
        case 'sat':
          state.isColorSat = !state.isColorSat;
          break;
        case 'sun':
          state.isColorSun = !state.isColorSun;
          break;
      }
    },
    labelMatch(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.choosedItem?.find(
        (el: any) => el.label === newItem.label
      );
      if (!existingItem) {
        state.choosedItem = state.choosedItem.concat({
          label: action.payload.label,
          id: action.payload.id
        });
      } else {
        state.choosedItem = state.choosedItem.filter(
          (el: any) => el.label !== action.payload.label
        );
      }
    }
  }
});

export const weekMenuActions = weekMenuSlice.actions;
export default weekMenuSlice.reducer;
