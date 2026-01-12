import React from "react";

const LikeButton = () => {
  return (
    <div className="flex items-center justify-between pt-2">
      <button
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition`}
      >
        ❤️ Like
      </button>

      <span className="text-sm text-gray-500"> likes</span>
    </div>
  );
};

export default LikeButton;
