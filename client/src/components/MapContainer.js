import React, { Component, useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMapReact from "google-maps-react";
import BreweryCardList from "./BreweryCardList";

function MapContainer({ google, currentLocation }) {
  const [breweries, setBreweries] = useState("");
  useEffect(() => {
    fetch("/breweries")
      .then((r) => r.json())
      .then((breweries) => {
        setBreweries(breweries);
      });
  }, []);

  function breweryAddress() {
    breweries.map((brewery) => {
      return brewery.brewery_address;
    });
  }

  function breweryLat() {
    breweries.map((brewery) => {
      return brewery.brewery_lat;
    });
  }

  function breweryLon() {
    breweries.map((brewery) => {
      return brewery.brewery_lon;
    });
  }

  const location = {
    address: { breweryAddress },
    lat: { breweryLat },
    lon: { breweryLon },
  };

  return (
    <div>
      <Map
        google={google}
        zoom={16}
        // center={{location}}
        // address={breweryAddress}
        lat={breweryLat}
        lon={breweryLon}
      >
        <Marker
          lat={breweryLat}
          lon={breweryLon}
          // position={location}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
          }}
        />
      </Map>
      <br />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY",
})(MapContainer);
