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
      <h2 className="italic text-center text-xl text font-semibold my-3">
        You don't take a photograph. You make it. - Ansel Adams
      </h2>
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
