import { useState } from "react";
import classes from "./ProductInformation.module.css";

const ProductInformation = ({ product }) => {
  const [productDescription, isProductDescription] = useState(true);

  const onClickDesriptionHanlder = () => {
    isProductDescription(true);
  }

  const onClickInfoHanlder = () => {
    isProductDescription(false);
  }
  return (
    <div className="container mt-5">
      <div className={`d-flex justify-content-center`}>
        <button onClick={onClickDesriptionHanlder} className={`me-4 ${classes["on-button"]} ${productDescription ? classes["active"] : classes["un-active"]}`}>
          Product Description
        </button>
        <button onClick={onClickInfoHanlder} className={`${classes["off-button"]} ${productDescription ? classes["un-active"] : classes["active"]}`}>Additional Info</button>
      </div>
      <div className="mt-4 mx-5">
        <p className={`${classes["text"]}`}>
          {productDescription
            ? product["seo"]["description"].slice(0, 310)
            : product["seo"]["description"]}
        </p>
      </div>
      <div className={`text`}></div>
    </div>
  );
};

export default ProductInformation;
