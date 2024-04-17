import { Container, Row } from "react-bootstrap"
import PhonePlanCardList from "../Components/HomeComponents/PhonePlanCardList";

export default function HomePage() {
  return (
    <Container className="py-5">
      <Row className="py-3">
        <h1 className="text-center fst-italic">What you see is what you get!</h1>
      </Row>
      <Row className="py-5 justify-content-center">
        <PhonePlanCardList />
      </Row>
    </Container>
  );
}