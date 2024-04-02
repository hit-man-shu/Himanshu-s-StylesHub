import { useQuery } from "@tanstack/react-query";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stats from "../../components/StatCard/Stats";
import Loader from "../../UI/Loader";
import { getLimitedProducts } from "../../utils/http";
import ErrorBlock from "../../UI/ErrorBlock";

const Home = () => {
  const {
    data: products,
    isError,
    error,
    isPending,
  } = useQuery({
    queryKey: ["limitedProducts"],
    queryFn: ({ signal }) => getLimitedProducts({ signal, limit: 12 }),
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
        <Hero />
        <div className="mt-20 flex w-full flex-col text-center">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
            PRODUCTS
          </h2>
          <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            MOST POPULAR PRODUCTS
          </h1>
        </div>
        <ProductCard products={products} />
        <Stats />
      </>
    );
  }

  return <div className="min-h-[65vh]">{content}</div>;
};

export default Home;
