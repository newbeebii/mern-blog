import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({
  home: homeReducer,
  global: globalReducer,
});

export default reducer;
