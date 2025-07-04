import React from "react";
import "./register.scss";
import { LoginBg, RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <div className="button-wrapper">
          <Button title="Register" />
        </div>
        <Gap height={130} />
        <Link title="Login ?" />
      </div>
    </div>
  );
};

export default Register;
