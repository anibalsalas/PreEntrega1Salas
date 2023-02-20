import './Nav.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';


const Nav = () => {
    return (
        <container-fluid >
            <Row className="color_fondo-nav ">
                <Col><Navbar.Brand className="nav-logo" href="#home"></Navbar.Brand></Col>
                <Col xs={5}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Col>
                <Col>3 of 3</Col>
            </Row>
        </container-fluid>
    )
}

export default Nav
