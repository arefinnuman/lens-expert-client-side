import React from "react";
import { Link } from "react-router-dom";

const ReviewsForm = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Your opinion matters!
          </h2>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
            ></textarea>
            <button
              type="button"
              className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
            >
              Leave feedback
            </button>
          </div>
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
