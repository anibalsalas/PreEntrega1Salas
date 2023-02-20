import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbars = () => {
  return (

    <Navbar sticky="top" bg="light" expand="lg" >

      <Container>
        <Row className="filaNav">
          <Col-2 >
            <Navbar.Brand href="#home"></Navbar.Brand>
          </Col-2>
          <Col-8>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="centroNav" id="basic-navbar-nav">
              <Nav className="me-auto centroNav">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Ofertas</Nav.Link>
                <Nav.Link href="#link">Ayuda</Nav.Link>


              </Nav>

            </Navbar.Collapse>
          </Col-8>
          <Col-2 class="nav-left">
            <Nav.Link href="#link">Crea tu cuenta</Nav.Link>
            <Nav.Link href="#link">Ingresa</Nav.Link>
            <Nav.Link href="#link">Mis compras</Nav.Link>
            <CartWidget />
          </Col-2>
        </Row>


      </Container>
    </Navbar>

  )
}

export default Navbars