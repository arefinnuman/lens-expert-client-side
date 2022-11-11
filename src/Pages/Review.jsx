import React from "react";

const Review = ({ review }) => {
  const { comment, reviewerName, userPhotoURL } = review;
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={userPhotoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{reviewerName}</div>
            </div>
          </div>
        </td>
        <td>{comment}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </div>
  );
};

export default Review;
