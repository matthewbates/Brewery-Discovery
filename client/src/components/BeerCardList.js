import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import BeerCard from "./BeerCard";

function BeerCardList() {
  const [beers, setBeers] = useState([]);
  

  useEffect(() => {
    fetch("/beers")
      .then((r) => r.json())
      .then((beers) => {
        setBeers(beers);
      });
  }, []);

  return (
    <div>
      {beers.map((beer) => (
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
