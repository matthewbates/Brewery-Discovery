import React, { useState, useEffect } from "react";
import BreweryCardList from "./BreweryCardList";
import { Row, Col, Container } from "react-bootstrap";
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

              <div className="mx-auto col-8">
                <Row>
                  <Col className="mx-auto">
                    <Search search={search} setter={setSearch} />
                  </Col>
                  <Col className="mx-auto">
                    <Search search={search} setter={setSearch} />
                  </Col>
                </Row>
              </div>
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
                search={search}
                setter={setSearch}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
