import classes from "./WeekMenuDetail.module.css";

const WeekMenuDetail: React.FC<{
  image: string;
  label: string;
  cuisineType: string;
  dietLabels: string;
  mealType: string;
  id: string;
}> = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={props?.image} alt="images" />
        </div>
        <div className={classes.cardText}>
          <p>{`Label: ${props?.label}`}</p>
          <p>{`Cuisine type: ${props?.cuisineType}`}</p>
          <p>{`Diet label: ${props?.dietLabels}`}</p>
          <p>{`Meal Type: ${props?.mealType}`}</p>
          <p className={classes.menuDay}>{`Day: ${props?.id}`}</p>
        </div>
      </div>
    </div>
  );
};

export default WeekMenuDetail;
