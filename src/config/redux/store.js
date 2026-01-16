import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

const store = configureStore({
  reducer: reducer,
  // thunk sudah otomatis, TIDAK perlu applyMiddleware
});

export default store;
