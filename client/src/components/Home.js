import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container, Card } from "react-bootstrap";

function Home({ currentUser }) {
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
      <Container>
        <h3 className="p-2 text-center">Welcome To The Brewery Discovery Project</h3>
        <h1 className="p-2 text-center">Hello {currentUser.username}</h1>
        <Row>
          <BreweryCardList breweries={breweries} />
        </Row>
      </Container>
    </>
  );
}

export default Home;
