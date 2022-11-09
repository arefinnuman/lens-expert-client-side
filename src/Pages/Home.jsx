import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Gallery from "./Gallery";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
