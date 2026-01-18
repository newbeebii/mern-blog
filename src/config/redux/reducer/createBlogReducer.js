const initialState = {
  form: { title: "", body: "", image: "" },
  imgPreview: null,
};

const createBlogReducer = (state = initialState, action) => {
  if (action.type === "SET_FORM_DATA") {
    return {
      ...state,
      form: {
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }
  if (action.type === "SET_IMG_PREVIEW") {
    return {
      ...state,
      imgPreview: action.payload,
    };
  }

  if (action.type === "RESET_FORM") {
    return {
      ...state,
      form: { title: "", body: "" },
      imgPreview: null,
    };
  }
  return state;
};

export default createBlogReducer;
