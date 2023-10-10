import classes from "./OfferSection.module.css";

// Components
import FirstIconWhyChooseUs from "../../assets/FirstIconWhyChooseUs.svg";
import SecondIconWhyChooseUs from "../../assets/SecondIconWhyChooseUs.svg";
import ThirdIconWhyChooseUs from "../../assets/ThirdIconWhyChooseUs.svg";
import FourthIconWhyChooseUs from "../../assets/FourthIconWhyChooseUs.svg";

const OfferSection = () => {
  const prodcutArray = [0, 1, 2, 3];
  const imagesArray = [
    FirstIconWhyChooseUs,
    SecondIconWhyChooseUs,
    ThirdIconWhyChooseUs,
    FourthIconWhyChooseUs,
  ];
  const titleArray = ["Return Policy", "100% Fresh", "Support 24/7", "Secured"];

  return (
    <div className={`container px-5 ${classes["offer-section"]}`}>
      <div className={`container`}>
        <div className="row d-flex justify-content-center align-items-center pb-5">
          {prodcutArray.map((index) => (
            <div
              key={index}
              className=" col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center"
            >
              {/* The Card */}
              <div
                className={`card py-5 px-2 d-flex justify-content-center align-items-center ${classes["product-item"]}`}
                style={{ width: "19rem" }}
              >
                {/* Card Image */}
                <div className={`m-auto ${classes["image-container"]}`}>
                  <img
                    src={imagesArray[index]}
                    className={`card-img-top h-auto ${classes["product-image"]}`}
                  />
                </div>
                {/* Card Title */}
                <div className="card-body pb-0">
                  <h5
                    className={`card-title p-0 pb-2 m-0 ${classes["product-title"]}`}
                  >
                    {titleArray[index]}
                  </h5>
                </div>
                {/* Card Description */}
                <ul
                  className={`list-group list-group-flush ps-3 pe-3 pt-1 d-flex flex-row`}
                >
                  <li className={`bg-transparent ${classes["text"]}`}>
                    Simply dummy text of the printintypesetting industry.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
