import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: null,
  recipes: [],
  next: null,
  totalCount: 0
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setCurrentQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setRecipesInfo(state, action) {
      const { count, hits, _links } = action.payload;
      state.recipes = hits;
      state.next = _links.next.href;
      state.totalCount = count;
    },
    addMoreRecipes(state, action) {
      const { hits, _links } = action.payload;
      state.recipes = state.recipes.concat(hits);
      state.next = _links.next.href;
    }
  }
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice.reducer;
