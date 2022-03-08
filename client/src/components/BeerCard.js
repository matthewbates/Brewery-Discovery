import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import BeerCardList from "./BeerCardList";

function BeerCard({ name, abv, type }) {
  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BeerCard;
