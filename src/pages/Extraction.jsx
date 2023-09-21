import "../style/extraction.css"
import Logo from "../assets/logo.jpg"
import {Form, Row, Col, Container, Image,  Button} from "react-bootstrap";

const Extraction = () => {
    return (
        <Container>
            <Row>
                <h1> <Image className="logo-image" src={Logo} alt="" /> Devoteam Document AI</h1>
                <Col className="doc-extractiion">
                    <h3>Document Extraction</h3>
                    <Button variant="danger">Extract All Document</Button>
                </Col>

                <Col className="download">
                    <Button className="button-json" >Download JSON</Button>{' '}
                    <Button className="button-csv" >Download CSV</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default Extraction