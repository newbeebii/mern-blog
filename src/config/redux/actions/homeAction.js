import axios from "axios";

export const setDataBlog = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
      .then((result) => {
        console.log("API result:", result.data); // <= LIHAT INI DI CONSOLE
        const responseAPI = result.data;
        console.log(responseAPI);

        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });

        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: responseAPI.current_page,
            totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
