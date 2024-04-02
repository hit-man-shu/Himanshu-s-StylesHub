import { createSlice } from "@reduxjs/toolkit";

const storedCartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: storedCartItems },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItemIndex > -1) {
        const existingItem = state.cartItems[existingItemIndex];
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      const existingItem = state.cartItems[existingItemIndex];

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.cartItems.splice(existingItemIndex, 1);
      }
    },

    completelyRemove: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.cartItems.splice(existingItemIndex, 1);
    },

    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, emptyCart, completelyRemove } =
  cartSlice.actions;
