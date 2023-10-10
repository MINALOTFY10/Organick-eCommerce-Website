import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import classes from "./ErrorScreen.module.css"

const ErrorScreen = (props) => {
  return (
    <div className={classes["error-container"]}>
      <div className={classes["error-icon"]}>
        <FontAwesomeIcon icon={faExclamationCircle} className={classes["spinning-icon"]} />
      </div>
      <div className={classes["error-message"]}>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
}

export default ErrorScreen;
