import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <h3 className="p-2">Welcome To The Brewery Discovery Project</h3>
      <Container>
        <Row>
          <Col xs={12} lg={6}>1 of 2</Col>
          <Col xs={12} lg={6}>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
