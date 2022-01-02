import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import menuReducer from "./menuSlice";
import weekMenuReducer from "./weekMenuSlice";
import mainMenuReducer from "./mainMenuSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    extramenu: menuReducer,
    weekMenu: weekMenuReducer,
    mainMenu: mainMenuReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
