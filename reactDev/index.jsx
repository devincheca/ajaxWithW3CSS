import React from "react";
import ReactDOM from "react-dom";
import Init from "./init.jsx";
import { Provider } from 'react-redux';
import store from './store.js';
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Init />
    </Provider>
  </div>,
  document.querySelector("#searchStuff")
);