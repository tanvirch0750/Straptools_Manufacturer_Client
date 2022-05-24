import React from "react";
import Banner from "../components/Banner";
import BusinessSummary from "../components/BusinessSummary";
import Distributors from "../components/Distributors";
import FeatureProduct from "../components/FeatureProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderContact from "../components/HeaderContact";
import HomeProducts from "../components/HomeProducts";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <HeaderContact />
      <Header />
      <Banner />
      <FeatureProduct />
      <BusinessSummary />
      <Reviews />
      <HomeProducts />
      <Distributors />
      <Footer />
    </>
  );
};

export default Home;
