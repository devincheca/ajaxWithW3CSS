import { combineReducers } from 'redux';
import searchBar from "./searchReducer.js";
import item from "./itemReducer.js";
module.exports = reducers({
  searchBar,
  item
});