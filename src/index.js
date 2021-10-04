import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import gifMiddleware from "./store/gif-middleware";
import logger from "./store/logger-middleware";
import "./index.css";
import App from "./App";

// const REDUX_DEVTOOLS =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [logger, thunk, gifMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
