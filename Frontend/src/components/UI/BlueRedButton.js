import React from "react";
import styles from "./BlueRedButton.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlueRedButton = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className={styles["next_icon"]}
      />
    </button>
  );
};

export default BlueRedButton;
