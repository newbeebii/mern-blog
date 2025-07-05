import React from "react";
import { Button, Gap, Input, Link } from "../../components";
import { LoginBg } from "../../assets";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <div className="button-wrapper">
          <Button title="Login" />
        </div>
        <Gap height={130} />
        <Link title="Sign Up ?" />
      </div>
    </div>
  );
};

export default Login;
