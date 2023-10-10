import classes from "./NoAuthentication.module.css";
import { NavLink } from "react-router-dom";
import BlueRedButton from "../UI/BlueRedButton";

const NoAuthentication = () => {
  return (
    <>
      <p className={classes.text}>
        To start shopping
        <br /> please log in or create an account.
      </p>
      <div className="d-flex justify-content-center">
        <li className="nav-item"></li>
        <NavLink
          to="/auth?mode=login"
          className={({ isActive }) =>
            isActive ? "active nav-link fw-semibold" : "nav-link fw-semibold"
          }
        >
          <BlueRedButton>Sign in</BlueRedButton>
        </NavLink>
      </div>
    </>
  );
};

export default NoAuthentication;
