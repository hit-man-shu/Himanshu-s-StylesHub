import React from "react";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getAllProducts } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../UI/Loader";
import ErrorBlock from "../../UI/ErrorBlock";

const Products = () => {
  const {
    data: products,
    isError,
    error,
    isPending,
  } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getAllProducts({ signal }),
  });

  let content;

  if (isPending) {
    content = <Loader />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to fetch data"
        message={error.message || "Can't fetch data"}
      />
    );
  }

  if (products) {
    content = (
      <>
        <Categories />
        <div className="mt-20 flex w-full flex-col text-center">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
            PRODUCTS
          </h2>
          <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            ALL PRODUCTS
          </h1>
        </div>
        <ProductCard products={products} />
      </>
    );
  }

  return <div className="min-h-[65vh]">{content}</div>;
};

export default Products;
