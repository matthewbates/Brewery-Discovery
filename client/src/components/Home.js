import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container } from "react-bootstrap";
import Search from "./Search";
import BeerCardList from "./BeerCardList";

function Home({ currentUser }) {
  const [breweries, setBreweries] = useState([]);
  const [brewerySearch, setBrewerySearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");

  useEffect(() => {
    fetch("/breweries")
      .then((r) => r.json())
      .then((breweryList) => {
        setBreweries(breweryList);
      });
  }, []);

  return (
    <>
      <Container fluid className="container-home-fluid bg-light">
        <div className="home-jumbotron d-flex flex-column justify-content-center">
          <div className="overlay"></div>
          <div className="jumbotron-inner">
            <div className="h-50 d-flex flex-column justify-content-center text-light">
              <h2 className="p-2 text-center">
                {currentUser ? `Hello, ${currentUser.username}!` : ""}
              </h2>
              <Col>
                <h2 className="p-2 text-center">
                  Welcome To The Brewery Discovery Project
                </h2>
              </Col>
              <Col lg={5} className="mx-auto">
                <Search
                  brewerySearch={brewerySearch}
                  brewerySetter={setBrewerySearch}
                  stateSearch={stateSearch}
                  stateSetter={setStateSearch}
                />
              </Col>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h2>BREWERY LIST</h2>
          <hr className="w-75 mx-auto mt-5" />
        </div>

        <Container>
          <Row>
            <Col>
              <BreweryCardList
                breweries={breweries}
                brewerySearch={brewerySearch}
                brewerySetter={setBrewerySearch}
                stateSearch={stateSearch}
                stateSetter={setStateSearch}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
