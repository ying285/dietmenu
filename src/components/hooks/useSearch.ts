import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { recipesActions } from "../store/recipesSlice";
import { RootState } from "../store/index";

const useSearch = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.recipes.searchQuery
  );

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          "https://api.edamam.com/api/recipes/v2?type=public&app_key=9aab7352a044f2870a286522b945386f&app_id=2200d214&q=" +
            searchQuery
        );

        const result = await response.json();
        dispatch(recipesActions.setRecipesInfo(result));
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchSearch();
  }, [searchQuery, dispatch]);
};

export default useSearch;
