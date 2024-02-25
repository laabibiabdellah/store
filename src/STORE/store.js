import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
