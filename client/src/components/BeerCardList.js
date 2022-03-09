import React, { useState, useEffect } from "react";
// import { Row, Container } from "react-bootstrap";
import BeerCard from "./BeerCard";

function BeerCardList({brewery}) {
const [currentBrewery, setCurrentBrewery] = useState([]);

useEffect(() => {
  fetch(`/breweries/${brewery}`)
    .then((r) => r.json())
    .then((r) => setCurrentBrewery(r.beers));
}, [brewery]);

  return (
    <div>

      {currentBrewery.map( beer => 
        <BeerCard
          key={beer.id}
          id={beer.id}
          name={beer.beer_name}
          abv={beer.beer_abv}
          type={beer.beer_type}
        />
)}
      
      
    </div>
  );
}

export default BeerCardList;
