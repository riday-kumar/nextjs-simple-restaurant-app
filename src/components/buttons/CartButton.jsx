"use client";

import React, { useState } from "react";

const CartButton = () => {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-[#ffa826] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#e89a1f] transition disabled:bg-gray-400 disabled:text-black"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
