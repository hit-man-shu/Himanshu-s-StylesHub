import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { currencyFormatter } from "../../validation";
import { useDispatch } from "react-redux";
import { removeWishItem } from "../../store/wishItemSlice";
import { addItem } from "../../store/cartSlice";
import { toast } from "react-toastify";

const WishItem = ({ wishItem }) => {
  const dispatch = useDispatch();

  const handleRemoveWishItem = () => {
    toast.success("Item removed from wishlist successfully!");
    dispatch(removeWishItem(wishItem));
  };

  const handleAddToCart = () => {
    toast.success("Item added to cart successfully!");
    dispatch(addItem(wishItem));
    dispatch(removeWishItem(wishItem));
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            alt={wishItem.image}
            className="flex h-full w-10 items-center justify-center object-cover"
            // height="40"
            src={wishItem.image}
          />

          <div>
            <div className="font-medium">{wishItem.title}</div>
            <div className="text-sm text-gray-500">{wishItem.category}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        {currencyFormatter.format(wishItem.price * 10)}
      </td>
      <td className="px-4 py-3">
        <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
          In Stock
        </span>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={handleAddToCart}
          className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
        >
          Add to Cart
        </button>
      </td>
      <td className="grid place-items-center py-6">
        <FaRegTrashCan
          onClick={handleRemoveWishItem}
          className="h-6 w-6 cursor-pointer text-gray-500"
        />
      </td>
    </tr>
  );
};

export default WishItem;
