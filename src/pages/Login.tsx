import { Button, Col, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xs="10" sm="6" md="5" xl="4" xxl="3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}