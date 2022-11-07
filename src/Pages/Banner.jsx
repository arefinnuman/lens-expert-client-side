import { Carousel } from "flowbite-react";
import React from "react";
import img1 from "../Asset/Banner/img1.jpg";
import img2 from "../Asset/Banner/img2.jpg";
import img3 from "../Asset/Banner/img3.jpg";
import img4 from "../Asset/Banner/img4.jpg";
import img5 from "../Asset/Banner/img5.jpg";

const Banner = () => {
  return (
    <div>
      <div className="h-96 sm:h-64 xl:h-96 2xl:h-96">
        <Carousel>
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img4} alt="..." />
          <img src={img5} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
