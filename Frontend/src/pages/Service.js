import MainBanner from "../components/MainBanner";
import ServiceSection from "../components/ServicePage/ServiceSection";
import WallSection from "../components/ServicePage/WallSection";
import FooterSection from "../components/Footer/FooterSection";
import ServiceBannerImg from "../assets/ServiceBanner.jpg";

const Service = () => {
  return (
    <div>
      <MainBanner img={ServiceBannerImg} title={"Service"} />
      <ServiceSection />
      <WallSection />
      <FooterSection />
    </div>
  );
};

export default Service;
