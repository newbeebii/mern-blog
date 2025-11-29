const { configureStore } = require("@reduxjs/toolkit");

const initialState = { dataBlog: [], name: "Alfred" };

const reducer = (state = initialState, action) => state;

const store = configureStore({
  reducer,
});

module.exports = store;
