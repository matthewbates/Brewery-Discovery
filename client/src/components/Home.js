import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container, Card } from "react-bootstrap";

function Home() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch("/breweries")
      .then((r) => r.json())
      .then((breweryList) => {
        setBreweries(breweryList);
      });
  });

  return (
    <>
      <h3 className="p-2">Welcome To The Brewery Discovery Project</h3>
      <Container>
        <Row>
          <BreweryCardList breweries={visibleBreweries}/>
        </Row>
      </Container>
    </>
  );
}

export default Home;
