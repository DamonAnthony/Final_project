import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import "./Register.css";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      register({
        username,
        email,
        password,
      });
    }
  };
  return (
    <div>
      <div className="register-container">
        <h1 className="register-heading">Register</h1>
        <form onSubmit={onSubmit}>
          <div className="register-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="register-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="register"
            className="register-btn register-btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
