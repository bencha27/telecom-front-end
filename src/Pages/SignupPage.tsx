// @ts-nocheck

import React, { useState } from "react";
import { Container, Button, Col, Form, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Context/useAuth";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signupUser } = useAuth();

  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: ""
  });

  function handleClick(e) {
    navigate("/login");
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // console.log(
    //   `email: ${formState.email}
    //   username: ${formState.username} 
    //   password: ${formState.password}`
    // );

    signupUser(formState.username, formState.email, formState.password);

    setFormState({
      email: "",
      username: "",
      password: "",
    });
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center py-5">
        <Col xs="10" sm="6" md="5" xl="4">
          <Card>
            <Card.Header className="fs-3">Create an account</Card.Header>
            <Card.Link className="px-3 pt-3 custom-link" onClick={handleClick} style={{ "cursor": "pointer" }}>Existing customer? Log in</Card.Link>
            <Form className="p-3" onChange={handleInputChange} onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: 600}}>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label style={{fontWeight: 600}}>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" />
              </Form.Group>  

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight: 600}}>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Create account
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}