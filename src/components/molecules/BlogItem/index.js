import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import { Button, Gap } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={props.image} alt="post" />
      <div className="content-detail">
        <p className="title">{props.title}</p>
        <p className="author">
          {props.name} - {props.date}
        </p>
        <p className="body">{props.body}</p>
        <Gap height={20} />
        <Button title="Detail" onClick={() => navigate("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
