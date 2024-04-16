import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logo from "../clear-mobile-logo.png";

export default function Header() {
  const navigate = useNavigate();

  function handleClickBrand(event: React.MouseEvent<HTMLAnchorElement>) {
    navigate("/");
  }

  function handleClickAccount(event: React.MouseEvent<HTMLAnchorElement>) {
    navigate("/login");
  }

  return (
    <Navbar expand="lg" sticky='top' className='py-4' style={{backgroundColor: 'lightgray'}}>
      <Container>
        <Col></Col>

        <Col md="3">
          <Navbar.Brand onClick={handleClickBrand} style={{ "cursor": "pointer"}}>
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
            <Nav.Link onClick={handleClickAccount} className="custom-nav-link" style={{fontSize: "1.3rem", fontWeight: "bold"}}>Account</Nav.Link>
          </Nav>
        </Col>

        <Col></Col>
      </Container>
    </Navbar>
  );
}