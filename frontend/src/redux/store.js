// import { configureStore } from "@reduxjs/toolkit";
// import { productApi } from "./ProductApi";
// import { myreducer } from "./reducer";

// export const store = configureStore({
//   reducer: {
//     [productApi.reducerPath]: productApi.reducer,
//     [myreducer.name]: myreducer.reducer,
// add cart slice
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productApi.middleware),
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productApi } from "./ProductApi";
import myreducer from "./reducer"; // Assuming myreducer is the default export from reducer.js
import cartReducer from "./cartSlice";
import wishListSlice from "./wishListSlice";

export const store = configureStore({
  reducer: combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    myreducer: myreducer, // Assuming myreducer is the default export from reducer.js
    cartSlice: cartReducer,
    wishListSlice:wishListSlice, // Use the reducer from wishListSlice
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
