import React from "react";
import styles from "./YellowButton.module.css";

const YellowButton = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default YellowButton;
