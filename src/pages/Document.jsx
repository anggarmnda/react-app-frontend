import "../style/document.css";
import {Container, Row, Col, Button, Card, Image, Pagination} from "react-bootstrap";
import { useState } from 'react';
import FileList from "../components/FileList";
import FileUpload from "../components/FileUpload";
import "../App"
import Logo from "../assets/logo.jpg";
import SideBar from "../components/SideBar";

const Document = () => {
    const [files, setFiles] = useState([ ])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
    return (
        <Container className="container">
            <Row className="justify-content-center">
            <h1> <Image className="logo-image" src={Logo} alt="" /> Devoteam Document AI</h1>
                <Col className="container-doc text-center">
                <div className="title">Upload File</div>
                <FileUpload files={files} setFiles={setFiles}
                    FileUpload={FileUpload} />
                <FileList files={files} removeFile={removeFile} />
                </Col>
                <Col className="container-result text-center">
                    <p>OCR Result</p>
                    <Card className="card">
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Document