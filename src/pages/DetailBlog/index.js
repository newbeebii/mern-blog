import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
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
    </div>
  );
};

export default DetailBlog;
