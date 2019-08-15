import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// create store
import { createStore, applyMiddleware, compose } from "redux";
// import Provider
import { Provider } from "react-redux";
// inport reducer
import { reducer } from "./reducers";
// import thunk
import thunk from "redux-thunk";
// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
