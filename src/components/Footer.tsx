import { Container, Col, Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar className='py-3' style={{backgroundColor: 'lightgray'}}>
      <Container>
        <Col></Col>

        <Col md="2">
          <h5>©2024 Clear Mobile</h5>
        </Col>

        <Col>
        </Col>

        <Col md="4">
          <Nav className="me-auto justify-content-end">
            <Nav.Link 
              href="https://github.com/bencha27/telecom-front-end" 
              className="px-3 custom-nav-link">
              GitHub (Front-End)
            </Nav.Link>
            <Nav.Link 
              href="https://github.com/Bram-Gr/telecom" 
              className="px-3 custom-nav-link">
              GitHub (Back-End)
            </Nav.Link>
          </Nav>
        </Col>

        <Col></Col>
      </Container>
    </Navbar>
  );
}