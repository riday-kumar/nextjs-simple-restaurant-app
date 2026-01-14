"use client";
import React from "react";

const InputSearch = () => {
  const handleFoodForm = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };
  return (
    <div>
      <form onSubmit={handleFoodForm} action="">
        <input
          className="px-1 py-3 border-2 rounded w-2xl"
          name="search"
          type="text"
          placeholder="Enter Food Name"
        />
        <button className="px-4 py-2 bg-yellow-500 text-black">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
