import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="register-container">
        <h1 className="register-heading"></h1>
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
    </div>
  );
};

export default Register;
