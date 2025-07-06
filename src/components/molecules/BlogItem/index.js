import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
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
      </div>
    </div>
  );
};

export default BlogItem;
