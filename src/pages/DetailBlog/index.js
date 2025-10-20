import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { useNavigate } from "react-router-dom";
import { Gap, Link } from "../../components";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero
        error, ea sapiente deleniti debitis laudantium iste eaque reiciendis
        rerum sint in hic modi. Debitis quam molestias cupiditate earum
        saepe?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        ut repellat voluptates earum tempora modi facere cupiditate omnis non
        nihil nemo ratione maxime dolor quasi, ipsam quaerat? Culpa, assumenda
        dolorum!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dolores ut repellat voluptates earum tempora modi facere cupiditate
        omnis non nihil nemo ratione maxime dolor quasi, ipsam quaerat? Culpa,
        assumenda dolorum!
      </p>
      <Gap height={20} />
      <Link title="Kembali Ke Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
