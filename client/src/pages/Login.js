import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-h1">SIGN IN</h1>
        <form className="form-log">
          <input className="login-input" placeholder="username" />
          <input className="login-input" placeholder="password" />

          <button className="login-button">LOGIN</button>
          <a className="login-a" href="link">DON'T REMEMBER YOUR PASSWORD</a>
          <a className="login-a" href="link">CREATE A NEW ACCOUNT </a>
        </form>
      </div>
    </div>
  );
};

export default Login;