import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/productSlice";

const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const loginDetail = useSelector((state) => state.lr.loginDetail);
  const dispatch = useDispatch();

  const deleteHandler = (index, price) => {
    dispatch(deleteItem({ index, price }));
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
