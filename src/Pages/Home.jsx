import React from "react";
import Banner from "../components/Banner";
import BusinessSummary from "../components/BusinessSummary";
import Distributors from "../components/Distributors";
import FeatureProduct from "../components/FeatureProduct";
import HomeProducts from "../components/HomeProducts";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureProduct />
      <BusinessSummary />
      <Reviews />
      <HomeProducts />
      <Distributors />
    </>
  );
};

export default Home;
