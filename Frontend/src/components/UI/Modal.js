import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles.content}>{props.children}</div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
