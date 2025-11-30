const { configureStore } = require("@reduxjs/toolkit");

const initialState = { dataBlogs: [], name: "Jhon" };

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Alfred",
    };
  }
  return state;
};

const store = configureStore({
  reducer,
});

module.exports = store;
