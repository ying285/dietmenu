import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface recipesState {
  searchQuery: any;
  recipesItems: string[];
  next: any;
  totalCount: number;
}

const initialState: recipesState = {
  searchQuery: null,
  recipesItems: [],
  next: null,
  totalCount: 0,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCurrentQuery(state, action: PayloadAction<any>) {
      state.searchQuery = action.payload;
    },
    setRecipesInfo(state, action: PayloadAction<any>) {
      const { count, hits, _links } = action.payload;
      state.recipesItems = hits;
      state.next = _links.next.href;
      state.totalCount = count;
    },
    addMoreRecipes(state, action: PayloadAction<any>) {
      const { hits, _links } = action.payload;
      state.recipesItems = state.recipesItems.concat(hits);
      state.next = _links.next.href;
    },

    toStartSida(state) {
      state.recipesItems.length = 0;
    },
  },
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice.reducer;
