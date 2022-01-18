import classes from "./Home.module.css";
import AllMenu from "../AllMenu/AllMenu";
import React, { useRef } from "react";
import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/searchSlice";
import { recipesActions } from "../store/recipesSlice";
import { weekMenuActions } from "../store/weekMenuSlice";
import useSearch from "../hooks/useSearch";
import UIItemHome from "../UIItemHome/UIItemHome";

const Home: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const menuItem = useSelector((state: RootState) => state.extramenu.menuItem);
  const nextFetchUrl = useSelector((state: RootState) => state.recipes.next);
  let recipes = useSelector((state: RootState) => state.weekMenu.recipes);
  const recipesItems = useSelector(
    (state: RootState) => state.recipes.recipesItems
  );

  const sortedRecipes = [...recipes].sort((a: any, b: any) => {
    return a.weekdayId - b.weekdayId;
  });
  //const sortedRecipes = recipes;
  console.log(sortedRecipes);
  const fetchMoreRecipes = async () => {
    try {
      const response = await fetch(nextFetchUrl!);
      const result = await response.json();
      dispatch(recipesActions.addMoreRecipes(result));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useSearch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredSearchInput = searchInputRef.current!.value;
    if (enteredSearchInput.trim() !== "") {
      dispatch(searchActions.isShowSearchItems());
      dispatch(recipesActions.setCurrentQuery(enteredSearchInput));

      searchInputRef.current!.value = "";
    }
  };

  const goBackHandler = () => {
    dispatch(weekMenuActions.removeAll());
    dispatch(recipesActions.toStartSida());
  };

  return (
    <main className={classes.image}>
      {!(recipesItems.length === 0) && (
        <button className={classes.HomeBtn} onClick={goBackHandler}>
          To start
        </button>
      )}

      <section className={classes.headerSection}>
        <h4>Choose your week's menu</h4>

        <div className={classes.itemsTitle}>
          {sortedRecipes &&
            sortedRecipes?.map((el: any) => (
              <UIItemHome
                key={el.weekdayId}
                image={el.recipe?.image}
                label={el.recipe?.label}
                weekday={el.weekday}
                weekdayId={el.weekdayId}
              />
            ))}
        </div>
        <div className={classes.searchForm}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="Search menu e.g pizza"
                ref={searchInputRef}
              />
            </div>

            <div className={classes.searchButton}>
              <button>Search</button>
            </div>
          </form>
        </div>
      </section>

      <section className={classes.allMenuSection}>
        <AllMenu newData={menuItem} />
      </section>

      <div className={classes.moreBtn}>
        {!(recipesItems.length === 0) && (
          <button onClick={fetchMoreRecipes}>More...</button>
        )}
      </div>
    </main>
  );
};

export default Home;
