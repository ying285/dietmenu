import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  loggedIn: boolean;
  isLogin: boolean;
  getToken: any;
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
    login(state, action: PayloadAction<string>) {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        state.getToken = localStorage.getItem("token");
        state.loggedIn = !!state.getToken;
      }
    },
    logout(state) {
      state.loggedIn = false;

      localStorage.removeItem("token");
    },
    toggleLogin(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
