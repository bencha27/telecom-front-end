// @ts-nocheck

import React, {useState} from "react";
import { Container, Button, Col, Form, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Context/useAuth";

export default function LoginPage(props) {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });
  
  function handleLinkClick(e) {
    navigate("/signup");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call loginUser function and get the user object or userId
      const user = await loginUser(formState.username, formState.password);
      const userId = user.userId; // Assuming `userId` is the property you want to use
  
      // Redirect to the AccountPage with userId
      navigate(`/account/${userId}`);
  
      setFormState({
        username: '',
        password: '',
      });
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
    }
  }


  return (
    <Container className="py-5">
      <Row className="justify-content-center py-5">
        <Col xs="10" sm="6" md="5" xl="4">
          <Card>
            <Card.Header className="fs-3">Log in</Card.Header>
            <Card.Link className="px-3 pt-3 custom-link" onClick={handleLinkClick} style={{ "cursor": "pointer" }}>New customer? Create an account</Card.Link>
            <Form className="p-3" onChange={handleInputChange} onSubmit={handleFormSubmit}>
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