import "../style/processor.css";
import Logo from "../assets/logo.jpg"
import {Form, Row, Col, Container, Image,  Button} from "react-bootstrap";

const Processor = () => {
    return (
        <Container>
            <Row>
                <h1> <Image className="logo-image" src={Logo} alt="" /> Devoteam Document AI</h1>
                <Col className="parser-setup">
                    <h3>Parser Set Up</h3>
                </Col>
                <Col>
                    <div className="model-setup">
                        <h6>Choose Model</h6>
                        <div className="model-radio">
                            <Form.Check
                            type="radio"
                            label="Model 1"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Model 2"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="Model 2"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                        </div>
                            <Row>
                                <Col>
                                    <p>Model Name</p>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                </Col>
                                <Col xs="8">
                                    <p>Model Name</p>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                </Col>
                            </Row>
                            <Col>
                            <p>Model Name</p>
                                <Form.Control className="form-size1"
                                type="text"
                                placeholder=""
                                aria-label="Disabled input example"
                                readOnly
                                />
                            </Col>
                            <Row>
                                <Col>
                                    <p>Model Name</p>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                </Col>
                                <Col>
                                    <p>Model Name</p>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <p>Model Name</p>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col className="button-model">
                                    <Button className="button-model-save"type="submit">Save Model</Button>
                                    <Button className="button-test-model"type="submit">Test Model</Button>
                                </Col>
                                    
                            </Row>
                            <Row>
                                <Col>
                                <p>Result</p>
                                <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                                    <div className="overflow-scroll">
                                    <Form.Control className="form-size2"
                                        type="text"
                                        placeholder=""
                                        aria-label="Disabled input example"
                                        readOnly
                                        />
                                    </div>
                                </Form.Group>
                                </Col>
                            </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Processor