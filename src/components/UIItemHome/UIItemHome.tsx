import classes from "./UIItemHome.module.css";
import { useDispatch } from "react-redux";
import { weekMenuActions } from "../store/weekMenuSlice";

const UIItemHome: React.FC<{
  image: any;
  label: string;
  weekday: string;
  weekdayId: number;
}> = (props) => {
  console.log(props.weekdayId);
  const dispatch = useDispatch();
  const removeItemHandler = (weekday: string) => {
    dispatch(weekMenuActions.removeRecipe({ weekday }));
  };

  return (
    <div
      className={`${classes.showOrder5} ${classes.showItem}`}
      onClick={() => removeItemHandler(props.weekday)}
    >
      <div className={classes.imageContain}>
        <img src={props.image} alt={props.label} />
      </div>
      <div>
        <p className={classes.label}>{props.label}</p>
      </div>
      <div>
        <p className={classes.weekday}>{props.weekday}</p>
      </div>
    </div>
  );
};

export default UIItemHome;
