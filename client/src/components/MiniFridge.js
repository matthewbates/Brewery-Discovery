import React, { useState, useEffect } from "react";
import Reviews from "../pages/Reviews";
import BeerCard from "./BeerCard";

function MiniFridge() {
  const [miniFridge, setAddToMiniFridge] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const favoriteBeers = miniFridge.filter((miniFridge) =>
    favoriteIds.includes(miniFridge.id)
  );

  useEffect(() => {
    fetch("/beers")
      .then((response) => response.json())
      .then(console.log);
  });

  return (
    <div>
      {/* <BeerCard
        addBeer={handleAddToFavorites}
        setAddToMiniFridge={setAddToMiniFridge}
        setFavorites={setFavorites}
        addToMiniFridge={addToMiniFridge}
      />
      <Reviews
        addBeer={handleAddToFavorites}
        setAddToMiniFridge={setAddToMiniFridge}
        setFavorites={setFavorites}
        addToMiniFridge={addToMiniFridge} */}
      />
    </div>
  );
}

export default MiniFridge;
