import React, { useState } from "react";

function MiniFridge() {
  const [addToMiniFridge, setAddToMiniFridge] = useState([]);

  function handleAddToFavorites() {
    setAddToMiniFridge((addToMiniFridge) => !addToMiniFridge);
  }

  function renderAddToFridge() {
      
  }

  return (
    <div className="add_to_favorites" onClick={handleAddToFavorites}></div>
  );
}

export default MiniFridge;
