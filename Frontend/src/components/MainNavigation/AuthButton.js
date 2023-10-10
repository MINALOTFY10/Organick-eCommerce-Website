// External Libraries
import { Form } from "react-router-dom";
import { useRouteLoaderData, useNavigation } from "react-router-dom";

// CSS Styles
import classes from "./AuthButton.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Components
import SmallLoadingScreen from "../UI/SmallLoadingScreen";
import NavigationLink from "./NavigationLink";

const AuthButton = () => {
  const token = useRouteLoaderData("root");
  const isSubmitting = useNavigation().state === "loading";

  return (
    <div className="nav-item">
      {token && (
        <Form action="/logout" method="post">
          <button className={classes["logout-button"]}>
            {isSubmitting ? <SmallLoadingScreen /> : "Logout"}
          </button>
        </Form>
      )}
      {!token && <NavigationLink to="/auth?mode=login">Login</NavigationLink>}
    </div>
  );
};

export default AuthButton;
