// @ts-nocheck

import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";

import { phonePlanGetApi } from "../Services/HomeService";
import PhonePlanCardList from "../Components/PhonePlanCardList";
import AccountPhonePlanCardList from "../Components/AccountComponents/AccountPhonePlanCardList";

export default function AccountPhonePlansPage() {
  const [phonePlans, setPhonePlans] = useState([]);

  useEffect(() => {
    const getPhonePlans = async () => {
      const result = await phonePlanGetApi();
      setPhonePlans(result.data);
    };
    getPhonePlans();
  }, []);

  return (
    <Container className="py-4">
      <Row className="py-2">
        <Col></Col>
        
        <Col className="col-md-8">
          <h1>Phone Plans</h1>
        </Col>
        
        <Col></Col>
      </Row>
      
      <Row className="py-5 justify-content-center">
          <AccountPhonePlanCardList phonePlans={phonePlans} />
      </Row>
    </Container>
  );
}