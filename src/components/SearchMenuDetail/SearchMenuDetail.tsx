import { RootState } from "../store/index";
import { useSelector } from "react-redux";
import classes from "./SearchMenuDetail.module.css";
import { useParams } from "react-router-dom";
import useDataFetch from "../hooks/useDataFetch";

const SearchMenuDetail: React.FC = () => {
  const mySearchOrd = useSelector((state: RootState) => state.search.searchOrd);

  const { totalData } = useDataFetch();

  let result: any;

  result = totalData?.find((el: any) => el?.label === mySearchOrd);

  let elements;

  if (result) {
    elements = (
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={result.image} alt="" />
        </div>
        <div className={classes.cardText}>
          <p>{`Label: ${result.label}`}</p>
          <p>{`Cuisine type: ${result.cuisineType}`}</p>
          <p>{`Diet label: ${result.dietLabels}`}</p>
          <p>{`Meal Type: ${result.mealType}`}</p>
        </div>
      </div>
    );
  } else {
    alert("Please enter a correct search ord!");
  }

  // const params = useParams();
  // console.log(params);

  return (
    <div>
      <h1>Search result</h1>
      {elements}
    </div>
  );
};

export default SearchMenuDetail;
