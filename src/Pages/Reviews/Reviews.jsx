import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReviewCard from "./ReviewCard";

const Reviews = ({ _id }) => {
  const [reviews, setReviews] = useState([]);
  console.log(_id);

  useEffect(() => {
    fetch(`https://server-site-weld.vercel.app/reviewsbyid/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
        } else {
          Swal.fire("an error", "error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto grid flex min-h-screen  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5 ">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
