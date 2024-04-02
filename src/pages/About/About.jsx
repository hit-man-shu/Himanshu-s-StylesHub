import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="mt-44 min-h-[80vh] w-full
     py-6 md:mt-32"
    >
      <div className="container mx-auto p-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-10 space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-indigo-800 sm:text-2xl md:text-3xl lg:text-4xl/none">
              Himanshu's StylesHub
            </h2>
            <p className="pt-10 text-gray-700 md:text-xl">
              Your one-stop destination for the latest fashion trends and
              timeless classics. We curate the best styles from top designers
              and boutique brands, ensuring that you always look your best.
              {"  "} I'm always open to feedback and suggestions, so feel free
              to reach out to me via
              <Link
                className="hover:text-blue-900"
                to="mailto:himanshusahoo2019@gmail.com"
              >
                email-: himanshusahoo2019@gmail.com
              </Link>
              <Link
                className="hover:text-blue-900"
                to="https://github.com/hit-man-shu/hit-man-shu"
              >
                github -: github.com/hit-man-shu
              </Link>
              .
            </p>
          </div>
          <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 rounded-md  border-2 px-14 py-4 duration-300  hover:bg-indigo-400 hover:text-white">
              <h3 className="text-lg font-bold tracking-tight">
                Wide Range of Products
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                From chic dresses to dapper suits, we offer a diverse collection
                of apparel and accessories to suit every style.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-md  border-2 px-14 py-4 duration-300 hover:bg-indigo-400 hover:text-white">
              <h3 className="text-lg font-bold tracking-tight">
                Easy Navigation
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                Our intuitive platform makes it simple to find the perfect
                items, with seamless search and filter options.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-md  border-2 px-14 py-4 duration-300  hover:bg-indigo-400 hover:text-white">
              <h3 className="text-lg font-bold tracking-tight">
                Secure Payments
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                Shop with confidence thanks to our secure payment gateway,
                ensuring your transactions are safe and protected.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-md border-2 px-14 py-4 duration-300  hover:bg-indigo-400 hover:text-white">
              <h3 className="text-lg font-bold tracking-tight">
                Excellent Customer Service
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                Our dedicated support team is here to assist you, providing
                friendly and helpful service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
