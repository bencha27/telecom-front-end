import { Container, Button, Col, Form, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    navigate("/login");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    console.log(`username: ${username}, email: ${email}, password: ${password}`);

    navigate("/account");
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center py-5">
        <Col xs="10" sm="6" md="5" xl="4">
          <Card>
            <Card.Header className="fs-3">Create an account</Card.Header>
            <Card.Link className="px-3 pt-3 custom-link" onClick={handleClick} style={{ "cursor": "pointer" }}>Existing customer? Log in</Card.Link>
            <Form className="p-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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