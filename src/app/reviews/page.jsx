"use client";
import FoodCard from "@/components/cards/FoodCard";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">
        Total <span className="text-orange-400">{reviews.length}</span> Found
      </h2>
      <div className="grid grid-cols-3 gap-10 my-10">
        {reviews.map((reviewData) => (
          <ReviewCard reviewData={reviewData} key={reviewData.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
