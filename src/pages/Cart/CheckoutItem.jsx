import React from "react";
import { currencyFormatter } from "../../validation";

const CheckoutItem = ({ item }) => {
  return (
    <div className=" flex flex-col gap-4 rounded-lg bg-white sm:flex-row">
      <img
        className="object-covermd:h-24 mx-auto w-20 rounded-md "
        src={item.image}
        alt={item.title}
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item.title}</span>
        <div className="font-semibold flex justify-between">
          <span>{item.quantity}</span>
          <span>
            {currencyFormatter.format(item?.price * item?.quantity * 10)}
          </span>
        </div>
        <p className="text-lg font-bold">
          {currencyFormatter.format(item.price * 10)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
