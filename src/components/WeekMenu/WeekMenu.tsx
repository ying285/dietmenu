import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import WeekMenuDetail from '../WeekMenuDetail/WeekMenuDetail';
import classes from './WeekMenu.module.css';
import { searchActions } from '../store/searchSlice';
import { forEachTrailingCommentRange } from 'typescript';

const WeekMenu = () => {
  // const dispatch = useDispatch();

  const recipes = useSelector((state: RootState) => state.weekMenu.recipes);

  // const choosedlabel = useSelector(
  //   (state: RootState) => state.weekMenu.choosedItem
  // );
  // const mainMenuItem = useSelector(
  //   (state: RootState) => state.mainMenu.mainMenuItem
  // );

  // const extraMenuItem = useSelector(
  //   (state: RootState) => state.extramenu.menuItem
  // );

  // console.log(mainMenuItem);
  // console.log(extraMenuItem);

  // let itemArray: any = [];

  // const mainData = mainMenuItem.hits?.map((item: any) => item.recipe);
  // const extraData = extraMenuItem.hits?.map((item: any) => item.recipe);

  // const totalData = mainData?.concat(extraData);
  // console.log(totalData);

  // dispatch(searchActions.searchMenuItems(totalData));

  // for (let i = 0; i < totalData?.length; i++) {
  //   if (choosedlabel[i]?.label === totalData[i]?.label) {
  //     totalData[i] &&
  //       itemArray.push({ data: totalData[i], id: choosedlabel[i]?.id });
  //   }
  // }

  // choosedlabel?.forEach((menuItem: any): void => {
  //   totalData?.forEach((item: any): void => {
  //     if (menuItem?.label === item?.label) {
  //       itemArray.push({ data: item, id: menuItem?.id });
  //     }
  //   });
  // });

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
