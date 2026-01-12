import React from "react";
import LikeButton from "../buttons/LikeButton";

const ReviewCard = ({ reviewData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={reviewData.photo}
          alt={reviewData.user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">{reviewData.user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(reviewData.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < reviewData.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{reviewData.review}</p>

      {/* Actions */}
      <LikeButton></LikeButton>
    </div>
  );
};

export default ReviewCard;
