// External Libraries and Frameworks
import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokenDuration } from "../util/auth";

// Components
import Cart from "../components/Cart/Cart";
import MainNavigation from "../components/MainNavigation/MainNavigation";


function RootLayout() {
  const isShowCart = useSelector((state) => state.toggle.showStore);
  const submit = useSubmit();
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {isShowCart && <Cart />}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
