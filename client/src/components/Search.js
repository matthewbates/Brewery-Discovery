import React from "react";
import { Container, Button } from "react-bootstrap";

function Search({ brewerySearch, brewerySetter, stateSearch, stateSetter }) {
  function renderBrewerySearch(e) {
    brewerySetter(e.target.value);
  }

  function renderStateSearch(e) {
    stateSetter(e.target.value);
  }

  return (
    <Container>
      <div className="input-group pt-5 col-8">
        <input
          type="text"
          className="form-control rounded"
          aria-label="Search"
          aria-describedby="search-addon"
          value={brewerySearch}
          placeholder="Search By Brewery"
          onChange={renderBrewerySearch}
        />

        <input
          type="text"
          className="form-control rounded"
          aria-label="Search"
          aria-describedby="search-addon"
          value={stateSearch}
          placeholder="Search By State"
          onChange={renderStateSearch}
        />
        <Button className="search_by_brewery_or_state">Search</Button>
      </div>
    </Container>
  );
}

export default Search;
