import React from "react";
import {  Card,Button } from "react-bootstrap";


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
