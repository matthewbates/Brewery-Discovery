import React, { Component, useEffect, useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMapReact from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY",
})(MapContainer);
