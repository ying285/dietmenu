import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import WeekMenu from "./components/WeekMenu/WeekMenu";
import NavBar from "./components/NavBar/NavBar";
import { RootState } from "../src/components/store/index";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import { loginActions } from "./components/store/loginSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(loginActions.login());

  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <div className={classes.extraHeight}></div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {loggedIn && <Route path="/weekmenu" element={<WeekMenu />} />}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
