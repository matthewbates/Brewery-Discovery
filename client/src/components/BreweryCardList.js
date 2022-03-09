import React from "react";
import { Row, Container } from "react-bootstrap";
import BreweryCard from "./BreweryCard";
import MapContainer from "./Map";

function BreweryCardList({ breweries, brewerySearch, stateSearch, setBrewery }) {
  const filteredBreweryAndStateSearch =
    breweries.filter((brewery) =>
      brewery.brewery_name.toLowerCase().includes(brewerySearch.toLowerCase())
    )
    .filter((brewery) =>
      brewery.brewery_state.toLowerCase().includes(stateSearch.toLowerCase())
    );
  return (
    <>
      <Container>
        <Row>
          {filteredBreweryAndStateSearch.map((brewery) => {
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
                state={brewery.brewery_state}
                image={brewery.brewery_image}
                setBrewery={setBrewery}
              />
            );
          })}
          <MapContainer />
        </Row>
      </Container>
    </>
  );
}

export default BreweryCardList;
