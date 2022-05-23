import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

const Product = ({ product }) => {
  const {
    _id,
    name,
    quantity,
    image,
    availableQuantity,
    description,
    minimumOrder,
    category,
    pricePerUnit,
  } = product;
  const navigate = useNavigate();
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
      <button
        className="btn btn-full"
        onClick={() => navigate(`/products/${_id}`)}
      >
        Purchase
      </button>
    </div>
  );
};

export default Product;
