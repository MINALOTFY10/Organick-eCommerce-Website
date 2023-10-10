import React from "react";  // Import React
import classes from "./AboutOfferProduct.module.css";
import WeOfferFruitsImg from "../../assets/WeOfferFruits.png";
import WeOfferNutsImg from "../../assets/WeOfferNuts.png";
import WeOfferSpicyImg from "../../assets/WeOfferSpicy.png";
import WeOfferVegetableImg from "../../assets/WeOfferVegetable.png";
import AboutUsImg from "../../assets/AboutUs.png"; 

const AboutOfferProduct = () => {
  // Arrays for product data
  const productArray = [0, 1, 2, 3];
  const imagesArray = [
    WeOfferFruitsImg,
    WeOfferNutsImg,
    WeOfferSpicyImg,
    WeOfferVegetableImg,
  ];
  const titleArray = ["Fruits", "Nuts & Seeds", "Spicy", "Vegetables"];  

  return (
    <div className={classes["offer-section"]}>
      <div className="container py-5">
        {/* Section for testimonial */}
        <div className={`${classes["testimonial-counter"]} d-flex flex-column justify-content-center align-items-center mt-5`}>
          <div className={`${classes["testimonial"]} d-flex flex-column justify-content-center align-items-center`}>
            <img src={AboutUsImg} className={classes["testimonial-img"]} width={100} alt="About Us" /> {/* Added alt attribute */}
            <h2 className={`mb-4 mt-2 text-white ${classes["testimonial-heading"]}`}>
              What We Offer for You
            </h2>
          </div>
        </div>

        {/* Section for product cards */}
        <div className="row d-flex justify-content-center align-items-center">
          {productArray.map((index) => (
            <div key={index} className={`${classes["card"]} col-sm-6 col-md-4 col-lg-2 mb-3 d-flex flex-column justify-content-center align-items-center`}>
              <div className={`card d-flex justify-content-center align-items-center ${classes["product-item"]}`} style={{ width: "13rem", height: "14rem" }}>
                <img src={imagesArray[index]} className={`card-img-top p-0 m-0 ${classes["product-image"]}`} style={{ height: "12rem", width: "auto" }} alt={titleArray[index]} /> {/* Added alt attribute */}
              </div>
              <div className="card-body pb-0">
                <h5 className={`card-title p-0 pb-2 m-0 mt-3 ${classes["product-title"]}`}>
                  {titleArray[index]}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOfferProduct;
