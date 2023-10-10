import { Suspense, useState, useEffect, Fragment } from "react";
import { useRouteLoaderData, json, defer, Await } from "react-router-dom";

import FooterSection from "../components/Footer/FooterSection";
import ProductDetails from "../components/ShopSinglePage/ProductDetails";
import LoadingScreen from "../components/UI/LoadingScreen";
import MainBanner from "../components/MainBanner";
import ShopSingleBannerImg from "../assets/ShopSingleBanner.png";
import ProductInformation from "../components/ShopSinglePage/ProductInformation";
import RelatedProducts from "../components/ShopSinglePage/RelatedProducts";
import NewsletterSection from "../components/Newssletter/NewsletterSection";
import ErrorPage from "./Error";

function ShopSinglePage() {
  const { product, products } = useRouteLoaderData("product-detail");
  const [myProduct, setMyProduct] = useState("");
  const isAuthenticatedToken = useRouteLoaderData("root");

  useEffect(() => {
    if (product) {
      setMyProduct(product);
    }
  }, [product]);

  return (
    <Fragment>
      <MainBanner img={ShopSingleBannerImg} title={product.name} />
      <Suspense fallback={<LoadingScreen />}>
        {isAuthenticatedToken ? (
          <>
            {/* Loading Product Details */}
            <Await resolve={product}>
              {(loadedProduct) => (
                <>
                  <ProductDetails product={loadedProduct} />
                  <ProductInformation product={loadedProduct} />
                </>
              )}
            </Await>
            {/* Loading Related Products */}
            <Await resolve={products}>
              {(loadedProducts) => (
                <RelatedProducts
                  products={loadedProducts}
                  product={myProduct}
                />
              )}
            </Await>
            <NewsletterSection />
            <FooterSection />
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items text-center">
            <ErrorPage />
          </div>
        )}
      </Suspense>
    </Fragment>
  );
}

export default ShopSinglePage;

async function loadProduct(id) {
  const response = await fetch("https://api.chec.io/v1/products/" + id, {
    headers: {
      "X-Authorization": "pk_54235a311cacd18006851253ed9922665d790fe494a2a", // Replace 'YOUR_API_KEY' with your actual Chec API key
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected product." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function loadProducts() {
  const response = await fetch("https://api.chec.io/v1/products", {
    headers: {
      "X-Authorization": "pk_54235a311cacd18006851253ed9922665d790fe494a2a", // Replace 'YOUR_API_KEY' with your actual Chec API key
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch Products." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.data;
  }
}

export async function loader({ request, params }) {
  const id = params.productId;

  return defer({
    product: await loadProduct(id),
    products: loadProducts(),
  });
}
