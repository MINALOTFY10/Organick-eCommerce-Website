// External Libraries and Frameworks
import { NavLink } from "react-router-dom";

// CSS Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavigationLink({ to, children }) {
  return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "active nav-link fw-semibold" : "nav-link fw-semibold"
        }
      >
        {children}
      </NavLink>
  );
}

export default NavigationLink