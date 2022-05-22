import React from "react";
import Banner from "../components/Banner";
import BusinessSummary from "../components/BusinessSummary";
import FeatureProduct from "../components/FeatureProduct";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureProduct />
      <BusinessSummary />
      <Reviews />
    </>
  );
};

export default Home;
