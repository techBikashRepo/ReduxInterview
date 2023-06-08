import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import loginReducer from "./store/loginReducer";
import productReducer from "./store/productReducer.js";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootReducer = combineReducers({
  pr: productReducer,
  lg: loginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
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
