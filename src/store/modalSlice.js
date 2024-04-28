import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    isWishOpen: false,
  },

  reducers: {
    open: (state) => {
      state.isOpen = true;
    },

    close: (state) => {
      state.isOpen = false;
    },

    wishOpen: (state) => {
      state.isWishOpen = true;
    },

    wishClose: (state) => {
      state.isWishOpen = false;
    },
  },
});

export const { open, close, wishClose, wishOpen } = modalSlice.actions;
export default modalSlice.reducer;
