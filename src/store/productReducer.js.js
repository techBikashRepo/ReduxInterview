import * as actions from "./actions";
const initialData = {
  products: [
    { pName: "Apple", price: 10 },
    { pName: "Banana", price: 20 },
    { pName: "Orange", price: 30 },
    { pName: "Grapes", price: 40 },
  ],
  cart: [],
  total: 0,
};
const productReducer = (state = initialData, action) => {
  if (action.type === actions.PURCHASE) {
    return {
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price),
    };
  }
  if (action.type === actions.DELETE) {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index != action.payLoad.index),
      total: state.total - parseInt(action.payLoad.price),
    };
  }

  return state;
};

export default productReducer;
