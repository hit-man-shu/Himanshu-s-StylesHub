import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { saveCartToLocalStorage } from "../../utils/http";
import CartItem from "./CartItem";
import { currencyFormatter } from "../../validation";
import Checkout from "./Checkout";
import { open } from "../../store/modalSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCartItemPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <>
      <Checkout />
      <div className="md:mt32 container mx-auto mt-44 min-h-[80vh]">
        <div className="my-10 flex flex-wrap shadow-md">
          <div className="w-full bg-white px-10 py-10 md:w-3/4">
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">
                {cartItems.length} Items
              </h2>
            </div>
            {cartItems.length === 0 ? (
              <p className="mt-32 text-center text-2xl font-bold">
                Your Cart is empty! No Items are added in your Cart.
              </p>
            ) : (
              <div className="mb-5 mt-10 flex">
                <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
                  Product Details
                </h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
                  Quantity
                </h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
                  Price
                </h3>
                <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
                  Total
                </h3>
              </div>
            )}
            {cartItems.map((cart) => (
              <CartItem cart={cart} key={cart.id} />
            ))}

            <Link
              to={"/products"}
              className="mt-10 flex items-center text-sm font-semibold text-indigo-600"
            >
              <FaLongArrowAltLeft className="mr-2 w-4 fill-current text-indigo-600" />
              Continue Shopping
            </Link>
          </div>
          {cartItems.length !== 0 ? (
            <div id="summary" className="w-full px-8  py-10 md:w-1/4">
              <h1 className="border-b pb-8 text-2xl font-semibold">
                Order Summary
              </h1>
              <div className="mb-5 mt-10 flex justify-between">
                <span className="text-sm font-semibold uppercase">
                  Items {cartItems.length}
                </span>
                <span className="text-sm font-semibold">
                  {currencyFormatter.format(totalCartItemPrice * 10)}
                </span>
              </div>
              <div>
                <label className="mb-3 inline-block text-sm font-medium uppercase">
                  Shipping
                </label>
                <div className="block w-full p-2 text-sm text-gray-600">
                  Standard shipping - {currencyFormatter.format(10.0)}
                </div>
              </div>

              <div className="mt-8 border-t">
                <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                  <span>Total cost</span>
                  <span>
                    {currencyFormatter.format(totalCartItemPrice * 10 + 10)}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(open())}
                  className="w-full bg-indigo-500 py-3 text-sm font-semibold uppercase text-white hover:bg-indigo-600"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="relative left-10 flex items-center">
              <span className="px-2 font-bold">
                TOTAL COST {currencyFormatter.format(0)}
              </span>
              | No Item in the cart!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
