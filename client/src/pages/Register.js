import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [create, setCreate] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    lastName: "",
    washCount: 0,
    
  });
  const { username, name, lastName, washCount} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { username, lastName, name, washCount };
    try {
      const res = await axios.post(
        "http://localhost:5000/customer/create/",
        data
      );

      setCreate(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="register-h1">CREATE A CUSTOMER</h1>
        <form onSubmit={onSubmit} className="form-reg">
          <input
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            className="register-input"
            placeholder="Username"
            required
          />
          <input
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            className="register-input"
            placeholder="Name"
            required
          />
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            className="register-input"
            placeholder="Last Name"
            required
          />
          <input
            id="count"
            name="count"
            value={washCount}
            onChange={onChange}
            className="register-input"
            placeholder="count"
          />
          <span className="register-span">
            By creating an customer, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button type="submit" className="register-button">
            CREATE
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default Register;
