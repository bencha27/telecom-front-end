// @ts-nocheck

import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PhonePlanCard(props) {
  let phonePlan = props.phonePlan;
  
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    navigate('/signup');
  }

  return (
    <Card className="border border-0" style={{ width: '18rem' }}>
      <Card.Body className="text-center">
        <Card.Title className="fs-2 py-3">{phonePlan.planName}</Card.Title>
        <Card.Subtitle className="fs-4 py-1">${phonePlan.price}/month</Card.Subtitle>
        <Card.Text className="fs-5">Device limit: {phonePlan.deviceLimit}</Card.Text>
        <Card.Text>{phonePlan.otherPlanDetails}</Card.Text>
        <Button onClick={handleClick}>Sign up!</Button>
      </Card.Body>
    </Card>
  );
}