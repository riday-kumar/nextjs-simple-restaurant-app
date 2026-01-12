import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};

const foodDetail = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);
  if (!food) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-semibold text-red-500">Food Not Found</h2>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{food.title}</h1>

          <p className="text-gray-500">
            Category: <span className="font-medium">{food.category}</span>
          </p>

          <p className="text-gray-500">
            Area: <span className="font-medium">{food.area}</span>
          </p>

          <p className="text-2xl font-semibold text-gray-800">৳ {food.price}</p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-[#ffa826] text-white px-6 py-2 rounded-lg hover:bg-[#e89a1f] transition">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="border border-gray-300 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default foodDetail;
