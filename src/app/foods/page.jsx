import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

const foodPage = async () => {
  const foods = await getFoods();

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">
        Total <span className="text-orange-400">{foods.length}</span> Found
      </h2>
      <InputSearch></InputSearch>
      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-5 my-10">
          {foods.map((food) => (
            <FoodCard food={food} key={food.id}></FoodCard>
          ))}
        </div>
        <div className="w-2xs border-2 border-gray-300 rounded-xl p-5">
          <h2 className="font-bold text-3xl">Cart Item</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default foodPage;
