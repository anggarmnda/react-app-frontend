import { Container, Button, Col, Row, Form} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../style/login.css";
import { useState, useEffect } from "react";
import axios from "axios";



const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState ({
        username: '',
        password: ''
    })
    
    const [errors, setErrors] = useState ({

    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`http://localhost:8090/login`, {
              username,
              password
            });
            navigate("/document");
          } catch (error) {
            console.log(error);
          }
        // const validationErrors = {}
        // if (!formData.username.trim()) {
        //     validationErrors.username= "Username is Required"
        // }
        // if (!formData.password.trim()) {
        //     validationErrors.password= "Password is Required"
        // } 
        // setErrors(validationErrors)
        // if(Object.keys(validationErrors).length === 0) {
        //     alert ("Login Succesfully");
        //     navigate ('/document');
        // }
    };

    
    return (
            <Container className="login-box">
                <div className="login-content mt-5">
                    <h5 className="text-center">LOGIN</h5>
                    <p className="text-center"> Please Enter Your Username and Password!</p>
                    <Col md={8}className="login-form ">   
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="input" controlId="formBasicEmail">
                                <Form.Control 
                                // value={username}
                                type="username" 
                                name='username'
                                onChange={handleChange}
                                placeholder="Username" />
                                {errors.username && <span>{errors.username}</span>}
                            </Form.Group>
                            <Form.Group className="input" controlId="formBasicPassword">
                                <Form.Control
                                // value={password}
                                type="password" 
                                name='password'
                                onChange={handleChange}
                                placeholder="Password" />
                                {errors.password && <span>{errors.password}</span>}
                            </Form.Group>
                            <button  className="button" variant="success" type="submit">
                                Login
                            </button>
                            <div>
                                <h6>Dont Have an Account? <Link to={`/register`}>
                                Sign Up</Link>
                                </h6>
                            </div>
                        </Form>
                    </Col>
                </div>
            </Container>    
    )
}

export default Login