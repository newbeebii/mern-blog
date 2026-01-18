import React, { useState } from "react";
import { Button, Gap, Input, TextArea, Upload, Link } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  resetForm,
  setForm,
  setImagePreview,
} from "../../config/redux/actions";

const CreateBlog = () => {
  const [imageFile, setImageFile] = useState(null);

  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [image, setImage] = useState("");
  // const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("title: ", title);
    console.log("body: ", body);
    console.log("image: ", imageFile);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", imageFile);

    axios
      .post("http://localhost:4000/v1/blog/post", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(resetForm());
        setImageFile(null);
        navigate("/");
        console.log("post success: ", res);
      })
      .catch((err) => {
        console.log(("err : ", err));
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // SIMPAN FILE DI LOCAL STATE
    dispatch(setImagePreview(URL.createObjectURL(file))); // Redux hanya preview
  };

  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => navigate("/")}>
        Kembali
      </Link>
      <p className="title">Create New Blog Post</p>
      <Input
        label="Post Tilte"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
