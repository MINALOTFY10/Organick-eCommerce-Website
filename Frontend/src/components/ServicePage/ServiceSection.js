import React from "react";
import classes from "./ServiceSection.module.css";
import { Link } from "react-router-dom";
import BlueRedButton from "../UI/BlueRedButton";

import WhatweGrowImg from "../../assets/What we Grow.png";
import ContentImg from "../../assets/ContentImage.png";

import DairyIcon from "../../assets/DairyIcon.svg";
import StoreIcon from "../../assets/StoreIcon.svg";
import DeliveryIcon from "../../assets/DeliveryIcon.svg";

import AgriculturalIcon from "../../assets/AgriculturalIcon.svg";
import FreshIcon from "../../assets/FreshIcon.svg";
import OrganicIcon from "../../assets/OrganicIcon.svg";

const serviceItems = [
  {
    image: DairyIcon,
    title: "Dairy Products",
    description: `Discover a wide range of delicious dairy products. From creamy milk to artisan cheeses, we offer the freshest and finest selections.`,
  },
  {
    image: StoreIcon,
    title: "Store Services",
    description: `Explore our store services designed to make your shopping experience exceptional. We provide expert assistance, convenient checkout options, and much more.`,
  },
  {
    image: DeliveryIcon,
    title: "Delivery Services",
    description: `Experience hassle-free delivery services that bring your favorite products right to your doorstep. Fast, reliable, and convenient for your needs.`,
  },
  {
    image: AgriculturalIcon,
    title: "Agricultural Services",
    description: `Our agricultural services are tailored to help farmers maximize their yields and ensure sustainable farming practices. Discover innovative solutions for agriculture.`,
  },
  {
    image: OrganicIcon,
    title: "Organic Products",
    description: `Explore our selection of organic products, carefully sourced and certified for their quality. Enjoy healthy and sustainable options for your lifestyle.`,
  },
  {
    image: FreshIcon,
    title: "Fresh Vegetables",
    description: `Indulge in the freshest and tastiest vegetables. We bring you a wide variety of locally sourced, farm-fresh produce to elevate your meals.`,
  },
];

const ServiceSection = () => {
  return (
    <div className={`container ${classes.container}`}>
      {/* Header */}
      <div className={`${classes.heading} text-center mt-5`}>
        <img
          src={WhatweGrowImg}
          style={{ height: "auto", width: "7vw" }}
          alt="What We Grow"
        />
        <h2 className={classes.header}>
          Better Agriculture for <br /> Better Future
        </h2>
      </div>

      {/* Content consist of 3 columns */}
      <div className={`${classes.content} row m-0`}>
        {/* First Column */}
        <div
          className={`${classes["first-text"]} col-xl-4 d-flex flex-column justify-content-center`}
        >
          {/* Loop through the first three elements */}
          {serviceItems.slice(0, 3).map((item, index) => {
            return (
              <ServiceItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>

        {/* Second Column (Image) */}
        <div className="col-xl-4">
          <img
            src={ContentImg}
            className={`img-fluid ${classes["image-content"]}`}
            alt="Content"
          />
        </div>

        {/* Third Column */}
        <div className="col-xl-4 d-flex flex-column justify-content-center">
          {/* Loop through the last three elements */}
          {serviceItems.slice(3).map((item, index) => {
            return (
              <ServiceItem
                key={index + 3}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>

      {/* Explore Button */}
      <div className="d-flex justify-content-center">
        <Link to="single">
          <BlueRedButton>Explore More</BlueRedButton>
        </Link>
      </div>
    </div>
  );
};

const ServiceItem = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} alt={title} className={classes["service-image"]} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceSection;
