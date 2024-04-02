import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";

const Hero = () => {
  return (
    <section className="body-font mt-32 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row md:justify-center">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Hurry! Grab Your Favorite Products
            <br className="hidden lg:inline-block" />
            Before They're Gone
          </h1>
          <p className="mb-8 leading-relaxed">
            Don't miss out on our exclusive collection! From copper mugs to
            artisanal pour-over coffee makers, we offer a wide range of premium
            products that are sure to impress. Whether you're looking for
            eco-friendly tote bags or trendy beard grooming kits, we have
            something for everyone. Shop now and secure your favorites before
            they sell out!
          </p>
          <div className="flex justify-center">
            <Link
              to="products"
              className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
            >
              Show All Products
            </Link>
            <Link
              to="/about"
              className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className=" w-5/6 md:w-1/2 lg:w-full lg:max-w-xs ">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
