import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";
const reducer = combineReducers({
  home: homeReducer,
  global: globalReducer,
  createBlogReducer,
});

export default reducer;
