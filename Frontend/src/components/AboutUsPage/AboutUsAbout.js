import classes from "./AboutUsAbout.module.css";

import BlueRedButton from "../UI/BlueRedButton";
import aboutusImg from "../../assets/AboutUs.png";
import AboutUsAboutImg from "../../assets/AboutUsAbout.png";
import AboutUsFirstIconImg from "../../assets/AboutUsFirstIcon.svg";
import AboutUsSecondIconImg from "../../assets/AboutUsSecondIcon.svg";

const aboutData = [
  {
    image: AboutUsFirstIconImg,
    text: "Modern Agriculture Equipment",
    dummyContent:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    image: AboutUsSecondIconImg,
    text: "No growth hormones are used",
    dummyContent:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
];

const AboutUsAbout = () => {
  return (
    <div className={classes["about_container"]}>
      {/* The Image on Left*/}
      <div className={classes["img-container"]}>
        <img
          src={AboutUsAboutImg}
          width={700}
          className={`classes["about-img"] img-fluid me-5`}
        />
      </div>
      {/* The Content on Right */}
      <div className={classes["text-container"]}>
        {/* Heading */}
        <img
          src={aboutusImg}
          height={20}
          width={80}
          className={`mb-3 ${classes["About-image"]}`}
        />
        <h3>
          We do Creative <br /> Things for Success
        </h3>

        {/* Two Dummy Pragraphs */}
        <p className="p-0 m-0 mt-3 mb-4">{aboutData[0].dummyContent}</p>
        <p className="p-0 m-0 mb-4">{aboutData[1].dummyContent}</p>

        {/* Two Solgans Boxes */}
        <div className="d-flex">
          {aboutData.map((item, index) => (
            <div key={index} className={`d-flex ${classes["about-tag"]}`}>
              <img src={item.image} className="me-3" width={50} />
              <div>
                <h5 className="p-0 m-0">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>

        <BlueRedButton>Explore Now</BlueRedButton>
        <div className="mb-4"></div>
      </div>
    </div>
  );
};

export default AboutUsAbout;
