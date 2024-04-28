import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice.js";
import wishReducer from "./wishItemSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    modal: modalReducer,
  },
});
