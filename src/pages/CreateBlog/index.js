import React from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => navigate("/")}>
        Kembali
      </Link>
      <p className="title">Create New Blog Post</p>
      <Input label="Post Tilte" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
