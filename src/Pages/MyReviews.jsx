import React, { useContext, useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/UserContext";
import Review from "./Review";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetch(`https://server-site-weld.vercel.app/my-reviews/${user?.email}`)
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
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div>
            <CircleLoader
              color={"#232b84"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="min-h-screen overflow-x-auto w-full">
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
      )}
    </>
  );
};

export default MyReviews;
