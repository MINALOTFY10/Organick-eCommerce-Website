import React from "react";
import classes from "./WallSection.module.css";
import ServiceWallImg from "../../assets/ServiceWall.png";
import OrganicOnlyImg from "../../assets/Organic Only.png";

const WallSection = () => {
  return (
    <div className={`${classes["wallSection"]} text-center`}>
      <img src={OrganicOnlyImg} className="img-fluid" />
      <h2>Everyday Fresh & Clean</h2>
      <p>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the{" "}
      </p>
    </div>
  );
};

export default WallSection;
