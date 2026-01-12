import ReviewSkeleton from "@/components/skeletons/ReviewSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3 gap-10 my-10">
        {[...Array(12)].map((_, index) => (
          <ReviewSkeleton key={index}></ReviewSkeleton>
        ))}
      </div>
    </div>
  );
};

export default ReviewLoading;
