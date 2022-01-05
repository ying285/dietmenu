import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  loggedIn: boolean;
  isLogin: boolean;
  getToken: string | any;
}

const initialState: loginState = {
  isLogin: true,
  getToken: "",
  loggedIn: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.getToken = localStorage.getItem("token");
      if (state.getToken) {
        state.loggedIn = true;
      }
    },

    toggleLogin(state) {
      state.isLogin = !state.isLogin;
    },

    logout(state) {
      state.loggedIn = false;

      localStorage.removeItem("token");
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
