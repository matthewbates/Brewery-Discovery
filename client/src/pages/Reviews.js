import React from "react";
import { Navigate } from "react-router-dom";
import MiniFridge from "../components/MiniFridge";
import BeerCard from "../components/BeerCard";

function Reviews({
  currentUser,
  setAddToMiniFridge,
  setFavorites,
  addToMiniFridge,
}) {
  return (
    <>
      {currentUser ? (
        <h2>
          This is the Mini-Fridge, a collection of all of your reviews of
          breweries and their beers.
        </h2>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Reviews;
