import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, completelyRemove, removeItem } from "../../store/cartSlice";
import { currencyFormatter } from "../../validation";
import { toast } from "react-toastify";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(completelyRemove(cart));
    toast.success("Item removed from cart!");
  };

  return (
    <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
      <div className="flex w-2/5 flex-col items-center md:flex-row">
        <div className="w-20">
          <img className="h-24" src={cart?.image} alt={cart?.title} />
        </div>
        <div className="ml-4 flex flex-grow flex-col justify-between">
          <span className="text-sm font-bold">{cart?.title}</span>
          <span className="text-xs capitalize text-red-500">
            {cart?.category}
          </span>
          <div
            className="cursor-pointer text-xs font-semibold text-gray-500 hover:text-red-500"
            onClick={handleRemoveItem}
          >
            Remove
          </div>
        </div>
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <FaMinus
          onClick={() => dispatch(removeItem(cart))}
          className="w-3 cursor-pointer fill-current text-gray-600"
        />

        <div className="mx-2 w-8 border text-center">{cart?.quantity}</div>

        <FaPlus
          onClick={() => dispatch(addItem(cart))}
          className="w-3 cursor-pointer fill-current text-gray-600"
        />
      </div>

      <span className="w-1/5 text-center text-sm font-semibold">
        ${cart?.price}
      </span>
      <span className="w-1/5 text-center text-sm font-semibold">
        {currencyFormatter.format(cart?.price * cart?.quantity * 10)}
      </span>
    </div>
  );
};

export default CartItem;
