import { RootState } from "../store/index";
import { useSelector } from "react-redux";
import WeekMenuDetail from "../WeekMenuDetail/WeekMenuDetail";
import classes from "./WeekMenu.module.css";

const WeekMenu = () => {
  const recipes = useSelector((state: RootState) => state.weekMenu.recipes);

  return (
    <div className={classes.weekmenu}>
      {recipes.map((el: any) => (
        <WeekMenuDetail
          key={el.weekday}
          image={el.recipe.image}
          label={el.recipe.label}
          cuisineType={el.recipe.cuisineType}
          dietLabels={el.recipe.dietLabels}
          mealType={el.recipe.mealType}
          id={el?.weekday}
        />
      ))}
    </div>
  );
};

export default WeekMenu;
