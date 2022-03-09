import React from "react";
import { Card, Button } from "react-bootstrap";
import Brewery from "./Brewery";

function BeerCard({ name, abv, type }) {
  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{abv}%</Card.Text>
          <Card.Text>Type: {type}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default BeerCard;
