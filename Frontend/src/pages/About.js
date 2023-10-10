import MainBanner from "../components/MainBanner";
import AboutUsAbout from "../components/AboutUsPage/AboutUsAbout";
import AboutWhyChooseUs from "../components/AboutUsPage/AboutWhyChooseUs";
import AboutOfferProduct from "../components/AboutUsPage/AboutOfferProduct";
import NewsletterSection from "../components/Newssletter/NewsletterSection";
import FooterSection from "../components/Footer/FooterSection";
import AboutUsBannerImg from "../assets/AboutUsBanner.png";

const About = () => {
  return (
    <div>
      <MainBanner img={AboutUsBannerImg} title={"About Us"}/>
      <AboutUsAbout />
      <AboutWhyChooseUs/>
      <AboutOfferProduct/>
      <NewsletterSection/>
      <FooterSection/>
    </div>
  );
};

export default About;
