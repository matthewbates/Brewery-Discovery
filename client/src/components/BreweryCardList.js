import React from "react";
import { Row, Container } from "react-bootstrap";
import BreweryCard from "./BreweryCard";

function BreweryCardList({ breweries, search, setter }) {
  const filteredBreweries = breweries.filter((brewery) =>
    brewery.brewery_name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Container>
        <Row>
          {filteredBreweries.map((brewery) => {
            return (
              <BreweryCard
                key={brewery.id}
                id={brewery.id}
                name={brewery.brewery_name}
                logo={brewery.brewery_logo}
                website={brewery.brewery_website}
                address={brewery.brewery_address}
                favorites={brewery.is_favorite}
                phone={brewery.brewery_phone_number}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default BreweryCardList;
