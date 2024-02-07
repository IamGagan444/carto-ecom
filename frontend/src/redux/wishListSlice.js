import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishListItems: localStorage.getItem("wishListItems")
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtoWishList: (state, action) => {
      const newItem = action.payload;

      // Check if the item is already in the wishlist
      const isItemInWishlist = state.wishListItems.some((item) => item.id === newItem.id);

      if (!isItemInWishlist) {
        // If the item is not in the wishlist, add it
        state.wishListItems = [...state.wishListItems, newItem];

        // Update local storage
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));

        toast.success("Added to wishlist");
      } else {
        // If the item is already in the wishlist, remove it
        state.wishListItems = state.wishListItems.filter((item) => item.id !== newItem.id);

        // Update local storage
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));

        toast.error("Removed from wishlist");
      }
    },
  },
});

export const { addtoWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
