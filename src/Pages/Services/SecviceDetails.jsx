import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const SecviceDetails = () => {
  const serviceDetails = useLoaderData();
  const { name, details, price, img, rating, _id } = serviceDetails;

  return (
    <div className="flex min-h-screen justify-center">
      <div>
        <div className="xl:container xl:mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <figure>
              <PhotoProvider>
                <PhotoView src={img}>
                  <img src={img} alt="" />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{details}</p>

              <div className="flex font-bold  items-center">
                <p> $ {price}</p>
                <p className="flex items-center ps-2 ">
                  {rating}
                  <FaStar />
                </p>
                <Link to="/services">
                  <button className="btn btn-outline btn-primary">
                    Back To Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/add-review/${_id}`} className="flex justify-center mb-2">
            <button className="btn "> Add Review</button>
          </Link>
          <Reviews _id={_id}></Reviews>
        </div>
      </div>
    </div>
  );
};

export default SecviceDetails;
