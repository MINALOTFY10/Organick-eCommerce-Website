// External Libraries and Frameworks
import React from "react";

// CSS Styles
import classes from "./MainNavigation.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Components
import Logo from "../../assets/Logo.svg";
import NavigationLink from "./NavigationLink";
import CartButton from "../Cart/CartButton";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";

function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-sm p-3 py-3">
        {/* App Icon */}
        <NavigationLink to="/">
          <img src={Logo} className={classes["Home-logo"]} />
        </NavigationLink>

        {/* Responsive button */}
        <button
          className={`navbar-toggler ${classes["toggler-button"]}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${classes["toggler-button-icon"]}`}
          ></span>
        </button>

        {/* Nav-bar */}
        <div className="container collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${classes["main-nav"]} navbar-nav me-auto mb-2 mb-lg-0 `}>
            <li className="nav-item">
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li className="nav-item">
              <NavigationLink to="/about">About</NavigationLink>
            </li>
            <li className="nav-item">
              <NavigationLink to="/shop">Shop</NavigationLink>
            </li>
            <li className="nav-item">
              <NavigationLink to="/service">Service</NavigationLink>
            </li>
            <li className="nav-item">
              <NavigationLink to="/contact">Contact</NavigationLink>
            </li>

            {/* Authentication Button in the case of token existance or not */}
            <AuthButton />
          </ul>
          <div className={`${classes["search-cart"]} d-flex align-items ms-3`}>
            <SearchBar />
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
