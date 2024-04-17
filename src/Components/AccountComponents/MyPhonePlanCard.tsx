// @ts-nocheck

import { Row, Card, ListGroup } from 'react-bootstrap';
import { useAuth } from '../../Context/useAuth';
import { useState } from 'react';

export default function MyPhonePlanCard(props) {
  let myPhonePlan = props.myPhonePlan;
  const { user } = useAuth();
  const userId = user.userId;
  const [myDevices, setMyPhonePlans] = useState([]);

  return (
        <Card className="border border-0">
          <Card.Body className="pt-1 pb-4">
            <Card.Title className="fs-3 pt-3 pb-2">{myPhonePlan.planName}</Card.Title>
            <Card.Text className="fs-5">Device limit: {myPhonePlan.deviceLimit}</Card.Text>
            <Card.Subtitle className="fs-5 pb-3">Devices:</Card.Subtitle>
            <ListGroup className="px-3">
           
            </ListGroup>
          </Card.Body>
        </Card>
  )
}