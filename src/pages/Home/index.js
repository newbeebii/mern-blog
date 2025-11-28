import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router";
import axios from "axios";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then((result) => {
        console.log(result.data);
        const responseAPI = result.data;

        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => navigate("/create-blog")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
