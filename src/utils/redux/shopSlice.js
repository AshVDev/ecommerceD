import { createSlice } from "@reduxjs/toolkit";
import all_product from "../../components/assets/all_product";

const shopSlice = createSlice({
  name: "shop",
  initialState: all_product,
});

export default shopSlice.reducer;
