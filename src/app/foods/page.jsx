import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const foodPage = async () => {
  const foods = await getFoods();

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">
        Total <span className="text-orange-400">{foods.length}</span> Found
      </h2>
      <div className="grid grid-cols-3 gap-10 my-10">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default foodPage;
