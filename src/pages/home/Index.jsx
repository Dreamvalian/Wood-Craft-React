import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/pages/_index.scss";
import Hero from "./Hero";
import Testimony from "./Testimony";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Testimony />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
