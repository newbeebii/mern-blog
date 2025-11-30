const initialState = { name: "Jhon" };
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Alfred",
    };
  }
  return state;
};

export default globalReducer;
