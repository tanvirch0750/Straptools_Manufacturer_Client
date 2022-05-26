import React from "react";
import { useQuery } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Product from "../components/Product";
import "../styles/Products.css";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("https://polar-tundra-61708.herokuapp.com/products").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <section className="products-page">
        <div className="container">
          <div className="section-heading">
            <h2>Our Products</h2>
          </div>
          <div className="all-products">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
