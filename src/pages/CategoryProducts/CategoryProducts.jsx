import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getCategorieProduct } from "../../utils/http";
import Loader from "../../UI/Loader";
import ErrorBlock from "../../UI/ErrorBlock";

const CategoryProducts = () => {
  const { name } = useParams();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["categoryPoduct", { name }],
    queryFn: ({ signal }) => getCategorieProduct({ name, signal }),
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

  if (data) {
    content = <ProductCard products={data} />;
  }

  return <>{content}</>;
};

export default CategoryProducts;
