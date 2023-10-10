// External Libraries and Frameworks
import { Link } from "react-router-dom";
// CSS Styles
import classes from "./AboutSection.module.css";
// Components
import aboutusImg from "../../assets/AboutUs.png";
import AboutImg from "../../assets/AboutSection.png";
import OrganicFoodsIcon from "../../assets/Organic_foods_Icon.png";
import QualityStandardsIcon from "../../assets/Quality_Standards_Icon.png";
import BlueRedButton from "../UI/BlueRedButton";

const AboutTag = ({ icon, title, text }) => (
  <div className={`d-flex ${classes["about-tag"]}`}>
    <img src={icon} className={`me-3`} width={80} />
    <div className={`me-3`}>
      <h4 className="p-0 m-0 mb-1">{title}</h4>
      <p className="p-0 m-0 me-5">{text}</p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <div className={classes["about_container"]}>
      <div className={classes["img-container"]}>
        <img
          src={AboutImg}
          width={700}
          className={`classes["about-img"] img-fluid`}
        />
      </div>
      <div className={classes["text-container"]}>
        <img
          src={aboutusImg}
          height={20}
          width={80}
          className={`mb-3 ${classes["About-image"]}`}
        />
        <h3>We Believe in Working</h3>
        <h3>Accredited Farmers</h3>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <AboutTag
          icon={OrganicFoodsIcon}
          title="Organic Foods Only"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <AboutTag
          icon={QualityStandardsIcon}
          title="Quality Standards"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <Link to={`/about`}>
          <BlueRedButton>Learn More </BlueRedButton>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
