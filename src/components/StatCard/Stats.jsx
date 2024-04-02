import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";

const Stats = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Discover New Arrivals
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Explore our latest collection of trendy fashion items. From stylish
            cardigans to chic tote bags, we have everything you need to elevate
            your wardrobe. Whether you're into classic hexagon patterns or
            modern asymmetrical designs, we've got you covered. Don't miss out
            on our exclusive Brooklyn-inspired pieces and subway tile-inspired
            accessories. Shop now and embrace your unique style!
          </p>
        </div>

        <div className="-m-4 grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-4 ">
            <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
              <BiSolidLogInCircle className="mb-3 inline-block h-12 w-12 text-indigo-500" />
              <h2 className="title-font text-3xl font-medium text-gray-900">
                1,200
              </h2>
              <p className="leading-relaxed">New Registers</p>
            </div>
          </div>

          <div className="w-full p-4 ">
            <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
              <FaUsers className="mb-3 inline-block h-12 w-12 text-indigo-500" />
              <h2 className="title-font text-3xl font-medium text-gray-900">
                89,400
              </h2>
              <p className="leading-relaxed">Total Page Views</p>
            </div>
          </div>

          <div className="w-full p-4 ">
            <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
              <FaTasks className="mb-3 inline-block h-12 w-12 text-indigo-500" />

              <h2 className="title-font text-3xl font-medium text-gray-900">
                86%
              </h2>
              <p className="leading-relaxed">Tasks done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
