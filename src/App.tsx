import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import WeekMenu from "./components/WeekMenu/WeekMenu";
import NavBar from "./components/NavBar/NavBar";
import { RootState } from "../src/components/store/index";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import SearchMenuDetail from "./components/SearchMenuDetail/SearchMenuDetail";

function App() {
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
          <Route path="/search" element={<SearchMenuDetail />} />
          <Route path="/login" element={<Login />} />
          {loggedIn && <Route path="/weekmenu" element={<WeekMenu />} />}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
