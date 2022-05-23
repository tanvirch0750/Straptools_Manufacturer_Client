import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/Purchase.css";

const Purchase = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery(["purchase", id], () =>
    fetch(`http://localhost:5000/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(product);

  return (
    <section className="purchase-page">
      <div className="container">
        <div className="purchase-page-inner">
          <div className="purchase-heading">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="purchase-description">
            <div className="purchase-description-img">
              <div className="description-full">
                <h3>Full Description:</h3>
                <p>{product.fullDescription}</p>
              </div>
              <div className="description-img">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="purchase-description-content">
              <div className="purchase-content">
                <ul>
                  <li>
                    Quantity: <span>{product.quantity}</span>
                  </li>
                  <li>
                    Minimum order: <span>{product.minimumOrder}</span>
                  </li>
                  <li>
                    Available quantity: <span>{product.quantity}</span>
                  </li>
                  <li>
                    Price per product: <span>${product.pricePerUnit}</span>
                  </li>
                  <li>
                    Category: <span>{product.category}</span>
                  </li>
                </ul>
              </div>
              <div className="purchase-product">
                <h3>Enter Purchase Quantity:</h3>
                <div className="quantity-box">
                  <button className="btn btn-full">+</button>
                  <input
                    type="number"
                    className="quantity-input"
                    placeholder="Productn Quantity"
                  />
                  <button className="btn btn-full">-</button>
                </div>
                <div>
                  <button className="btn btn-full purchase-btn">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
