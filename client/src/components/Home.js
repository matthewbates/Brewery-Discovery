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
  }, []);

  return (
    <>
      <Container fluid className="container-home-fluid">
        <div className="home-jumbotron d-flex flex-column justify-content-center">
          <div className="h-50 d-flex flex-column justify-content-center">
            <Col>
              <h1 className="p-2 text-center">Hello {currentUser.username}</h1>
            </Col>
            <Col>
              <h3 className="p-2 text-center">
                Welcome To The Brewery Discovery Project
              </h3>
            </Col>
          </div>
        </div>

        <Container>
          <Row>
            <BreweryCardList breweries={breweries} />
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
