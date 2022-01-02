import classes from "./AllMenu.module.css";
import { useEffect } from "react";
import AllMenuDetail from "../AllMenuDetail/AllMenuDetail";
import { mainMenuActions } from "../store/mainMenuSlice";
import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";

const AllMenu = (props: { newData: any }) => {
  const dispatch = useDispatch();
  const mainMenuItem = useSelector(
    (state: RootState) => state.mainMenu.mainMenuItem
  );

  const newMenuItems = props.newData.hits?.map((item: any) => item.recipe);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.edamam.com/api/recipes/v2?type=public&app_key=9aab7352a044f2870a286522b945386f&app_id=2200d214&q=lasagne"
      );
      const data = await response.json();
      dispatch(mainMenuActions.getMainMenuItems(data));
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mainData = mainMenuItem.hits?.map((item: any) => item.recipe);

  return (
    <div className={classes.allmenu}>
      <ul>
        {mainData &&
          mainData.map((el: any) => (
            <AllMenuDetail
              key={el.image}
              image={el.image}
              dietLabels={el.dietLabels}
              label={el.label}
              cuisineType={el.cuisineType}
              mealType={el.mealType}
            />
          ))}
        {newMenuItems &&
          newMenuItems.map((el: any) => (
            <AllMenuDetail
              key={el.image}
              image={el.image}
              dietLabels={el.dietLabels}
              label={el.label}
              cuisineType={el.cuisineType}
              mealType={el.mealType}
            />
          ))}
      </ul>
    </div>
  );
};

export default AllMenu;
