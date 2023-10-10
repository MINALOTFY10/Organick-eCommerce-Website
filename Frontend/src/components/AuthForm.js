import {
  Form,
  useSearchParams,
  Link,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { fetchCartData } from "../store/CartHttpActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import classes from "./AuthForm.module.css";
import { Fragment } from "react";

function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(" ");
  const data = useActionData();
  const [param] = useSearchParams();
  const isLogin = param.get("mode") == "login";

  const isSubmitting = useNavigation().state == "submitting";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  if (isSubmitting) {
    dispatch(fetchCartData(email));
  }

  return (
    <Fragment>
      <Form method="post" className={`container ${classes.form}`}>
        {/* Header */}
        <h2 className={classes["header"]}>{isLogin ? "Login" : "Sign up"}</h2>

        {data && data.errors ? (
          <div className={classes["error-message"]}>
            {Object.values(data.errors).map((err) => err)}
          </div>
        ) : (
          data &&
          data.message && (
            <p>
              <div className={classes["error-message"]}>
                {data.message == "Authentication failed."
                  ? "Invalid email or password."
                  : data.message}
              </div>
            </p>
          )
        )}

        {/* Email & Password Section */}
        <div className={`${classes["form-control"]}`}>
          {/* Email */}
          <p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
          </p>
          {/* Password */}
          <p>
            <label htmlFor="image">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </p>

          {/* Remeber Me Section */}
          <div className="form-check d-flex align-items ms-1">
            <input
              className="form-check-input my-auto me-2"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label m-0 p-0"
              htmlFor="flexCheckDefault"
            >
              {isLogin
                ? "Remember me"
                : "Agree with terms and conditions agreement"}
            </label>
          </div>
        </div>

        {/* Authentication Button */}
        <div className={classes["form-actions"]}>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Authenticating..." : isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </div>

        {/* Toggle the Page (Login & Sign Up) */}
        <div className="d-flex justify-content-center mt-4">
          <p className="p-0 m-0 me-2 fw-800">
            {isLogin ? "Don't Have Account? " : "Already have acount? "}
          </p>
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            className={classes["action-button"]}
          >
            {isLogin ? "Sign up" : "Login"}
          </Link>
        </div>
      </Form>
    </Fragment>
  );
}

export default AuthForm;
