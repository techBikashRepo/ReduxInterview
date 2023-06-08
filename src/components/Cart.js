import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const loginDetail = useSelector((state) => state.lg.loginDetail);
  const dispatch = useDispatch();

  const deleteHandler = (index, price) => {
    dispatch({ type: actions.DELETE, payLoad: { index, price } });
  };
  return (
    <div className="customDiv">
      <h3>Cart Component - User: {loginDetail}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index} onClick={() => deleteHandler(index, product.price)}>
              {product.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
