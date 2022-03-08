import React from "react";
import { Container } from "react-bootstrap";

function Search({ search, setter }) {
  function renderBrewerySearch(e) {
    setter(e.target.value);
  }

  return (
    <Container>
      <div className="input-group pt-5 col-8">
        <input
          type="text"
          className="form-control rounded"
          aria-label="Search"
          aria-describedby="search-addon"
          value={search}
          placeholder="Search Breweries..."
          onChange={renderBrewerySearch}
        />
      </div>
    </Container>
  );
}

export default Search;
