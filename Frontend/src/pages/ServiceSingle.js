import MainBanner from "../components/MainBanner";
import FooterSection from "../components/Footer/FooterSection";
import ServiceSingleImg from "../assets/ServiceSingle.jpg";
import ServiceSingleSection from "../components/ServiceSinglePage/ServiceSingleSection";
import NewsletterSection from "../../src/components/Newssletter/NewsletterSection";

const ServiceSingle = () => {
  return (
    <div>
      <MainBanner img={ServiceSingleImg} title={"Quality Standard"} />
      <ServiceSingleSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default ServiceSingle;
