import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";

const appStore = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default appStore;
