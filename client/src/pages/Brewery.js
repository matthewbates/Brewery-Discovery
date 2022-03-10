import React from "react";
import BeerCardList from "../components/BeerCardList";

function Brewery({ brewery }) {
  

  return (
    <div>
      <BeerCardList brewery={brewery} />
    </div>
  );
}

export default Brewery;
