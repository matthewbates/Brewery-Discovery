import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Brewery from "./Brewery";

function BeerCard({ name, abv, type }) {
  const [favorite, setFavorite] = useState(true);

  function toggleFavorite() {
    setFavorite((favorite) => !favorite);
  }
  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{abv}%</Card.Text>
          <Card.Text>Type: {type}</Card.Text>
          {favorite ? (
            <button
              onClick={toggleFavorite}
              className="emoji-button favorite active"
            >
              ★
            </button>
          ) : (
            <button onClick={toggleFavorite} className="emoji-button favorite">
              ☆
            </button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default BeerCard;
