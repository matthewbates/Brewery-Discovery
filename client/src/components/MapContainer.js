import React, { Component, useEffect, useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 38.871609,
  lng: -104.822388,
};
function MapContainer() {
  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 38.871609,
        lng: -104.822388,
      },
    },
  ];


  return (
    <LoadScript googleMapsApiKey="AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY",
// })(MapContainer);
