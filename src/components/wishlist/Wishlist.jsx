import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { wishClose } from "../../store/modalSlice";
import WishItem from "./WishItem";
import {
  saveCartToLocalStorage,
  saveWishItemToLocalStorage,
} from "../../utils/http";

const Wishlist = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishItems = useSelector((state) => state.wish.wishItems);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
    saveWishItemToLocalStorage(wishItems);
  }, [cartItems, wishItems]);

  const handleCloseWishlist = () => {
    dispatch(wishClose());
  };

  return (
    <div className="animate-fadeIn relative bottom-0 left-0 right-0 top-0 flex items-center justify-center  bg-opacity-50">
      <div className="animate-scaleUp relative rounded-lg bg-white p-6">
        <div className="absolute right-4 top-4">
          <button
            className="cursor-pointer border-none bg-transparent"
            onClick={handleCloseWishlist}
          >
            <IoCloseOutline className="h-6 w-6 font-bold text-gray-900" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Wish List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-500">
                <th className="px-4 py-3 text-center">Product</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">Stock Status</th>
                <th className="px-4 py-3 text-center">Action</th>
                <th className="px-4 py-3 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishItems.length !== 0 ? (
                wishItems.map((item) => <WishItem wishItem={item} />)
              ) : (
                <tr>
                  <h1 className=" my-3 font-bold text-red-600">
                    Your Wishlist is empty! No Items are added in your Wishlist.
                  </h1>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
