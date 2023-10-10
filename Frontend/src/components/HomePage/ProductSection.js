import { Link } from "react-router-dom";

import categoryImg from "../../assets/Categories.png";
import BlueRedButton from "../UI/BlueRedButton";
import ProductsList from "../Product/ProductsList";

import classes from "./ProductSection.module.css";
import "font-awesome/css/font-awesome.min.css";

const ProductSection = ({ products }) => {
  let editedProduct = products.slice(0, 8);
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      {/* Section Header */}
      <div className={`${classes["section_title"]} d-flex flex-column justify-content-center align-items-center`} >
        <img src={categoryImg} width={100} />
        <h1 className="fs-2 mt-2 mb-2">Our Products</h1>
      </div>

      {/* Products */}
      <ProductsList products={editedProduct} />

      {/* Button */}
      <Link to={`/Shop`}>
        <BlueRedButton>Learn More</BlueRedButton>
      </Link>
    </div>
  );
};

export default ProductSection;
