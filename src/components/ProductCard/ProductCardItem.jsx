import React, { useEffect } from "react";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import {
  saveCartToLocalStorage,
  saveWishItemToLocalStorage,
} from "../../utils/http";
import { toast } from "react-toastify";
import { addWishItem } from "../../store/wishItemSlice";

const ProductCardItem = ({ product }) => {
  const { id, title, price, image, category } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishItems = useSelector((state) => state.wish.wishItems);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
    saveWishItemToLocalStorage(wishItems);
  }, [cartItems, wishItems]);

  const handleToCart = () => {
    toast.success("Item added to cart successfully!");
    dispatch(addItem(product));
  };

  const handleAddToWish = () => {
    toast.success("Item added to wishlist successfully!");
    dispatch(addWishItem(product));
  };

  return (
    <div>
      <div className="group my-4  flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-md">
        <div className="relative flex h-60 overflow-hidden">
          <img
            className=" block h-full w-full object-contain object-center"
            src={image}
            alt={title}
          />
          <div className="absolute -right-16 bottom-0 mb-4 mr-2 space-y-2 transition-all duration-300 group-hover:right-0">
            <button
              onClick={handleAddToWish}
              className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700 active:animate-ping active:bg-pink-700"
            >
              <MdFavoriteBorder className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <Link to={`/products/${id}`}>
            <h3 className="title-font mb-1 text-xs uppercase tracking-widest text-gray-500">
              {category}
            </h3>

            <h5 className="min-h-[9vh] text-lg tracking-tight text-slate-900">
              {title}
            </h5>
          </Link>
          <div className="mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {currencyFormatter.format(price * 10)}
              </span>
            </p>
          </div>
          <button
            onClick={handleToCart}
            className="flex items-center justify-center rounded-md bg-indigo-600 px-2 py-2 text-sm text-white transition hover:bg-indigo-700"
          >
            <MdOutlineShoppingCartCheckout className="mr-2 h-5 w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
