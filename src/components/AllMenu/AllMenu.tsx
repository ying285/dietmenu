import classes from './AllMenu.module.css';
import { useEffect } from 'react';
import AllMenuDetail from '../AllMenuDetail/AllMenuDetail';
import { mainMenuActions } from '../store/mainMenuSlice';
import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import useDataFetch from '../hooks/useDataFetch';

const AllMenu: React.FC<{ newData: any }> = (props) => {
  useSelector((state: RootState) => state.search.isShowItems);
  const recipes: any = useSelector(
    (state: RootState) => state.recipesReducer.recipes
  );
  // const { totalData } = useDataFetch();

  // const dispatch = useDispatch();
  // const mainMenuItem = useSelector(
  //   (state: RootState) => state.mainMenu.mainMenuItem
  // );

  // const showItems = useSelector((state: RootState) => state.search.isShowItems);

  // const newMenuItems = props.newData.hits?.map((item: any) => item.recipe);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.edamam.com/api/recipes/v2?type=public&app_key=9aab7352a044f2870a286522b945386f&app_id=2200d214&q=lasagne"
  //     );
  //     const data = await response.json();

  //     dispatch(mainMenuActions.getMainMenuItems(data));
  //   } catch (err: any) {
  //     alert(err.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const mainData = mainMenuItem?.hits?.map((item: any) => item.recipe);

  // console.log(totalData);
  // console.log(mainData);

  if (recipes.length === 0) return <h3>Make a search</h3>;

  return (
    <div className={classes.allmenu}>
      <ul>
        {recipes.map(({ recipe }: any) => (
          <AllMenuDetail
            key={recipe.image}
            image={recipe.image}
            dietLabels={recipe.dietLabels}
            label={recipe.label}
            cuisineType={recipe.cuisineType}
            mealType={recipe.mealType}
          />
        ))}
        {/* {!showItems &&
          mainData?.map((el: any) => (
            <AllMenuDetail
              key={el.image}
              image={el.image}
              dietLabels={el.dietLabels}
              label={el.label}
              cuisineType={el.cuisineType}
              mealType={el.mealType}
            />
          ))}

        {!showItems &&
          newMenuItems?.map((el: any) => (
            <AllMenuDetail
              key={el.image}
              image={el.image}
              dietLabels={el.dietLabels}
              label={el.label}
              cuisineType={el.cuisineType}
              mealType={el.mealType}
            />
          ))}

        {showItems &&
          totalData?.map((el: any) => (
            <AllMenuDetail
              key={el.image}
              image={el.image}
              dietLabels={el.dietLabels}
              label={el.label}
              cuisineType={el.cuisineType}
              mealType={el.mealType}
            />
          ))} */}
      </ul>
    </div>
  );
};

export default AllMenu;
