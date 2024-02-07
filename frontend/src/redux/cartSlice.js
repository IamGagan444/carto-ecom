import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTotalDiscount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              cartQuantity: +item.cartQuantity + 1,
            };
          }
          return item;
        });

        // Update the state with a new array
        state.cartItems = updatedCartItems;

        // Update local storage with the new array
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        toast.success(`Increased cart quantity`);
      } else {
        // If the product is not in the cart, add it
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);

        // Update local storage with the new array
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        toast.success("Added to cart");
      }
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      // console.log(action.payload.id,itemIndex)
      if (state.cartItems[itemIndex]?.cartQuantity > 1) {
        const updatedCartItem = {
          ...state.cartItems[itemIndex],
          cartQuantity: +state.cartItems[itemIndex]?.cartQuantity - 1,
        };
        const updatedCartItems = [
          ...state.cartItems.slice(0, itemIndex),
          updatedCartItem,
          ...state.cartItems.slice(itemIndex + 1),
        ];
        state.cartItems = updatedCartItems;
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        toast.success(`decreased cart quantity`);
      } else if (state.cartItems[itemIndex]?.cartQuantity == 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(nextCartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals: (state) => {
      const { total, quantity, discount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity, discountPercentage } = cartItem;
          const itemTotal = price * cartQuantity;
          const itemDiscount = price * discountPercentage;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          cartTotal.discount += itemDiscount;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
          discount: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      state.cartTotalDiscount = discount;
    },
  },
});

export const { addToCart, removeFromCart, getTotals, clearCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
