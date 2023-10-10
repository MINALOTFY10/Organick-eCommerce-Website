import React from "react";
import classes from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={classes["loading-container"]}>
      <div className={classes["loading-spinner"]}></div>
    </div>
  );
};

export default LoadingScreen;