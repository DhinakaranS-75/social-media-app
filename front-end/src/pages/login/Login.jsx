import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Users.</h1>
          {/* <p>
            welcome to My Social media website, Upload Your Picture & videos,
            Comments{" "}
          </p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
            nesciunt laudantium excepturi saepe ex
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
