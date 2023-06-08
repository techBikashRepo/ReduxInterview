import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../store/actions";

const Login = () => {
  const users = useSelector((state) => state.lg.users);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    dispatch(validateUser(e.target.value));
  };
  return (
    <div className="customDiv">
      <h3>Login Component</h3>
      <hr />
      <select onChange={(e) => loginHandler(e)}>
        {users.map((usr, index) => {
          return <option key={index}>{usr}</option>;
        })}
      </select>
    </div>
  );
};

export default Login;
