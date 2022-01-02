import React, { Fragment } from "react";
import classes from "./AllMenuDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { weekMenuActions } from "../store/weekMenuSlice";

const AllMenuDetail: React.FC<{
  image: string;
  label: string;
  dietLabels: string[];
  mealType: string;
  cuisineType: string;
}> = (props) => {
  const dispatch = useDispatch();
  const changeColorMon: boolean = useSelector(
    (state: RootState) => state.weekMenu.isColorMon
  );
  const changeColorTue = useSelector(
    (state: RootState) => state.weekMenu.isColorTue
  );
  const changeColorWed = useSelector(
    (state: RootState) => state.weekMenu.isColorWed
  );
  const changeColorThu = useSelector(
    (state: RootState) => state.weekMenu.isColorThu
  );
  const changeColorFri = useSelector(
    (state: RootState) => state.weekMenu.isColorFri
  );
  const changeColorSat = useSelector(
    (state: RootState) => state.weekMenu.isColorSat
  );
  const changeColorSun = useSelector(
    (state: RootState) => state.weekMenu.isColorSun
  );

  const monHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("mon"));
    dispatch(weekMenuActions.labelMatch({ label: props.label, id: "Monday" }));
  };
  const tueHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("tue"));
    dispatch(weekMenuActions.labelMatch({ label: props.label, id: "Tuesday" }));
  };
  const wedHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("wed"));
    dispatch(
      weekMenuActions.labelMatch({ label: props.label, id: "Wednesday" })
    );
  };
  const thuHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("thu"));
    dispatch(
      weekMenuActions.labelMatch({ label: props.label, id: "Thursday" })
    );
  };
  const friHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("fri"));
    dispatch(weekMenuActions.labelMatch({ label: props.label, id: "Friday" }));
  };
  const satHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("sat"));
    dispatch(
      weekMenuActions.labelMatch({ label: props.label, id: "Saturday" })
    );
  };
  const sunHandler = () => {
    dispatch(weekMenuActions.changeBtnColor("sun"));
    dispatch(weekMenuActions.labelMatch({ label: props.label, id: "Sunday" }));
  };

  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.cardText}>
          <p>{`Label: ${props.label}`}</p>
          <p>{`Cuisine type: ${props.cuisineType}`}</p>
          <p>{`Diet label: ${props.dietLabels}`}</p>
          <p>{`Meal Type: ${props.mealType}`}</p>
        </div>
        <div className={classes.diatDate}>
          <div
            className={`${classes.item}  ${
              changeColorMon ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="mon"
              onChange={monHandler}
              disabled={changeColorMon}
            />
            <label htmlFor="mon">Mon</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorTue ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="tue"
              onChange={tueHandler}
              //disabled={changeColorTue}
            />
            <label htmlFor="tue">Tue</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorWed ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="wed"
              onChange={wedHandler}
              //disabled={changeColorWed}
            />
            <label htmlFor="wed">Wed</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorThu ? classes.itemColor : ""
            }`}
          >
            <input type="checkbox" name="thu" onChange={thuHandler} />
            <label htmlFor="thu">Thu</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorFri ? classes.itemColor : ""
            }`}
          >
            <input type="checkbox" name="fri" onChange={friHandler} />
            <label htmlFor="fri">Fri</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorSat ? classes.itemColor : ""
            }`}
          >
            <input type="checkbox" name="sat" onChange={satHandler} />
            <label htmlFor="sat">Sat</label>
          </div>

          <div
            className={`${classes.item}  ${
              changeColorSun ? classes.itemColor : ""
            }`}
          >
            <input type="checkbox" name="sun" onChange={sunHandler} />
            <label htmlFor="sun">Sun</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllMenuDetail;