import classes from "./WhoAreWeSection.module.css";
import WhoAreWeImg from "../../assets/WhoAreYou.png";
import WhoWeAreCard from "../UI/WhoWeAreCard";
import EcoFriendlyImg from "../../assets/Eco Friendly.png";

const WhoAreWeSection = () => {
  const pargraphData = [
    {
      title: "Start with Our Company First",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Learn How to Grow Yourself",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Farming Strategies of Today",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
  ];

  return (
    <div className={`${classes["WhoAreWeSection"]}`}>
      {/*The Image */}
      <div className={`${classes["image-container"]}`}>
        <img src={WhoAreWeImg} className={`img-fluid ${classes["image"]}`} />
      </div>

      {/*The Card */}
      <div
        className={`d-flex flex-column justify-content-center align-items ${classes["text-container"]}`}
      >
        <WhoWeAreCard>
          {/* Header */}
          <img src={EcoFriendlyImg} />
          <h2 className={`mb-4 ${classes["heading"]}`}>
            Econis is a Friendly Organic Store
          </h2>

          {/* pargraphs */}
          {pargraphData.map((item, index) => (
            <div key={index} className={classes.pargraph}>
              <h4 className="p-0 m-0">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </WhoWeAreCard>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
