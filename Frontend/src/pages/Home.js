// External Libraries and Frameworks
import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { userActions } from "../store";
import { sendUserData } from "../store/CartHttpActions";

// Components
import BannerSection from "../components/HomePage/BannerSection";
import OfferBannerSection from "../components/HomePage/OfferBannerSection";
import AboutSection from "../components/HomePage/AboutSection";
import ProductSection from "../components/HomePage/ProductSection";
import TestimonialCounter from "../components/HomePage/TestimonialCounter";
import OfferSection from "../components/HomePage/OfferSection";
import WhoAreWeSection from "../components/HomePage/WhoAreWeSection";
import NewsletterSection from "../components/Newssletter/NewsletterSection";
import FooterSection from "../components/Footer/FooterSection";
import LoadingScreen from "../components/UI/LoadingScreen";

function HomePage() {
  const { products } = useLoaderData();
  const dispatch = useDispatch();

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const authentucated = localStorage.getItem("authentucated");

  useEffect(() => {
    if (email && !authentucated) {
      console.log("*******************USER AUTHENTUCATED*******************");

      localStorage.setItem("authentucated", true);

      dispatch(userActions.saveUserData({ email, password }));

      dispatch(sendUserData({ email, password }));
    }
  }, [email]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <BannerSection />
      <OfferBannerSection />
      <AboutSection />

      {/* Loading Products in Porducts Section */}
      <Await resolve={products}>
        {(loadedProducts) => <ProductSection products={loadedProducts} />}
      </Await>

      <TestimonialCounter />

      <Await resolve={products}>
        {(loadedProducts) => <OfferSection products={loadedProducts} />}
      </Await>

      <WhoAreWeSection />
      <NewsletterSection />
      <FooterSection />
    </Suspense>
  );
}

export default HomePage;

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
