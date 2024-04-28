import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../utils/http";
import { FaStar } from "react-icons/fa";
import Loader from "../../UI/Loader";
import ErrorBlock from "../../UI/ErrorBlock";
import { currencyFormatter } from "../../validation";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { toast } from "react-toastify";
import { addWishItem } from "../../store/wishItemSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["product", { id }],
    queryFn: ({ signal }) => getSingleProduct({ id, signal }),
  });

  const handleToCart = (data) => {
    toast.success("Item added to cart successfully!");
    dispatch(addItem(data));
  };

  const handleAddToWish = () => {
    toast.success("Item added to wishlist successfully!");
    dispatch(addWishItem(data));
  };

  let content;

  if (isPending) {
    content = <Loader />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to fetch data"
        message={error.message || "Cant' fetch data"}
      />
    );
  }

  if (data) {
    content = (
      <div className="mx-auto flex flex-wrap lg:w-4/5">
        <img
          alt={data.title}
          className="h-64 max-h-[600px] w-full rounded object-contain object-center lg:h-auto lg:w-1/2"
          src={data.image}
        />
        <div className="mt-6 flex w-full flex-col gap-2 lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
          <h2 className="title-font text-sm uppercase tracking-widest text-gray-500">
            {data.category}
          </h2>
          <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
            {data.title}
          </h1>
          <div className="mb-4 flex">
            <span className="flex items-center">
              {data.rating.rate}{" "}
              <FaStar className="ml-1 h-4 w-4 text-indigo-500" />
              <span className="ml-3 text-gray-600">
                {data.rating.count} Reviews
              </span>
            </span>
          </div>

          <p className="leading-relaxed">{data.description}</p>

          <div className="mt-10 flex items-center justify-between">
            <span className="title-font text-2xl font-medium text-gray-900">
              {currencyFormatter.format(data.price * 10)}
            </span>
            <div className=" flex">
              <button
                onClick={() => handleToCart(data)}
                className="ml-auto rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none"
              >
                Add to cart
              </button>

              <button
                onClick={handleAddToWish}
                className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500 active:animate-ping active:bg-pink-700"
              >
                <MdOutlineFavorite className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="body-font mt-32 overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-24">{content}</div>
    </section>
  );
};

export default Product;
