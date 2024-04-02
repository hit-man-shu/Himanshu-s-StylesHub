import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container mx-auto flex flex-col items-center justify-between bg-white px-6 py-8 lg:flex-row">
        <Logo />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6">
          <Link
            to="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Overview
          </Link>

          <Link
            to="/products"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            About
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 lg:mt-0">
          © Copyright 2023 Himanshu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
