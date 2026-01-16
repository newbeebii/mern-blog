import axios from "axios";

export const setDataBlog = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then((result) => {
        console.log("API result:", result.data); // <= LIHAT INI DI CONSOLE
        const responseAPI = result.data;

        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
