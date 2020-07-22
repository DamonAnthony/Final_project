import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <h className="login-heading">Login</h>
      <form action="" method="POST">
        <div className="form-item">
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>
        <input type="onSubmit" />
      </form>
    </div>
  );
};

export default Login;
