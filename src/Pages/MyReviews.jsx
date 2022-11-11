import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/UserContext";
import Review from "./Review";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      })
      .catch((err) => {
        Swal.fire(err.message);
      });
  }, [user?.email]);
  console.log(myReviews);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
