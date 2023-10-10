// Importing necessary modules and assets
import React from "react";
import classes from "./ContactsWays.module.css";
import ContactUsLeftImg from "../../assets/ContactUsLeftImg.png";
import MessageIconImg from "../../assets/MessageIcon.png";
import PhoneIconImg from "../../assets/PhoneIcon.png";
import Logo from "../../assets/Logo.svg";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// Define the ContactsWays component
const ContactsWays = () => {
  return (
    <div className={`col-10 mx-auto ${classes["section"]}`}>
      <div className={`container d-flex mt-5 ${classes["contact_container"]}`}>
        {/* Left Image */}
        <div className={classes["img-container"]}>
          <img
            src={ContactUsLeftImg}
            className={`${classes["about-img"]} img-fluid`}
            alt="Contact Us"
          />
        </div>
        {/* Right Text and Contact Info */}
        <div className={`${classes["text-container"]} `}>
          {/* Header Section */}
          <h3> We'd love to talk about how we can work together.</h3>
          <p className="p-0 m-0 mt-3 mb-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard in the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          {/* Contact Cards */}
          <div className={`d-flex flex-column ${classes["card-container"]}`}>
            {/* Message Card */}
            <div className={`d-flex ${classes["card"]}`}>
              <img
                src={MessageIconImg}
                width={65}
                className="img-fluid my-auto h-auto"
                alt="Message Icon"
              />
              <div className="d-flex flex-column justify-content-center">
                <h5 className="p-0 m-0 ">Message</h5>
                <p className="p-0 m-0">support@organic.com</p>
              </div>
            </div>
            {/* Phone Card */}
            <div className={`d-flex ${classes["card"]}`}>
              <img
                src={PhoneIconImg}
                width={65}
                className="img-fluid my-auto h-auto"
                alt="Phone Icon"
              />
              <div className="d-flex flex-column justify-content-center">
                <h5 className="p-0 m-0 ">Contact Us</h5>
                <p className="p-0 m-0">+01 123 456 789</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className={`d-flex mt-3 ${classes["social-icons"]}`}>
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faFacebook} className="p-0 m-0" />
            </div>
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faInstagram} className="p-0 m-0" />
            </div>
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faTwitter} className="p-0 m-0" />
            </div>
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faPinterest} className="p-0 m-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsWays;
