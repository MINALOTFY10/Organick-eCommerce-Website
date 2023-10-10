import classes from "./FooterSection.module.css";
import Logo from "../../assets/Logo.svg";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Fragment } from "react";

const FooterSection = () => {
  return (
    <Fragment>
      <footer className={classes["footer"]}>
        {/*>>>>>> First Column <<<<<<*/}
        <div
          className={`${classes["footer-column"]} ${classes["start-column"]}`}
        >
          <h4 className="pb-3">Contact Us</h4>
          <div className="pb-3">
            <h5 className="p-0 m-0 pb-1">Email</h5>
            <p>needhelp@Organia.com</p>
          </div>
          <div className="pb-3">
            <h5 className="p-0 m-0 pb-1">Phone</h5>
            <p>666 888 888</p>
          </div>
          <div className="pb-3">
            <h5 className="p-0 m-0 pb-1">Address</h5>
            <p>88 road, Brooklyn street, USA</p>
          </div>
        </div>
        {/*>>>>>> Second Column <<<<<<*/}
        <div
          className={`${classes["footer-column"]} ${classes["center-column"]}`}
        >
          <img src={Logo} className={`pb-2 ${classes["Home__logo"]}`} />
          <p>
            Simply dummy text of the printing and typesetting industry.
            <br /> Lorem Ipsum simply dummy text of the printing
          </p>
          <div
            className={`d-flex justify-content-center ${classes["social-icons"]}`}
          >
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
        {/*>>>>>> Third Column <<<<<<*/}
        <div className={`${classes["footer-column"]} ${classes["end-column"]}`}>
          <h4 className="pb-3">Utility Pages</h4>
          <ul>
            <li className="pb-2">Style Guide</li>
            <li className="pb-2">404 Not Found</li>
            <li className="pb-2">Password Protected</li>
            <li className="pb-2">Licenses</li>
            <li className="pb-2">Changelog</li>
          </ul>
        </div>
      </footer>
      <div className={`mt-5 py-3 ${classes["footer-text"]}`}>
        Copyright © <strong>Organick</strong> | Made by{" "}
        <strong>Mina Lotfy</strong> - Powered by ReactJS
      </div>
    </Fragment>
  );
};

export default FooterSection;
