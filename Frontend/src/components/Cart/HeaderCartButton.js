import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  return (
    <button className={styles.button} onClick={props.onClickAction}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.cart_button_text}>Cart {`(40)`}</span>
    </button>
  );
};

export default HeaderCartButton;
