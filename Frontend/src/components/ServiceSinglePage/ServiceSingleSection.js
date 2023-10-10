import React from "react";
import ServiceSingleImg from "../../assets/ServiceSingleWall.png";
import classes from "./ServiceSingleSection.module.css";
import whyOrganicImg from "../../assets/WhyOrganic.png";
import produceImg from "../../assets/Produce.png";

const ServiceSingleSection = () => {
  return (
    <div
      className={`container col-9 mt-5 pt-5 ${classes["service-single-section"]}`}
    >
      <img
        src={ServiceSingleImg}
        alt="Service Single"
        className={`img-fluid ${classes["service-single-img"]}`}
      />
      <div className={`col-8 mx-auto ${classes["content"]}`}>
        {/* Header Section */}
        <div className={`mt-5 ${classes["heading"]}`}>
          <h2 className="mb-4">Organic Store Services</h2>
          <p>
            It's a well-established fact that readers are distracted by readable
            content when looking at a layout. The use of Lorem Ipsum ensures a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here,' which can make it look like readable
            English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and you can uncover many websites
            still in their infancy. Various versions have evolved over the
            years.
          </p>
        </div>
        {/* Second Section */}
        <div className={`mt-5 ${classes["middle-section"]}`}>
          <div className={`row ${classes["first-card"]}`}>
            <div className="col-xl-5 col-x-6">
              <img
                src={whyOrganicImg}
                alt="Why Organic"
                className={`img-fluid ms-0 me-auto ${classes["why-organic-img"]}`}
              />
            </div>
            <div
              className={`${classes["text"]} col-xl-7 col-x-6 d-flex flex-column justify-content-center px-4 py-3`}
            >
              <h5>Why Organic</h5>
              <p className="pt-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                Page editors now use Lorem Ipsum as their default model text,
                and you can uncover.
              </p>
            </div>
          </div>
          <div className={`row mt-4 ${classes["second-card"]}`}>
            <div
              className={`${classes["text"]} col-xl-7 d-flex flex-column justify-content-center px-4 py-3`}
            >
              <h5>Specialty Produce</h5>
              <p className="pt-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                Page editors now use Lorem Ipsum as their default model text,
                and you can uncover.
              </p>
            </div>
            <div className="col-xl-5">
              <img
                src={produceImg}
                alt="Specialty Produce"
                className={`img-fluid ${classes["produce-img"]}`}
              />
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className={`mt-5 ${classes["last-section"]}`}>
          <div className={`${classes["last-section-text"]}`}>
            <h4>We Farm Your Land</h4>
            <p>
              It is a long-established fact that readers will be distracted by
              the readable content of a page when looking at a layout. The use
              of Lorem Ipsum ensures a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here,' which
              can make it look like readable English.
            </p>
          </div>
          <div className={`row mt-4 ${classes["cards"]}`}>
            <div className={`col-xl-5 d-flex ${classes["card"]}`}>
              <h5 className={`${classes["number"]}`}>01</h5>
              <h5 className="mx-auto">Best Quality Support</h5>
            </div>
            <div className={`col-xl-5 d-flex ${classes["card"]}`}>
              <h5 className={`${classes["number"]}`}>02</h5>
              <h5 className="mx-auto">Money Back Guarantee</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleSection;
