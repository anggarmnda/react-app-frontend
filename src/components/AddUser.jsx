import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Form, Row, Col, Container, Button} from 'react-bootstrap';

const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8090/users", {
        name,
        username,
        password,
        email,
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <div className="container-edit is-half">
        <h3 className="text-center">Create New User</h3>
        <hr />
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">NAME</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">USERNAME</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">PASSWORD</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          {/* <div className="field">
            <label className="label">PASSWORD</label>
            <div className="control">
              <input
                type="text"
                className="Form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div> */}
          <div className="field">
            <label className="label">EMAIL</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button">
              Save 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
