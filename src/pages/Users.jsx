import "../style/users.css";
import { Button, Col, Container, form , Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const UserManagement = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8090/users");
      setUser(response.data);
    };
  
    const deleteUser = async (id) => {
      try {
        await axios.delete(`http://localhost:8090/users/${id}`);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <div className="container">
          <Row>
            <Col>
              <h2>User Management</h2>
              <hr />
                <button className="button-add rounded-3">
                  <Link to={`/users/add`}>
                  Add New User
                  </Link>
                </button>
            </Col>
          </Row>
          <div className="search">
            <div className="searching mt-1">
              <Row>
                <Col className="serach-area mb-1">
                  <form  className="d-flex">
                    <input
                      type="search"
                      placeholder="Search User"
                      className="input me-2 rounded-pill"
                      aria-label="Search"
                      />
                    <button className="button-search me-2 rounded-3" >
                      Search
                    </button>
                  </form >
                </Col>
              </Row>
            </div>
          </div>
        <div className="columns mt-3 ml-5 center">
        <div className="column is-half">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>^</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="button-edit">
                      <Link to={`/users/edit/${user.id}`}>
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="button-delete me-2" variant="danger"
                      >
                        Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}

export default UserManagement;