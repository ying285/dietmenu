import classes from "./SearchMenuDetail.module.css";

const SearchMenuDetail: React.FC = () => {
  let result: any;

  let elements;

  if (result) {
    console.log("result running");
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
    console.log("alert running");
    alert("Please enter a correct search ord!");
  }

  return (
    <div>
      <h1>Search result</h1>
      {elements}
    </div>
  );
};

export default SearchMenuDetail;
