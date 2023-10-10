import classes from "./RelatedProducts.module.css";
import ProductsList from "../Product/ProductsList";

const RelatedProducts = ({ products, product }) => {
  // Filter out the current product
  const filteredProducts = products.filter((p) => p.id !== product.id);

  // filter products with the same  tags
  let relatedProducts = filteredProducts.filter(
    (p) => p.seo.title === product.seo.title
  );

  return (
    <div className="container">
      <h2 className={`${classes["heading"]}`}>Related Products</h2>
      <div className="container row d-flex justify-content-center align-items-center mb-1 px-5">
        <ProductsList products={relatedProducts} relatedProduct={true} />
      </div>
    </div>
  );
};

export default RelatedProducts;
