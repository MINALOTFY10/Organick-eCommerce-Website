import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import ErrorSection from "../components/ErrorSection";

function ErrorPage(props) {
  const error = useRouteError();

  return (
    <Fragment>
      {!error ? <ErrorSection /> : <ErrorSection error={error} />}
    </Fragment>
  );
}

export default ErrorPage;
