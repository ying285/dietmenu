import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import menuReducer from './menuSlice';
import weekMenuReducer from './weekMenuSlice';
import mainMenuReducer from './mainMenuSlice';
import searchReducer from './searchSlice';
import recipesReducer from './recipesSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    extramenu: menuReducer,
    weekMenu: weekMenuReducer,
    mainMenu: mainMenuReducer,
    search: searchReducer,
    recipesReducer: recipesReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
