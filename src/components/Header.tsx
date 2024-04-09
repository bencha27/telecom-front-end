import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import logo from "../clear-mobile-logo.png";



export default function Header() {
  return (
    <Navbar expand="lg" sticky='top' className='py-3' style={{backgroundColor: 'lightgray'}}>
      <Container>
        <Col></Col>

        <Col md="3">
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <span style={{color: "steelblue", fontWeight: "bold", fontSize: "2rem", textAlign: "center"}}>clear mobile</span>
          </Navbar.Brand>
        </Col>

        <Col></Col>

        <Col md="3">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="/login" className="custom-nav-link" style={{fontSize: "1.3rem", fontWeight: "bold"}}>Account</Nav.Link>
          </Nav>
        </Col>

        <Col></Col>
      </Container>
    </Navbar>
  );
}