import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { storeActions } from "../../store";
import classes from "./ProductDetails.module.css";
import OldPrice from "../../assets/OldPriceImg.png";
import Stars from "../UI/Stars"
import BlueRedButton from "../UI/BlueRedButton";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const [productQuatity, setProductQuatity] = useState(1);

  const onChangeQuatityHandler = (e) => {
    setProductQuatity(e.target.value)
  }

  const itemID = product.id;
  const itemName = product.name;
  const itemTag = product["seo"]["title"];
  const itemImage = product.image.url;
  const itemPrice = product["price"]["raw"];

  const onAddToCartHanlder = () => {
    dispatch(
      storeActions.addItem({
        id: itemID,
        title: itemName,
        price: itemPrice,
        tag: itemTag,
        image: itemImage,
        quantity: parseInt(productQuatity),
      })
    );
  };


  return (
    <Fragment>
      <div className="pt-4"></div>
      <div
        className={`${classes["details-container"]} row container mt-5 d-flex justify-content-around mx-auto`}
      >
        <div
          className={`justify-content-center col-xl-4 bg-light rounded-4 ${classes["img-container"]}`}
        >
          <div className="container mt-3 mb-2">
            <span className={`badge badge-primary ms-2 ${classes["product-tag"]}`}>
              {product["seo"]["title"]}
            </span>
          </div>
          <img src={product.image.url} className={`${classes["image"]}`} />
        </div>
        <div className={`col-xl-8  ${classes["text-container"]}`}>
          <h2 className="text-primary-custom">{product.name}</h2>
          <div className="ms-1">
            <div className={`bg-transparent mb-2 ${classes["rating"]}`}>
              <Stars/>
            </div>
            <div className={`d-flex m-0 p-0 ${classes["price-container"]}`}>
              <img
                className="my-auto p-0 me-1 mb-1"
                src={OldPrice}
                width={45}
                height={15}
              />
              <li className={`bg-transparent ${classes["price"]}`}>
                {product["price"]["formatted_with_code"]}
              </li>
            </div>
            <p className={`mt-3 ${classes["description"]}`}>
              {product.description.replace(/<\/?p>/g, "")}
            </p>
            <div className={`d-flex p-0 ${classes["last-container"]}`}>
              <div className={`d-flex p-0 ${classes["quantity"]}`}>
                <p className={`${classes["quantity-word"]} py-2 me-3`}>
                  Quantity:
                </p>
                <input type="text" value={productQuatity} onChange={onChangeQuatityHandler} placeholder="Enter text here" className={`${classes["input"]}`}  />
              </div>
              <BlueRedButton onClick={onAddToCartHanlder}>
                <p>Add To Cart</p>
              </BlueRedButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
