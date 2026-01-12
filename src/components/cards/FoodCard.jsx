import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{food.title}</h3>

        <p className="text-sm text-gray-500">Category: {food.category}</p>

        <p className="text-base font-bold text-gray-800">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <CartButton></CartButton>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1 border border-gray-300 text-gray-700 p-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
