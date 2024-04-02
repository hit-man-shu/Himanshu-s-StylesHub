import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import Loader from "../../UI/Loader";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../utils/http";
import ErrorBlock from "../../UI/ErrorBlock";

const Categories = () => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: ({ signal }) => getCategories({ signal }),
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
    content = (
      <>
        <FeatureCard cards={data} />
      </>
    );
  }

  return <>{content}</>;
};

export default Categories;
