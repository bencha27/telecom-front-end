// @ts-nocheck

import { Container, Row, Col } from "react-bootstrap"

import PhonePlanCardList from "../Components/HomeComponents/PhonePlanCardList";
import { phonePlanGetApi } from "../Services/HomeService";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [phonePlans, setPhonePlans] = useState([]);

  useEffect(() => {
    const getPhonePlans = async () => {
      const result = await phonePlanGetApi();
      setPhonePlans(result.data);
    };
    getPhonePlans();
  }, []);

  return (
    <Container className="py-5">
      <Row className="py-3">
        <h1 className="text-center fst-italic">What you see is what you get!</h1>
      </Row>
      
      <Row className="py-5 justify-content-center">
          <PhonePlanCardList phonePlans={phonePlans} />
      </Row>
    </Container>
  );
}