import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from "./store/loginSlice";
import productReducer from "./store/productSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    pr: productReducer,
    lr: loginReducer,
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
