import classes from "./AboutWhyChooseUs.module.css";

// images and icons
import WhyChooseUsImg from "../../assets/WhyChooseUs.png";
import WhyChooseUsWordImg from "../../assets/WhyChooseUsWord.png";
import RingIconImg from "../../assets/RingIcon.png";

// Components
import OfferSection from "./OfferSection";

const data = [
  {
    title: "100% Natural Product",
    content:
      "Simply dummy text of the printing and typesetting industry Lorem Ipsum",
  },
  {
    title: "Increases resistance",
    content:
      "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing",
  },
];

const AboutWhyChooseUs = () => {
  return (
    <div className={`${classes["section"]}`}>
      <div
        className={`container d-flex flex-row ${classes["about_container"]}`}
      >
        {/* The Content on the left */}
        <div className={classes["text-container"]}>
          {/* Header */}
          <img
            src={WhyChooseUsWordImg}
            height={30}
            width={145}
            className={`mb-3 ${classes["About-image"]}`}
          />
          <h3>
            We do not buy from the <br /> open market & traders.
          </h3>
          <p className="p-0 m-0 mt-3 mb-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>

          {/* Two Bars made by looping on thier data */}
          <div className="d-flex flex-column">
            {data.map((item, index) => (
              <div key={index}>
                <div className={`${classes["about-tag"]}`}>
                  <div className={`d-flex ${classes["heading"]}`}>
                    <img
                      src={RingIconImg}
                      width={14}
                      className="img-fluid my-auto me-2 h-auto"
                    />
                    <h5 className="p-0 m-0 ">{item.title}</h5>
                  </div>
                </div>
                <p className="p-0 m-0 ms-5 mt-2 mb-4">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The image on the right */}
        <div className={classes["img-container"]}>
          <img
            src={WhyChooseUsImg}
            className={`${classes["about-img"]} img-fluid`}
          />
        </div>
      </div>

      {/* Four Offer Cards */}
      <OfferSection />
    </div>
  );
};

export default AboutWhyChooseUs;
