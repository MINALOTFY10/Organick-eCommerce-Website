import newsletterImg from "../../assets/newsletter.png";
import BlueRedButton from "../UI/BlueRedButton";
import classes from "./NewsletterSection.module.css"

const NewsletterSection = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${newsletterImg})`,
    backgroundSize: "cover",
  };

  return (
    <div className="container pt-5">
      <section
        className={` mx-5  ${classes.card}`}
        style={backgroundImageStyle}
      >
        <h1
          className={`text-white my-4 ${classes["newsletter-heading"]}`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          Subscribe to
          <br />
          our Newsletter
        </h1>
        <div
          className={`d-flex justify-content-center align-items-center ${classes["subsribe-section"]}`}
        >
          <input
            type="email"
            placeholder="Sign up for newsletter..."
            aria-label="Sign up for newsletter"
            className="me-2"
          />
          <BlueRedButton>Subsribe</BlueRedButton>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
