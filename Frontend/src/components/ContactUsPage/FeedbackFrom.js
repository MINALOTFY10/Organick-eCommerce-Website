import Modal from "../UI/Modal";
import React, { useContext, useState, Fragment } from "react";
import UseInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";
import ErrorScreen from "../UI/ErrorScreen";
import LoadingScreen from "../UI/LoadingScreen";
import CheckMarkCircle from "../UI/CheckMarkCircle";
import classes from "./FeedbackFrom.module.css";

const FeedbackFrom = (props) => {
  const [finishedOrder, setFinishedOrder] = useState(false);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseInput((value) => /^[A-Za-z\s]{2,}$/.test(value));

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = UseInput((value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  );

  const {
    value: enteredCompanyNum,
    isValid: enteredCompanyNumIsValid,
    hasError: companyNumInputHasError,
    valueChangeHandler: companyNumChangedHandler,
    inputBlurHandler: companyNumBlurHandler,
    reset: resetCompanyNumInput,
  } = UseInput(() => true);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangedHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberInput,
  } = UseInput((value) => /^[0-9]{11}$/.test(value));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = UseInput(() => true);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredCompanyNumIsValid &&
    enteredPhoneNumberIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredCompanyNumIsValid ||
      !enteredPhoneNumberIsValid ||
      !enteredMessageIsValid
    ) {
      return;
    }

    const orderText = {
      messageInfo: {
        userName: enteredName,
        Email: enteredEmail,
        companyNum: enteredCompanyNum,
        phoneNumber: enteredPhoneNumber,
        Message: enteredMessage,
      },
      // orderedItem: cartCtx.items,
    };

    enterOrderHandler(orderText);

    resetNameInput();
    resetEmailInput();
    resetCompanyNumInput();
    resetPhoneNumberInput();
    resetMessageInput();

    setFinishedOrder(true);
  };

  const enterOrderHandler = async (orderText) => {
    const cartAfterEffect = () => {
      console.log("The FeedBack Sended");
    };

    sendTaskRequest(
      {
        url: "https://organick-site-default-rtdb.firebaseio.com/messages.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: orderText,
      },
      cartAfterEffect
    );
  };

  const content = (
    <Fragment>
      <form onSubmit={formSubmissionHandler} className="mt-4">
        <div className="row container col-10 mx-auto d-flex justify-content-center">
          <div
            className={`col-xl-5 mx-1 ${classes["form-control"]} ${
              nameInputHasError ? classes["invalid"] : ""
            }`}
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder="Your Full Name"
            />
            {nameInputHasError && (
              <p className={classes["error-text"]}>Enter a valid name</p>
            )}
          </div>
          <div
            className={`col-xl-5 mx-1 ${classes["form-control"]} ${
              emailInputHasError ? classes["invalid"] : ""
            }`}
          >
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="name"
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              placeholder="example@yourmail.com"
            />
            {emailInputHasError && (
              <p className={classes["error-text"]}>Enter a valid email</p>
            )}
          </div>
          <div
            className={`col-xl-5 mx-1 ${classes["form-control"]} ${
              companyNumInputHasError ? classes["invalid"] : ""
            }`}
          >
            <label htmlFor="name">Company</label>
            <input
              type="text"
              id="name"
              onChange={companyNumChangedHandler}
              onBlur={companyNumBlurHandler}
              value={enteredCompanyNum}
              placeholder="your company name here"
            />
            {companyNumInputHasError && (
              <p className={classes["error-text"]}>
                Enter a valid Company Name
              </p>
            )}
          </div>
          <div
            className={`col-xl-5 mx-1 ${classes["form-control"]} ${
              phoneNumberInputHasError ? classes["invalid"] : ""
            }`}
          >
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              id="name"
              onChange={phoneNumberChangedHandler}
              onBlur={phoneNumberBlurHandler}
              value={enteredPhoneNumber}
              placeholder="your phone number"
            />
            {phoneNumberInputHasError && (
              <p className={classes["error-text"]}>
                Enter a valid Phone Number(11 digits)
              </p>
            )}
          </div>

          <div
            className={`col-xl-10 mx-1 ${classes["form-control"]} ${
              classes["message-input"]
            } ${messageInputHasError ? classes["invalid"] : ""}`}
          >
            <label htmlFor="name">Message</label>
            <input
              type="text"
              id="name"
              onChange={messageChangedHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
              placeholder="hello there, i would like to talk about how to..."
            />
            {messageInputHasError && (
              <p className={classes["error-text"]}>Enter a valid Message</p>
            )}
          </div>

          <div className={classes["form-actions d-flex"]}>
            <button disabled={!formIsValid}>Send Messgae</button>
          </div>
        </div>
      </form>
    </Fragment>
  );

  return (
    <div className="container">
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <ErrorScreen
          errorMessage={
            <div>
              We have a problem! <br /> The order couldn't be send. Please come
              back later. 😓
            </div>
          }
        />
      ) : finishedOrder ? (
        <CheckMarkCircle />
      ) : (
        content
      )}
    </div>
  );
};

export default FeedbackFrom;
