import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useQuery } from "@tanstack/react-query";
import { getLimitedProducts } from "../utils/http";
import ErrorBlock from "../UI/ErrorBlock";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../validation";

const Carousel = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["limitedCaroProducts"],
    queryFn: ({ signal }) => getLimitedProducts({ signal, limit: 4 }),
  });

  let content;

  if (isPending) {
    content = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="ml-16 h-12 w-12 animate-spin"
        viewBox="0 0 16 16"
      >
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
          fillRule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
      </svg>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to fetch data"
        message={error.message || "Can't fetch."}
      />
    );
  }

  if (data) {
    content = (
      <>
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative">
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 px-4 py-2">
                <p className="mb-1 text-2xl font-semibold text-white">
                  Limited Time Offer!
                </p>
                <p className="text-lg font-bold text-yellow-300">
                  Discounted Price:{" "}
                  {currencyFormatter.format(product.price * 10)}
                </p>
                <button className="mt-2 rounded-full bg-yellow-400 px-4 py-2 font-semibold text-gray-900 transition duration-300 hover:bg-yellow-500">
                  <Link to={`/products/${product.id}`}>Shop Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay
    >
      {content}
    </Swiper>
  );
};

export default Carousel;
