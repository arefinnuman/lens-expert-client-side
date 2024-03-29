import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServicesForHomePage = ({ homeService }) => {
  const { name, rating, price, img, _id } = homeService;
  return (
    <div>
      <div className="container mx-auto  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5 ">
        <div className=" card w-80 bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <div className="flex font-bold  items-center">
              <p> $ {price}</p>
              <p className="flex items-center ">
                {rating}
                <FaStar />
              </p>
              <Link to={`/service-details/${_id}`}>
                <button className=" btn-outline btn-primary">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesForHomePage;
