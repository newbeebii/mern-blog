import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer/reducer.js";

const store = configureStore({
  reducer,
});

export default store;
