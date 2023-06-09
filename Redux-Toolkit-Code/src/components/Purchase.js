import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase } from "../store/productSlice";

const Purchase = () => {
  const products = useSelector((state) => state.pr.products);
  const loginDetail = useSelector((state) => state.lr.loginDetail);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let obj = { pName, price };
    dispatch(purchase(obj));
  };
  return (
    <div className="customDiv">
      <h3>Purchase Component - User: {loginDetail}</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((prod, index) => {
          return (
            <option key={index} value={prod.price}>
              {prod.pName} - $ {prod.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Purchase;
