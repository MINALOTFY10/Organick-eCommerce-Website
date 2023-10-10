import classes from "./ProductsList.module.css";
import ProductItem from "./ProductItem";
import RelatedProductItem from "../ShopSinglePage/RelatedProductItem";

function ProductsList({ products, relatedProduct }) {
  return (
    <div
      className={`${classes["products"]} container d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="row d-flex justify-content-center align-items-center mb-4">
        {!relatedProduct
          ? // Normal Product Item
            products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          : // Product in Related Products Section
            products.map((product) => (
              <RelatedProductItem product={product} key={product.id} />
            ))}
      </div>
    </div>
  );
}

export default ProductsList;
