import "../style/profile.css";
import Logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";
import {Form, Row, Col, Container, Image,  Button} from "react-bootstrap";


const Profile=   () => {
    return (
    <Container>
        <Row className="container-row">
            <Col md={3}>
                <div class="profile-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                    <div class="file btn btn-lg btn-danger">
                        Change Photo
                        <input type="file" name="file"/>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div class="profile-head">
                            <h5>
                                Angga Aprian Armanda
                            </h5>
                            <h6>
                                Web Developer and Designer
                            </h6>
                </div>
            </Col>
        </Row>
        <Row className="about-content">
            <table>
                <tbody className="tbody">
                    <tr className="table-row"> 
                        <td>Name :</td>
                        <td><Form.Control type="text" placeholder="Name" readOnly /></td>
                    </tr>
                    <tr className="table-row">
                        <td>Username :</td>
                        <td><Form.Control type="text" placeholder="Username" readOnly /></td>
                    </tr>
                    <tr className="table-row">
                        <td>Password :</td>
                        <td><Form.Control type="password" placeholder="Password" readOnly /></td>
                    </tr>
                    <tr className="table-row">
                        <td>Email :</td>
                        <td><Form.Control type="text" placeholder="Email" readOnly /></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Col md={4}>
            <Button className="profile-edit-btn" variant="danger">
                <Link to={`/users/add`}>
                    Edit Profile
                </Link>
            </Button>
            </Col>
        </Row>
    </Container>
    )
}

export default Profile;