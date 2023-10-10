import React from "react";
import classes from "./SmallLoadingScreen.module.css";

const SmallLoadingScreen = () => {
  return (
    <div className={classes["loading-container"]}>
      <div className={classes["loading-spinner"]}></div>
    </div>
  );
};

export default SmallLoadingScreen;