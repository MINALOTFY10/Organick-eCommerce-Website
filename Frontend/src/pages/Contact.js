import { Fragment } from "react";
import MainBanner from "../components/MainBanner";
import NewsletterSection from "../components/Newssletter/NewsletterSection";
import FooterSection from "../components/Footer/FooterSection";
import ContactUsImg from "../assets/ContactUs.jpg";
import ContactsWays from "../components/ContactUsPage/ContactsWays";
import FeedbackFrom from "../components/ContactUsPage/FeedbackFrom";

const Contact = () => {
  return (
    <Fragment>
      <MainBanner img={ContactUsImg} title={"Contact Us"} />
      <ContactsWays/>
      <FeedbackFrom/>
      <NewsletterSection />
      <FooterSection/>
    </Fragment>
  );
};

export default Contact;
