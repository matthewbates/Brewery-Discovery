import React, { useState, useEffect } from "react";
// import { Row, Container } from "react-bootstrap";
import BeerCard from "./BeerCard";
import BreweryProfile from "./BreweryProfile"

function BeerCardList({ brewery }) {
  const [currentBrewery, setCurrentBrewery] = useState([]);
  const [currentBreweryDetails, setCurrentBreweryDetails] = useState([]);

  useEffect(() => {
    fetch(`/breweries/${brewery}`)
      .then((r) => r.json())
      .then((r) => setCurrentBrewery(r.beers));
  }, [brewery]);

  useEffect(() => {
    fetch(`/breweries/${brewery}`)
      .then((r) => r.json())
      .then((r) => setCurrentBreweryDetails(r));
  }, [brewery]);

  return (
    <div>
      {currentBreweryDetails.map((brewery) => {
        return (
          <BreweryProfile
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
          />
        );
      })}

      {currentBrewery.map((beer) => (
        <BeerCard
          key={beer.id}
          id={beer.id}
          name={beer.beer_name}
          abv={beer.beer_abv}
          type={beer.beer_type}
        />
      ))}
    </div>
  );
}

export default BeerCardList;
