import React, { Component, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 38.871609,
  lng: -104.822388,
};

function MapContainer() {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };
  // add website, address, & phone number
  const locations = [
    {
      name: "Goat Patch Brewing Company",
      location: {
        lat: 38.871609,
        lng: -104.822388,
      },
    },
    {
      name: "Paradox Brewing Company",
      location: {
        lat: 38.968652,
        lng: -105.034247,
      },
    },
    {
      name: "Manitou Brewing Company",
      location: {
        lat: 38.857029,
        lng: -104.915614,
      },
    },
    {
      name: "Crooked Stave Brewing Company",
      location: {
        lat: 39.780688,
        lng: -105.004715,
      },
    },
    {
      name: "Cerberus Brewing Company",
      location: {
        lat: 38.833184,
        lng: -104.837405,
      },
    },
    {
      name: "Red Leg Brewing Company",
      location: {
        lat: 38.896106,
        lng: -104.870451,
      },
    },
    {
      name: "Common Space Brewery",
      location: {
        lat: 33.9166,
        lng: -118.333481,
      },
    },
    {
      name: "L.A. Ale Works",
      location: {
        lat: 33.914754,
        lng: -118.332374,
      },
    },
    {
      name: "Monkish Brewing",
      location: {
        lat: 33.846322,
        lng: -118309931,
      },
    },
    {
      name: "Congregation Ale House",
      location: {
        lat: 34.140128,
        lng: -118.148512,
      },
    },
    {
      name: "Angel City Brewery",
      location: {
        lat: 34.04663,
        lng: -118.237879,
      },
    },
    {
      name: "Homebound Brewhaus",
      location: {
        lat: 34.056019,
        lng: -118.235899,
      },
    },
    {
      name: "Ballast Point",
      location: {
        lat: 32.888495,
        lng: -117.157955,
      },
    },
    {
      name: "Harland Brewing Company",
      location: {
        lat: 32.782504,
        lng: -117.206487,
      },
    },
    {
      name: "Mike Hess Brewing",
      location: {
        lat: 32.709379,
        lng: -117.171882,
      },
    },
    {
      name: "Stone Brewing",
      location: {
        lat: 32.709379,
        lng: -117.171882,
      },
    },
    {
      name: "Karl Strauss Brewing Company",
      location: {
        lat: 32.717457,
        lng: -117.167259,
      },
    },
    {
      name: "California Wild Ales",
      location: {
        lat: 32.745837,
        lng: -117249027,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={5} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>
              <b>{selected.name}</b>
            </p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
