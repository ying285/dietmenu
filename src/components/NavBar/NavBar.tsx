import { Fragment } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { loginActions } from "../store/loginSlice";
import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
    navigate("/home");
  };
  return (
    <Fragment>
      <nav className={classes.nav}>
        <ul>
          <div>
            <h3>My Diet</h3>
          </div>
          <div className={classes.navItems}>
            <li>
              <NavLink
                className={(navData: any) =>
                  navData.isActive ? classes.active : ""
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            {loggedIn && (
              <li>
                <NavLink
                  className={(navData: any) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/weekmenu"
                >
                  WeeksMenu
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                className={(navData: any) =>
                  navData.isActive ? classes.active : ""
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            {loggedIn && (
              <li className={classes.logout} onClick={logoutHandler}>
                Logout
              </li>
            )}
          </div>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
