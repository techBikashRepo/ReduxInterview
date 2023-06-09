import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const loginDetail = useSelector((state) => state.lr.loginDetail);
  return (
    <div className="customDiv">
      <h3>Total Component - User: {loginDetail}</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};

export default Total;
