import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/add-edit-user.css";

const EditUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8090/users/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8090/users/${id}`);
    setName(response.data.name);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setEmail(response.data.email);
  };

  return (
    <div className="container mt-5 text-center">
      <div className="container-edit is-half">
        <h3 className="text-center">Edit User Profile</h3>
        <hr />
        <form onSubmit={updateUser}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;