import React from "react";

const loading = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="h-80 bg-gray-300 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
