import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

// get limited Products
export const getLimitedProducts = async ({ signal, limit }) => {
  try {
    const resp = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit || 12}`,
      signal,
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

// getAll Products
export const getAllProducts = async ({ signal }) => {
  try {
    const resp = await axios.get("https://fakestoreapi.com/products", signal);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

// getSingle Product
export const getSingleProduct = async ({ id, signal }) => {
  try {
    const resp = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
      signal,
    );
    return resp.data;
  } catch (error) {}
};

// getCategories
export const getCategories = async ({ signal }) => {
  try {
    const resp = await axios.get(
      "https://fakestoreapi.com/products/categories",
      signal,
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

// getCategorie Products
export const getCategorieProduct = async ({ name, signal }) => {
  try {
    const resp = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`,
      signal,
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const saveWishItemToLocalStorage = (wishItems) => {
  localStorage.setItem("wishItems", JSON.stringify(wishItems));
};

// send Order Data
export const sendOrderData = async ({ postData, token }) => {
  try {
    const resp = await axios.post(
      "https://himanshu-s-styleshub.onrender.com/order",
      postData,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
