// @ts-nocheck

import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AccountPhonePlanCard(props) {
  let phonePlan = props.phonePlan;

  const navigate = useNavigate();

  function handleClick(e) {
    console.log(`${phonePlan.planName} (${phonePlan.id}) added to account`);
    navigate('/account');
  }

  return (
    <Card className="border border-0" style={{ width: '18rem' }}>
      <Card.Body className="text-center">
        <Card.Title className="fs-2 py-3">{phonePlan.planName}</Card.Title>
        <Card.Subtitle className="fs-4 py-1">${phonePlan.price}/month</Card.Subtitle>
        <Card.Text className="fs-5">Device limit: {phonePlan.deviceLimit}</Card.Text>
        <Card.Text>{phonePlan.otherPlanDetails}</Card.Text>
        <Button onClick={handleClick}>Add plan to account</Button>
      </Card.Body>
    </Card>
  );
}