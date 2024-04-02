import React from "react";
import { RxCross2 } from "react-icons/rx";
import NavModal from "../../UI/NavModal";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import { close } from "../../store/modalSlice";
import { TbTruckDelivery } from "react-icons/tb";
import Input from "../../UI/Input";
import { currencyFormatter } from "../../validation";
import { useMutation } from "@tanstack/react-query";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { sendOrderData } from "../../utils/http";
import { emptyCart } from "../../store/cartSlice";
import ErrorBlock from "../../UI/ErrorBlock";

const Checkout = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const checkoutItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: sendOrderData,
    onSuccess: () => {
      dispatch(emptyCart());
      navigate("/");
    },
  });

  const totalAmount = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(token);
    console.log(data);
    mutate({ postData: { ...data, items: checkoutItems }, token });
  };

  return (
    <NavModal open={isOpen}>
      <div className="relative grid sm:px-1 lg:grid-cols-2 lg:px-2 xl:px-4">
        <RxCross2
          onClick={() => dispatch(close())}
          className="absolute right-10 top-0 cursor-pointer text-4xl"
        />
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {checkoutItems.map((checkItem) => (
              <CheckoutItem item={checkItem} key={checkItem.id} />
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <div className="mt-5 grid gap-6">
            <div className="relative">
              <div className="flex items-center rounded-lg border border-gray-300 p-4">
                <TbTruckDelivery className="text-3xl" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-sm leading-6 text-slate-500">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <div className="flex justify-between gap-4">
            <p className=" text-gray-400">
              Complete your order by providing your payment details.
            </p>

            <p className="text-2xl font-bold text-indigo-800">
              Total :{currencyFormatter.format(totalAmount * 10 + 10)}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" my-10 rounded-md border-2 p-4"
          >
            <Input label="City" type="text" id="city" />
            <Input label="State" type="text" id="state" />
            <Input label="Address" type="text" id="address" />
            <Input label="Pincode" type="number" id="pincode" />

            <button
              disabled={isPending}
              className="my-8 w-full rounded-md bg-indigo-700 px-6 py-3 font-medium text-white"
            >
              {isPending ? "Sending..." : "Place Order"}
            </button>
            {isError && (
              <ErrorBlock
                title="Failed to post data!"
                message={error.message || "Can't post data.."}
              />
            )}
          </form>
        </div>
      </div>
    </NavModal>
  );
};

export default Checkout;
