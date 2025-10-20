import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import { Button, Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic praesentium quas dolor omnis dicta? Soluta autem distinctio
          assumenda. Officia asperiores ab suscipit. Tempora ad voluptates
          voluptatum sit facere consectetur?
        </p>
        <Gap height={20} />
        <Button title="Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
