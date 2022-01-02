import React, { useRef } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { loginActions } from "../store/loginSlice";
import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const toggleHandler = () => {
    dispatch(loginActions.toggleLogin());
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredInputEmail = emailInputRef.current?.value.trim();
    const enteredInputPassword = passwordInputRef.current?.value.trim();

    if (enteredInputEmail !== "" && enteredInputPassword !== "") {
      let url: string;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAJQEYlJwNJy_3rzfgpSTvSY38gjjKrPis";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJQEYlJwNJy_3rzfgpSTvSY38gjjKrPis";
      }

      axios
        .post(url, {
          email: enteredInputEmail,
          password: enteredInputPassword,
          returnSecureToken: false,
        })
        .then((res) => {
          dispatch(loginActions.login(res.data.idToken));
          navigate("/home");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className={classes.formLayout}>
      <form className={classes.loginForm} onSubmit={submitHandler}>
        <h3>{isLogin ? "Login" : "Signup"}</h3>
        <div className={classes.controlForm}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.controlForm}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.loginText} onClick={toggleHandler}>
          {isLogin && <p>Login with existing account</p>}
          {!isLogin && <p>Create a new account</p>}
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
