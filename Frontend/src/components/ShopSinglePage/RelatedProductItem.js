import { Link, useSubmit, useRouteLoaderData } from "react-router-dom";
import classes from "./RelatedProductItem.module.css"
import OldPrice from "../../assets/OldPriceImg.png";
import Stars from "../UI/Stars";

function RelatedProductItem({ product }) {

  return (
    <div
      key={product.id}
      class={`${classes["my-card"]} col-sm-6 col-md-5 col-lg-6 col-xl-4 mb-3 d-flex justify-content-center align-items-center`}
    >
      <Link to={`/shop/${product.id}`}>
        <div
          class={`card p-1 px-2 ${classes["product-item"]}`}
          style={{ width: "18rem" }}
        >
          <div class="container mt-3 mb-2">
            <span class={`badge badge-primary ${classes["product-tag"]}`}>
              {product["seo"]["title"]}
            </span>
          </div>
          <img
            src={product["image"]["url"]}
            class={`card-img-top img-fluid ${classes["product-image"]}`}
            alt="product image"
          />
          <div class="card-body pb-0">
            <h5
              class={`card-title p-0 pb-2 m-0 text-decoration-none ${classes["product-title"]}`}
            >
              {product["name"]}
            </h5>
          </div>
          <ul
            class={`list-group list-group-flush ps-3 pe-3 pt-1 d-flex justify-content-between flex-row flex-wrap`}
          >
            <div className="d-flex m-0 p-0">
              <img
                class="my-auto p-0 me-1"
                src={OldPrice}
                width={45}
                height={15}
              />
              <li class={`bg-transparent ${classes["price"]}`}>
                {product["price"]["formatted_with_code"]}
              </li>
            </div>

            <li class={`bg-transparent d-flex ${classes["rating"]}`}>
              {Stars}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default RelatedProductItem;
