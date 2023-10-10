import classes from "../components/ErrorSection.module.css";
import FooterSection from "./Footer/FooterSection";
import NoAuthentication from "./NoAuthentication/NoAuthentication";
import MainNavigation from "./MainNavigation/MainNavigation";

const ErrorSection = (props) => {
  let status = "404";
  let title = "An error occurred!";
  let message = "Something went wrong!";

  let content = "";

  if (!props.error) {
    content = (
      <div className={classes["error-page"]}>
        <div className={classes["content"]}>
          <NoAuthentication />
        </div>
      </div>
    );
  } else {
    if (props.error.status === 500) {
      status = 500;
      message = props.error.data.message;
    }

    if (props.error.status === 404) {
      title = "Page Not found!";
      message = "The page you are looking for doesn't exist or has been moved.";
    }

    content = (
      <>
        <MainNavigation />
        <div className={classes["error-page"]}>
          <div className={classes["content"]}>
            <h1 className={classes["status"]}>{status}</h1>
            <h1 className={classes["title"]}>{title}</h1>
            <p className={classes["message"]}>{message}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {content}
      <FooterSection />
    </>
  );
};

export default ErrorSection;
