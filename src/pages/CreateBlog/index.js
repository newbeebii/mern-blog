import React from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createBlog.scss";

const CreateBlog = () => {
  return (
    <div className="blog-post">
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
