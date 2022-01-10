import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import WeekMenuDetail from "../WeekMenuDetail/WeekMenuDetail";
import classes from "./WeekMenu.module.css";
import { searchActions } from "../store/searchSlice";
import { weekMenuActions } from "../store/weekMenuSlice";
import useDataFetch from "../hooks/useDataFetch";

const WeekMenu = () => {
  const recipes = useSelector((state: RootState) => state.weekMenu.recipes);
  // const dispatch = useDispatch();
  // const { getMainData } = useDataFetch();

  // const choosedlabel = useSelector(
  //   (state: RootState) => state.weekMenu.choosedItem
  // );
  // const mainMenuItem = useSelector(
  //   (state: RootState) => state.mainMenu.mainMenuItem
  // );

  // const extraMenuItem = useSelector(
  //   (state: RootState) => state.extramenu.menuItem
  // );

  // let itemArray: any = [];

  // const mainData = mainMenuItem.hits?.map((item: any) => item.recipe);
  // const extraData = extraMenuItem.hits?.map((item: any) => item.recipe);

  // const totalData = mainData?.concat(extraData);

  // dispatch(searchActions.searchMenuItems(totalData));

  // choosedlabel?.forEach((menuItem: any): void => {
  //   totalData?.forEach((item: any): void => {
  //     if (menuItem?.label === item?.label) {
  //       itemArray.push({ data: item, id: menuItem?.id });
  //     }
  //   });
  // });

  // choosedlabel?.forEach((menuItem: any): void => {
  //   getMainData?.forEach((el: any): void => {
  //     if (menuItem?.label === el?.label) {
  //       itemArray.push({ data: el, id: menuItem?.id });
  //     }
  //   });
  // });

  // itemArray.forEach((el: any) => console.log(el.data.label));

  // dispatch(weekMenuActions.UIHomeItemHandler(itemArray));

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
