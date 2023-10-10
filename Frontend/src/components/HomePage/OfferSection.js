import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

import classes from "./OfferSection.module.css";
import ProductsList from "../Product/ProductsList";
import YellowButton from "../UI/YellowButton";
import OfferImg from "../../assets/Offer.png";

const OfferSection = ({ products }) => {
  let editedProduct = products.slice(7, 11);

  return (
    <div className={`${classes["offer-section"]}`}>
      <div className={`container`}>
        <img src={OfferImg} className={`img-fluid ${classes["offer-word"]}`} />

        {/* Section Header */}
        <div className="d-flex justify-content-between pb-5">
          <h1 className="text-white mt-2">We Offer Organic For You</h1>
          <YellowButton>
            View All Products{" "}
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={classes["next_icon"]}
            />
          </YellowButton>
        </div>

        {/* Products */}
        <div className="container row d-flex justify-content-center align-items-center mb-1 px-5 mx-auto pb-5">
          <ProductsList products={editedProduct} />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
