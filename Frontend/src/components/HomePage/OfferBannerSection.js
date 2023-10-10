import classes from "./OfferBannerSection.module.css";
import FirstOfferBanner from "../../assets/OfferBanner1.png";
import SecondOfferBanner from "../../assets/OfferBanner2.png";
import NaturalSlogan from "../../assets/Natural.png";
import OfferSlogan from "../../assets/Offer.png";

const OfferBannerSection = () => {
  const bannerData = [
    {
      image: FirstOfferBanner,
      slogan: [NaturalSlogan, "Get Garden", "Fresh Fruits"],
    },
    {
      image: SecondOfferBanner,
      slogan: [OfferSlogan, "Get 10% off", "on Vegetables"],
    },
  ];

  return (
    <div className={`container-fluid ${classes["OfferBanner_container"]}`}>
      <div className="row d-flex justify-content-center align-items-center">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className={`col-lg-4 col-md-6 col-sm-8 col-8 mb-3 position-relative d-flex justify-content-center align-items-center Banner${classes["Banner"]}`}
          >
            {/* Banner Wallpaper */}
            <img
              src={banner.image}
              alt={`Offer Banner ${index + 1}`}
              className="img-fluid"
            />

            {/* Banner Slogan */}
            <div
              className={`position-absolute ${classes["OfferBanner_slogan"]}`}
            >
              <img
                src={banner.slogan[0]}
                width={90}
                className={`mb-2 ${classes["tag_img"]}`}
              />
              <h3 className="text-white p-0 m-0">{banner.slogan[1]}</h3>
              <h3 className="text-white p-0 m-0">{banner.slogan[2]}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBannerSection;
