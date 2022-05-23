import React from "react";
import "../styles/Product.css";

const Product = ({ product }) => {
  const {
    name,
    quantity,
    image,
    availableQuantity,
    description,
    minimumOrder,
    category,
    pricePerUnit,
  } = product;
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={image} alt="starp-palstic" />
      <p className="product-description">{description}</p>
      <div className="product-content">
        <p>Minimum order: {minimumOrder}</p>
        <p>Quantity: {quantity}</p>
        <p>Available quantity: {availableQuantity}</p>
        <p>Price: ${pricePerUnit}</p>
        <p>Category: {category}</p>
      </div>
      <button className="btn btn-full">Purchase</button>
    </div>
  );
};

export default Product;
