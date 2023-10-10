import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import bannerImg from "../../assets/Banner.png";
import NaturalFoodImg from "../../assets/100% Natural Food.png";
import YellowButton from "../UI/YellowButton";
import classes from "../HomePage/BannerSection.module.css";

const BannerSection = () => {
  return (
    <div className={classes.Banner_container}>
      {/* Banner Wallpaper */}
      <img
        src={bannerImg}
        className={`img-fluid ${classes.banner_img}`}
        alt="Banner"
      />
      <div className={`col-6 ${classes.banner_slogan}`}>
        {/* Header */}
        <img
          src={NaturalFoodImg}
          className={`img-fluid ${classes.natural_food_img}`}
          alt="Natural Food"
        />
        <h1 className={classes["banner-header"]}>
          Choose the best <br />
          healthier way <br />
          of life
        </h1>
        {/* Button */}
        <Link to="/shop">
          <YellowButton>
            Explore Now{" "}
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={classes.next_icon}
            />
          </YellowButton>
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
