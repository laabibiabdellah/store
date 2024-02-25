import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    qty: 0,
  },
  {
    prods: [],
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    buyProd: (state, action) => {
      state[0].qty++, state[1].prods.push(action.payload);
    },
  },
});
export const { buyProd } = productSlice.actions;
export default productSlice.reducer;
