import React from "react";
import { Link } from "react-router-dom";
import { FcElectronics } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import { GrRestroomWomen } from "react-icons/gr";
import { IoDiamond } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <section className="body-font mt-32 text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
            CATEGORIES
          </h2>
          <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            Our Popular Categories
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          {cards?.map((card) => {
            return (
              <Link
                key={card}
                to={`/categories/${card}`}
                className="cursor-pointer p-4 md:w-1/3"
              >
                <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                      {card === "electronics" && (
                        <FcElectronics className="h-5 w-5" />
                      )}

                      {card === "jewelery" && <IoDiamond className="h-5 w-5" />}

                      {card === "men's clothing" && (
                        <GiClothes className="h-5 w-5" />
                      )}

                      {card === "women's clothing" && (
                        <GrRestroomWomen className="h-5 w-5" />
                      )}
                    </div>
                    <h2 className="title-font text-lg font-medium capitalize text-gray-900">
                      {card || "Example card"}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <span className="mt-3 inline-flex items-center text-indigo-500">
                      Learn More
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
