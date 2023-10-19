import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>web Social.</h1>
          {/* <p>
            welcome to My Social media website, Upload Your Picture & videos,
            Comments{" "}
          </p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
            nesciunt laudantium excepturi saepe ex
          </p>
          <span>You have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
