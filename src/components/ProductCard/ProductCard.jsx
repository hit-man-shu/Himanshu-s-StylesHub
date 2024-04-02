import React from "react";
import ProductCardItem from "./ProductCardItem";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="body-font mt-32 text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 grid grid-cols-1 gap-10 p-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCardItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
