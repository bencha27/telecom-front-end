// @ts-nocheck

import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

import MyPhonePlanCard from "../components/dashboardComponents/MyPhonePlanCard";

let myPhonePlans = [
  {
    "PhonePlanId": "1",
    "PlanName": "Basic Plan",
    "Price": 25,
    "Devices": [
      {
        "DeviceID": "1",
        "PhoneNumber": "111-111-1111",
        "DeviceName": "John's iPhone 12",
      },
    ]
  },
  {
    "PhonePlanId": "2",
    "PlanName": "Unlimited Everything",
    "Price": 75,
    "Devices": [
      {
        "DeviceID": "2",
        "PhoneNumber": "222-222-2222",
        "DeviceName": "Jane's Samsung Galaxy S21",
      },
      {
        "DeviceID": "3",
        "PhoneNumber": "333-333-3333",
        "DeviceName": "Joe's Google Pixel 5",
      }
    ]
  },
];

export default function Dashboard() {
  let total = myPhonePlans.reduce((sum, myPhonePlan) => sum + myPhonePlan.Price, 0);

  return (
    <Container className="py-4">
      <Row className="py-2">
        <Col></Col>
        
        <Col className="col-md-8">
          <h1>My Account</h1>
        </Col>
        
        <Col></Col>
      </Row>

      <Row className="py-2">
        <Col></Col>

        <Col className="col-md-5">
          <h2 className="py-2">My Plans</h2>
          <ul className="list-group">
            {myPhonePlans.map((myPhonePlan) => (
              <li className="list-group-item mb-4 border" key={myPhonePlan.PhonePlanId}>
                <MyPhonePlanCard myPhonePlan={myPhonePlan} />
              </li>
            ))}
          </ul>
        </Col>

        <Col></Col>

        <Col className="col-md-4">
          <h2 className="py-2">Billing</h2>
          <Card>
            <Card.Body className="p-4">
              <Card.Title className="fs-4">Total balance</Card.Title>
              <Card.Text className="fs-1 fw-bold">${total}</Card.Text>

              <Card.Subtitle className="fs-5 p-3">Current plans</Card.Subtitle>

              <ListGroup className="px-3">
                {myPhonePlans.map((myPhonePlan) => (
                  <ListGroup.Item>{myPhonePlan.PlanName} – ${myPhonePlan.Price}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
}