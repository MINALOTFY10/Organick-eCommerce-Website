import { Suspense, Fragment } from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  json,
  defer,
  Await,
} from "react-router-dom";

import ErrorPage from "./Error";
import MainBanner from "../components/MainBanner";
import ProductsList from "../components/Product/ProductsList";
import NewsletterSection from "../components/Newssletter/NewsletterSection";
import FooterSection from "../components/Footer/FooterSection";
import ShopBannerImg from "../assets/ShopBanner.png";
import LoadingScreen from "../components/UI/LoadingScreen";

function ShopPage() {
  const { products } = useLoaderData();
  const isAuthenticatedToken = useRouteLoaderData("root");

  return (
    <Suspense fallback={<LoadingScreen />}>
      {isAuthenticatedToken ? (
        <Fragment>
          {/* Banner */}
          <MainBanner img={ShopBannerImg} title={"Shop"} />

          {/* Products List */}
          <Await resolve={products}>
            {(loadedProducts) => (
              <div className="mt-5">
                <ProductsList products={loadedProducts} />
              </div>
            )}
          </Await>
        </Fragment>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items text-center">
          <ErrorPage />
        </div>
      )}

      <NewsletterSection />
      <FooterSection />
    </Suspense>
  );
}

export default ShopPage;

async function loadProducts() {
  const response = await fetch("https://api.chec.io/v1/products", {
    headers: {
      "X-Authorization": "pk_54235a311cacd18006851253ed9922665d790fe494a2a", // Replace 'YOUR_API_KEY' with your actual Chec API key
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch products." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.data;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
