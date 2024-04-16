import React from "react";
import { Container, Button, Col, Form, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    navigate("/signup");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    console.log(`username: ${username}, password: ${password}`);

    navigate("/account");
  }


  return (
    <Container className="py-5">
      <Row className="justify-content-center py-5">
        <Col xs="10" sm="6" md="5" xl="4">
          <Card>
            <Card.Header className="fs-3">Log in</Card.Header>
            <Card.Link className="px-3 pt-3 custom-link" onClick={handleClick} style={{ "cursor": "pointer" }}>New customer? Create an account</Card.Link>
            <Form className="p-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label style={{fontWeight: 600}}>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight: 600}}>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}