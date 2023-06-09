import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { pName: "Apple", price: 10 },
    { pName: "Banana", price: 20 },
    { pName: "Orange", price: 30 },
    { pName: "Grapes", price: 40 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.price);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (i, index) => index != action.payload.index
      );
      state.total = state.total - parseInt(action.payload.price);
    },
  },
});

export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;
