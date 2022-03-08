import React from "react";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";

function Search({ brewerySearch, brewerySetter, stateSearch, stateSetter }) {
  function renderBrewerySearch(e) {
    brewerySetter(e.target.value);
  }

  function handleSelect(e) {
    stateSetter(e);
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

        <DropdownButton
          id="dropdown-basic-button"
          title="Search By State"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="CO">CO</Dropdown.Item>
          <Dropdown.Item eventKey="CA">CA</Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
}

export default Search;
