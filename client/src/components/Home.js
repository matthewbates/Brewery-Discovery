import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container } from "react-bootstrap";
import Search from "./Search";

function Home({ currentUser, setBrewery }) {
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
      <Container fluid className="container-home-fluid">
        <div className="home-jumbotron d-flex flex-column justify-content-center">
          <div className="overlay"></div>
          <div className="jumbotron-inner">
            <div className="h-50 d-flex flex-column justify-content-center text-light">
              <h3 className="p-2 text-center">
                {currentUser ? `Hello, ${currentUser.username}!` : ""}
              </h3>
              <Col className="text-center">
                <h2>Welcome To The Brewery Discovery Project</h2>
                <p className="pt-1 text-uppercase">
                  Search for a brewery by name or location below
                </p>
              </Col>
              <Col lg={5} className="mx-auto search-bar">
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

        <Container>
          <div className="brewery-list-container">
            <div className="text-center mt-5">
              <h2>BREWERY LIST</h2>
              <p>Click on a brewery below to view the beer list</p>
              <hr className="mx-auto mt-3" />
            </div>

            <Row>
              <Col>
                <BreweryCardList
                  breweries={breweries}
                  brewerySearch={brewerySearch}
                  brewerySetter={setBrewerySearch}
                  stateSearch={stateSearch}
                  stateSetter={setStateSearch}
                  setBrewery={setBrewery}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Home;
