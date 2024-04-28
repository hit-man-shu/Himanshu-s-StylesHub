import React from "react";
import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import NavModal from "../../UI/NavModal";
import Wishlist from "../wishlist/Wishlist";
import { wishOpen } from "../../store/modalSlice";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const token = useRouteLoaderData("root");

  const isOpenWishlist = useSelector((state) => state.modal.isWishOpen);
  const dispatch = useDispatch();

  const openWishModal = () => {
    dispatch(wishOpen());
  };

  return (
    <>
      <NavModal open={isOpenWishlist}>
        <Wishlist />
      </NavModal>
      <header className="body-font fixed top-0 z-10 w-full bg-white text-gray-600 shadow-lg">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <span className="title-font mb-4 flex cursor-pointer items-center font-medium text-gray-900 md:mb-0">
            <Logo />
          </span>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 font-bold text-indigo-700 hover:text-gray-900"
                  : "mr-5 hover:text-gray-900"
              }
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 font-bold text-indigo-700 hover:text-gray-900"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 font-bold text-indigo-700 hover:text-gray-900"
                  : "mr-5 hover:text-gray-900"
              }
            >
              About
            </NavLink>
          </nav>

          <div className="flex items-center gap-10">
            <Link
              to={!token ? "/login" : "/cart"}
              className="mt-4 inline-flex items-center rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-700 focus:outline-none md:mt-0"
            >
              Cart{" "}
              <span className="mx-2 rounded-full bg-white px-2 font-bold text-indigo-600">
                {cartItems.length}
              </span>
              <FaArrowRight className="ml-1 h-4 w-4" />
            </Link>

            <li
              onClick={openWishModal}
              // to={!token ? "/login" : "/cart"}
              className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-700 focus:outline-none md:mt-0"
            >
              <p> Wishlist</p>
              <span className="mx-2  px-2 font-bold ">
                <FaRegHeart />
              </span>
            </li>

            {token ? (
              <div className="flex gap-4">
                <Form method="post" action="/logout">
                  <button className="mt-4 inline-flex items-center rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-700 focus:outline-none md:mt-0">
                    Logout
                  </button>
                </Form>
              </div>
            ) : (
              <span className="mt-4 inline-flex items-center  text-base  md:mt-0">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "mr-5 font-bold text-indigo-700 hover:text-gray-900"
                      : "mr-5 hover:text-gray-900"
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "mr-5 font-bold text-indigo-700 hover:text-gray-900"
                      : "mr-5 hover:text-gray-900"
                  }
                  end
                >
                  Signup
                </NavLink>
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
