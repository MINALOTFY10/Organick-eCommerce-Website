import React from "react";
import classes from "./Circle.module.css";

const Circle = (props) => {
  return (
    <div className={`${classes.circle} col-lg-8`}>
      <div className={classes["circle-content"]}>
        <div className={classes["circle-heading"]}>{props.heading}</div>
        <p className={classes["circle-text"]}>{props.text}</p>
      </div>
    </div>
  );
};

export default Circle;
