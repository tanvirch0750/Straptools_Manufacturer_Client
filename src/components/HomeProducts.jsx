import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import "../styles/HomeProducts.css";
import Product from "./Product";

const HomeProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(products);
  return (
    <section className="section-home-products">
      <div className="section-heading">
        <h2>Our Products</h2>
      </div>
      <div className="container">
        <div className="home-products">
          {products?.slice(-3).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
