import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import WeekMenuDetail from "../WeekMenuDetail/WeekMenuDetail";
import classes from "./WeekMenu.module.css";
import { searchActions } from "../store/searchSlice";

const WeekMenu = () => {
  const dispatch = useDispatch();

  const choosedlabel = useSelector(
    (state: RootState) => state.weekMenu.choosedItem
  );
  const mainMenuItem = useSelector(
    (state: RootState) => state.mainMenu.mainMenuItem
  );

  const extraMenuItem = useSelector(
    (state: RootState) => state.extramenu.menuItem
  );

  console.log(mainMenuItem);
  console.log(extraMenuItem);

  // choosedlabel.map((el: any) => console.log(el));

  let itemArray = [];

  const mainData = mainMenuItem.hits?.map((item: any) => item.recipe);
  const extraData = extraMenuItem.hits?.map((item: any) => item.recipe);

  const totalData = mainData?.concat(extraData);
  console.log(totalData);

  dispatch(searchActions.searchMenuItems(totalData));

  for (let i = 0; i < totalData?.length; i++) {
    if (choosedlabel[i]?.label === totalData[i]?.label) {
      console.log(totalData[i]);
      itemArray.push({ data: totalData[i], id: choosedlabel[i]?.id });
    }
  }

  console.log(itemArray);

  return (
    <div className={classes.weekmenu}>
      {itemArray.map((el: any) => (
        <WeekMenuDetail
          key={el.data?.image}
          image={el.data?.image}
          label={el.data?.label}
          cuisineType={el.data?.cuisineType}
          dietLabels={el.data?.dietLabels}
          mealType={el.data?.mealType}
          id={el?.id}
        />
      ))}
    </div>
  );
};

export default WeekMenu;
