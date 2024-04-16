// @ts-nocheck

import { Row, Card, ListGroup } from 'react-bootstrap';

export default function MyPhonePlanCard(props) {
  let myPhonePlan = props.myPhonePlan;

  return (
        <Card className="border border-0">
          <Card.Body className="pt-1 pb-4">
            <Card.Title className="fs-3 pt-3 pb-2">{myPhonePlan.PlanName}</Card.Title>
            <Card.Subtitle className="fs-5 pb-3">Devices:</Card.Subtitle>
            <ListGroup className="px-3">
              {myPhonePlan.Devices.map((device) => (
                <ListGroup.Item>{device.DeviceName}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
  )
}