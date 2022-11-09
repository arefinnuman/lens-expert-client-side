import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { name, rating, price, details, img, _id } = service;
  return (
    <div>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5 ">
        <div className=" card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {details.length > 150 ? (
                <p>
                  {details.slice(0, 150) + "..."}{" "}
                  <Link to={`service/${_id}`} className="text-info">
                    Read More
                  </Link>{" "}
                </p>
              ) : (
                <p>{details}</p>
              )}
            </p>
            <div className="flex font-bold  items-center">
              <p> $ {price}</p>
              <p className="flex items-center ">
                {rating}
                <FaStar />
              </p>
              <Link to={`/get-access/${_id}`}>
                <button className="btn btn-primary">Get Premium Access</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
