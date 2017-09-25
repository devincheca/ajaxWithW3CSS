import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware'
import axios from 'axios';
import reducers from "./reducers/reducers.js";
axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response) =>
{
  dispatch({type: "received", payload: response.data})
})
  .catch((err) =>
{
  dispatch({type: "error", payload: err})
})
store.dispatch({type: "changeAge", payload: 119})
module.exports = createStore(reducers, middleware);