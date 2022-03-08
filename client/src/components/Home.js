import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container, Card } from "react-bootstrap";
import Search from "./Search";

function Home({ currentUser }) {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState("");

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
            <h2 className="p-2 text-center">
              {currentUser ? `Hello, ${currentUser.username}!` : ""}
            </h2>
            <Col>
              <h3 className="p-2 text-center">
                Welcome To The Brewery Discovery Project
              </h3>
            </Col>
          </div>
        </div>

        <Container>
          <Row>
            <Search search={search} setter={setSearch} />
            <BreweryCardList
              breweries={breweries}
              search={search}
              setter={setSearch}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
