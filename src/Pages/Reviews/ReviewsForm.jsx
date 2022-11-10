import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/UserContext";

const ReviewsForm = () => {
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  console.log(_id);
  console.log(user.email);
  const handleSubmit = (e) => {
    const addedTimeEncrypted = new Date().getTime();
    const getFullTime = new Date().toLocaleString();
    const addedDate = getFullTime.split(" ")[0];

    e.preventDefault();

    const review = {
      comment: e.target.review.value,
      reviewerEmail: e.target.userEmail.value,
      addedTimeEncrypted,
      addedDate,
      serviceId: _id,
    };
    fetch("https://server-site-weld.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("You add your comment");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
    e.target.reset();
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Your opinion matters!
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="userEmail"
              id=""
              value={user.email}
              readOnly
            />
            <div className="flex flex-col w-full">
              <textarea
                name="review"
                rows="3"
                placeholder="Message..."
                className="p-10 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
              ></textarea>
              <button className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">
                Leave feedback
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="text-sm dark:text-gray-400"
          >
            Maybe later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewsForm;
