import "font-awesome/css/font-awesome.min.css";
import classes from "./MainBanner.module.css"

const MainBanner = (props) => {
  return (
    <div className={classes["Banner_container"]}>
      <img
        src={props.img}
        className={`img-fluid ${classes["banner_img"]}`}
      />
      <div className={`col-6 ${classes["banner_slogan"]}`}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default MainBanner;
