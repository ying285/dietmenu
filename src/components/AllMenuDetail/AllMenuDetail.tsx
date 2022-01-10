import React, { Fragment } from "react";
import classes from "./AllMenuDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { weekMenuActions } from "../store/weekMenuSlice";

const days: any = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

const AllMenuDetail: React.FC<{
  image: string;
  label: string;
  dietLabels: string[];
  mealType: string;
  cuisineType: string;
}> = (props) => {
  const dispatch = useDispatch();

  const recipes = useSelector((state: RootState) => state.weekMenu.recipes);

  const isChosen = (weekday: string) =>
    recipes.some((recipe) => recipe.weekday === weekday);

  const dayHandler = (weekday: string) => {
    if (isChosen(weekday)) {
      dispatch(weekMenuActions.removeRecipe({ weekday }));
    } else {
      const { children, ...rest } = props;
      dispatch(
        weekMenuActions.addRecipe({
          weekday,
          recipe: rest,
          weekdayId: days[weekday.toLowerCase()],
        })
      );
    }
  };

  return (
    <Fragment>
      <div className={classes.wholeCard}>
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
        </div>

        <div className={classes.diatDate}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((weekday) => (
            <div
              key={weekday}
              className={`${classes.item}  ${
                isChosen(weekday) ? classes.itemColor : ""
              }`}
            >
              <input
                type="checkbox"
                name={weekday}
                onChange={() => dayHandler(weekday)}
                checked={isChosen(weekday)}
              />
              <label htmlFor={weekday}>{weekday}</label>
            </div>
          ))}

          {/* <div
            className={`${classes.item}  ${
              changeColorMon ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="mon"
              onChange={monHandler}
              checked={changeColorMon}
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
              checked={changeColorTue}
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
              checked={changeColorWed ? true : false}
            />
            <label htmlFor="wed">Wed</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorThu ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="thu"
              onChange={thuHandler}
              checked={changeColorThu}
            />
            <label htmlFor="thu">Thu</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorFri ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="fri"
              onChange={friHandler}
              checked={changeColorFri}
            />
            <label htmlFor="fri">Fri</label>
          </div>
          <div
            className={`${classes.item}  ${
              changeColorSat ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="sat"
              onChange={satHandler}
              checked={changeColorSat}
            />
            <label htmlFor="sat">Sat</label>
          </div>

          <div
            className={`${classes.item}  ${
              changeColorSun ? classes.itemColor : ""
            }`}
          >
            <input
              type="checkbox"
              name="sun"
              onChange={sunHandler}
              checked={changeColorSun}
            />
            <label htmlFor="sun">Sun</label>
          </div>*/}
        </div>
      </div>
    </Fragment>
  );
};

export default AllMenuDetail;
