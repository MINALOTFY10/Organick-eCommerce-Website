import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import OldPrice from "../../assets/OldPriceImg.png";
import Stars from "../UI/Stars";

const ProductItem = ({ product }) => {
  const [productClicked, setProductClicked] = useState(false);

  const onClickProductHandler = () => {
    setProductClicked(true);
  };

  return (
    <div
      key={product.id}
      onClick={onClickProductHandler}
      className={`${classes["my-card"]} col-sm-4 col-md-5 col-lg-4 col-xl-3 my-4 d-flex justify-content-center align-items-center`}
    >
      {!productClicked ? (
        // The Product
        <Link to={`/shop/${product.id}`}>
          <div className={`card p-1 px-2 ${classes["product-item"]}`}>
            {/* Product Tag */}
            <div className="container mt-3 mb-2">
              <span className={`badge badge-primary ${classes["product-tag"]}`}>
                {product.seo.title}
              </span>
            </div>
            {/* Product Image */}
            <img
              src={product.image.url}
              className={`card-img-top img-fluid ${classes["product-image"]}`}
              alt="product image"
            />
            {/* Product Title */}
            <div className="card-body pb-0">
              <h5
                className={`card-title p-0 pb-2 m-0 text-decoration-none ${classes["product-title"]}`}
              >
                {product.name}
              </h5>
            </div>
            {/* Product Price & Rating */}
            <ul className={`list-group list-group-flush ps-3 pe-3 pt-1 d-flex justify-content-between flex-row flex-wrap`}>
              <div className="d-flex m-0 p-0">
                <img
                  className="my-auto p-0 me-1"
                  src={OldPrice}
                  width={45}
                  height={15}
                  alt="old price"
                />
                <li className={`bg-transparent ${classes["price"]}`}>
                  {product.price.formatted_with_code}
                </li>
              </div>
              <li className={`bg-transparent d-flex ${classes["rating"]}`}>
                <Stars />
              </li>
            </ul>
          </div>
        </Link>
      ) : (
        // The Loading State
        <div className={classes["loading-spinner"]}></div>
      )}
    </div>
  );
};

export default ProductItem;
