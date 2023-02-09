import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Gallery from "./Gallery";
import ServicesForHomePage from "./Services/ServicesForHomePage";

const Home = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("https://server-site-weld.vercel.app/services-for-homepage")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHomeServices(data.data);
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(homeServices);
  return (
    <div>
      <Banner />
      <Feature />
      <h2 className="italic text-center text-xl text font-semibold my-3">
        You don't take a photograph. You make it. - Ansel Adams
      </h2>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5">
        {homeServices.map((homeService) => (
          <ServicesForHomePage
            key={homeService._id}
            homeService={homeService}
          ></ServicesForHomePage>
        ))}
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
