import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const FoodLoading = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3 gap-10 my-10">
        {[...Array(12)].map((_, index) => (
          <FoodCardSkeleton key={index}></FoodCardSkeleton>
        ))}
      </div>
    </div>
  );
};

export default FoodLoading;
