import TestimonialImg from "../../assets/Testimonial.png";
import TestimonialCounterImg from "../../assets/Testimonial_Counter.png";
import classes from "./TestimonialCounter.module.css";
import avatarReviewImg from "../../assets/avatarReview.png";
import NavigationImg from "../../assets/Navigation.png";
import Circle from "../UI/Circle";
import Stars from "../UI/Stars";

const circleData = [
  { heading: "100%", text: "Organic" },
  { heading: "285", text: "Active Product" },
  { heading: "350+", text: "Organic Orcds" },
  { heading: "25+", text: "Farming Years" },
];

const TestimonialCounter = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${TestimonialCounterImg})`,
  };

  return (
    <div
      className={`${classes["testimonial-counter"]} d-flex flex-column justify-content-center align-items-center mt-5`}
      style={backgroundImageStyle}
    >
      <div
        className={`${classes["testimonial"]} d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          src={TestimonialImg}
          className={classes["testimonial-img"]}
          width={100}
        />
        <h1 className={`mb-2 ${classes["testimonial-heading"]}`}>
          What Our Customer Saying?
        </h1>
        <img src={avatarReviewImg} width={90} className="mt-5" />
        <div className={`bg-transparent mt-2 ${classes["rating"]}`}>
          {<Stars />}
        </div>
        <p className={`mt-3 ${classes["review-text"]}`}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <h5 className={`p-0 m-0 mt-2 ${classes["name"]}`}>Sara Taylor</h5>
        <p className={classes["job"]}>Consumer</p>
        <img src={NavigationImg} className="img-fluid mt-2" />
      </div>

      <div
        className={`${classes["counter"]} row mt-5 d-flex flex-row justify-content-center align-items-center`}
      >
        {circleData.map((circle, index) => (
          <Circle
            key={index}
            heading={circle.heading}
            text={circle.text}
            className="col-4"
          />
        ))}
      </div>
      <div className="my-5"></div>
    </div>
  );
};

export default TestimonialCounter;
