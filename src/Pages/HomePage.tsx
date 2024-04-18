// @ts-nocheck

import { Container, Row, Col } from "react-bootstrap"

import HomePhonePlanCardList from "../Components/HomeComponents/HomePhonePlanCardList";
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
        <h1 className="text-center fst-italic">A Clear Choice</h1>
      </Row>

      <Row className="py-5 justify-content-center">
          <HomePhonePlanCardList phonePlans={phonePlans} />
      </Row>
    </Container>
  );
}