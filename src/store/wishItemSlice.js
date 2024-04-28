import { createSlice } from "@reduxjs/toolkit";

const storedWishItems =
  localStorage.getItem("wishItems") !== null
    ? JSON.parse(localStorage.getItem("wishItems"))
    : [];

console.log(storedWishItems);

const wishSlice = createSlice({
  name: "wishItems",
  initialState: { wishItems: storedWishItems },
  reducers: {
    addWishItem: (state, action) => {
      const existingItem = state.wishItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItem === -1) {
        state.wishItems.push(action.payload);
      }
    },
    removeWishItem: (state, action) => {
      const existingItem = state.wishItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItem > -1) {
        state.wishItems.splice(existingItem, 1);
      }
    },
  },
});

export const { addWishItem, removeWishItem } = wishSlice.actions;
export default wishSlice.reducer;
