import classes from "./Home.module.css";
import AllMenu from "../AllMenu/AllMenu";
import React, { useEffect, useCallback, useRef } from "react";
import { menuActions } from "../store/menuSlice";
import { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/searchSlice";

const Home: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const menuItem = useSelector((state: RootState) => state.extramenu.menuItem);
  const isFetch: boolean = useSelector(
    (state: RootState) => state.extramenu.isFetch
  );

  const getFetchHandler = () => {
    dispatch(menuActions.isFetchHandler());
  };

  let url =
    "https://api.edamam.com/api/recipes/v2?q=lasagne&app_key=9aab7352a044f2870a286522b945386f&_cont=CHcVQBtNNQphDmgVQntAEX4BYlxtAQUBQWZFA2sRYlNwBAsAUXlSVzMUalQgAVAEQzNJB2AbZ1chBgcPF2cRVzcQNQFyB1YVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=2200d214";

  const getMoreItemHandler = useCallback(async () => {
    if (isFetch) {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((data) => dispatch(menuActions.openNewMenuItems(data)));
      } catch (err: any) {
        alert(err.message);
      }
    }
  }, [dispatch, url, isFetch]);

  useEffect(() => {
    getMoreItemHandler();
  }, [getMoreItemHandler]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredSearchInput = searchInputRef.current!.value;
    if (enteredSearchInput.trim() !== "") {
      dispatch(searchActions.searchMenuItems(enteredSearchInput));
    }

    return (
      <div className={classes.image}>
        <div className={classes.searchForm}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="Search your food here"
                ref={searchInputRef}
              />
            </div>
            <div className={classes.searchButton}>
              <button>Search</button>
            </div>
          </form>
        </div>
        <div>
          <AllMenu newData={menuItem} />{" "}
        </div>
        <div className={classes.moreBtn}>
          <button onClick={getFetchHandler}>More...</button>
        </div>
      </div>
    );
  };
};
export default Home;
