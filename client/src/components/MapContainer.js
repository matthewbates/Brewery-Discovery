import React, { useState } from "react";
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
      address: "2727 North. Cascade Avenue #123, Colorado Springs, CO 80907",
      phone_number: "(719) 471-4628",
      website: "https://www.goatpatchbrewing.com/",
      location: {
        lat: 38.871609,
        lng: -104.822388,
      },
    },
    {
      name: "Paradox Brewing Company",
      address: "10 Buffalo Court, Divide, CO 80814",
      phone_number: "(719) 686-8081",
      website: "http://paradoxbeercompany.com/index.php",
      location: {
        lat: 38.968652,
        lng: -105.034247,
      },
    },
    {
      name: "Manitou Brewing Company",
      address: "725 Manitou Avenue, Manitou Springs, CO 80829",
      phone_number: "(719) 282-7709",
      website: "https://www.manitoubrewing.com/",
      location: {
        lat: 38.857029,
        lng: -104.915614,
      },
    },
    {
      name: "Crooked Stave Brewing Company",
      address: "1441 W 46th Avenue Unit 19, Denver, CO 80211",
      phone_number: "(720) 508-3292",
      website: "https://www.crookedstave.com/",
      location: {
        lat: 39.780688,
        lng: -105.004715,
      },
    },
    {
      name: "Cerberus Brewing Company",
      address: "702 W Colorado Avenue, Colorado Springs, CO 80905",
      phone_number: "(719) 636-2337",
      website: "https://www.cerberusbrewingco.com/",
      location: {
        lat: 38.833184,
        lng: -104.837405,
      },
    },
    {
      name: "Red Leg Brewing Company",
      address: "2323 Garden of the Gods Road, Colorado Springs, CO 80907",
      phone_number: "(719) 598-3776",
      website: "https://redlegbrewing.com/",
      location: {
        lat: 38.896106,
        lng: -104.870451,
      },
    },
    {
      name: "Common Space Brewery",
      address: "3411 W El Segundo Boulevard, Hawthorne, CA 90250",
      phone_number: "(424) 456-4355",
      website: "https://www.commonspace.la/",
      location: {
        lat: 33.9166,
        lng: -118.333481,
      },
    },
    {
      name: "L.A. Ale Works",
      address: "12918 Cerise Avenue, Hawthorne, CA 90250",
      phone_number: "(424) 456-4191",
      website: "https://www.laaleworks.com/",
      location: {
        lat: 33.914754,
        lng: -118.332374,
      },
    },
    {
      name: "Monkish Brewing",
      address: "20311 S Western Avenue, Torrance, CA 90501",
      phone_number: "(310) 295-2157",
      website: "https://www.monkishbrewing.com/",
      location: {
        lat: 33.846322,
        lng: -118309931,
      },
    },
    {
      name: "Congregation Ale House",
      address: "300 S Raymond Avenue, Pasadena, CA 91105",
      phone_number: "(626) 334-2337",
      website: "https://congregationalehouse.com/",
      location: {
        lat: 34.140128,
        lng: -118.148512,
      },
    },
    {
      name: "Angel City Brewery",
      address: "216 S Alameda Street, Los Angeles, CA 90012",
      phone_number: "(213) 537-5550",
      website: "https://angelcitybrewery.com/",
      location: {
        lat: 34.04663,
        lng: -118.237879,
      },
    },
    {
      name: "Homebound Brewhaus",
      address: "800 N Alameda Street, Los Angeles, CA 90012",
      phone_number: "(306) 850-8288",
      website: "https://www.goatpatchbrewing.com/",
      location: {
        lat: 34.056019,
        lng: -118.235899,
      },
    },
    {
      name: "Ballast Point",
      address: "9045 Carroll Way, San Diego, CA 92121",
      phone_number: "(858) 790-6901",
      website: "https://ballastpoint.com/",
      location: {
        lat: 32.888495,
        lng: -117.157955,
      },
    },
    {
      name: "Harland Brewing Company",
      address: "4112 Napeir Street, San Diego, CA 92110",
      phone_number: "(858) 800-4566",
      website: "https://harlandbeer.com/",
      location: {
        lat: 32.782504,
        lng: -117.206487,
      },
    },
    {
      name: "Mike Hess Brewing",
      address: "879 W Harbor Drive Unit W14-E, San Diego, CA 92101",
      phone_number: "(619) 795-1095",
      website: "https://www.mikehessbrewing.com/",
      location: {
        lat: 32.709379,
        lng: -117.171882,
      },
    },
    {
      name: "Stone Brewing",
      address: "1202 Kettner Boulevard Unit 101, San Diego, CA 92101",
      phone_number: "(626) 440-7243",
      website: "https://www.stonebrewing.com/",
      location: {
        lat: 32.709379,
        lng: -117.171882,
      },
    },
    {
      name: "Karl Strauss Brewing Company",
      address: "1157 Columbia Street, San Diego, CA 92101",
      phone_number: "(619) 234-2739",
      website: "https://www.karlstrauss.com/",
      location: {
        lat: 32.717457,
        lng: -117.167259,
      },
    },
    {
      name: "California Wild Ales",
      address: "4896 Newport Avenue, San Diego, CA 92107",
      phone_number: "(855) 945-3253",
      website: "https://californiawildales.com/",
      location: {
        lat: 32.745837,
        lng: -117249027,
      },
    },
    {
      name: "Deep Ellum Brewing Company",
      address: "2823 Saint Louis Street, Dallas, TX 75226",
      phone_number: "(214) 888-3322",
      website: "https://deepellumbrewing.com/",
      location: {
        lat: 32.780788,
        lng: -96.78167,
      },
    },
    {
      name: "Four Corners Brewing Company",
      address: "1311 S Ervay Street, Dalls, TX 75215",
      phone_number: "(214) 748-2739",
      website: "https://fcbrewing.com/",
      location: {
        lat: 32.77208,
        lng: -96.791841,
      },
    },
    {
      name: "Peticolas Brewing Company",
      address: "1301 Pace Street, Dallas, TX 75207",
      phone_number: "(214) 234-7600",
      website: "https://www.peticolasbrewing.com/",
      location: {
        lat: 32.796828,
        lng: -96.82907,
      },
    },
    {
      name: "Rahr & Sons Brewing Company",
      address: "701 Galveston Avenue, Fort Worth, TX 76104",
      phone_number: "(817) 810-9266",
      website: "https://rahrbrewing.com/",
      location: {
        lat: 32.736945,
        lng: -97.326835,
      },
    },
    {
      name: "Martin House Brewing Company",
      address: "220 S Sylvania Avenue Unit 209, Fort Worth, TX 76111",
      phone_number: "(817) 222-0177",
      website: "https://martinhousebrewing.com/",
      location: {
        lat: 32.763541,
        lng: -97.309974,
      },
    },
    {
      name: "Hop Fusion Ale Works",
      address: "200 E Broadway Avenue, Fort Worth, TX 76104",
      phone_number: "(817) 841-1721",
      website: "https://www.hopfusionaleworks.com/",
      location: {
        lat: 32.741629,
        lng: -97324841,
      },
    },
    {
      name: "St. Arnold Brewing Company",
      address: "2000 Lyons Avenue, Houston, TX 77020",
      phone_number: "(713) 686-9494",
      website: "https://www.saintarnold.com/",
      location: {
        lat: 29.771509,
        lng: -95.348524,
      },
    },
    {
      name: "Karbach Brewing Company",
      address: "2032 Karbach Street, Houston, TX 77092",
      phone_number: "(713) 680-2739",
      website: "https://www.karbachbrewing.com/",
      location: {
        lat: 29.805832,
        lng: -95.460666,
      },
    },
    {
      name: "Saltfire Brewing Company",
      address: "2199 Southwest Temple, South Salt Lake City, UT 84115",
      phone_number: "(385) 955-0504",
      website: "https://www.saltfirebrewing.com/",
      location: {
        lat: 40.722838,
        lng: -111.893687,
      },
    },
    {
      name: "A.Fisher Brewing Company",
      address: "320 W 800 S, Salt Lake City, UT 84101",
      phone_number: "(801) 487-2337",
      website: "https://fisherbeer.com/",
      location: {
        lat: 40.752235,
        lng: -111.900477,
      },
    },
    {
      name: "Squatters Pub Brewery",
      address: "776 N Terminal Drive, Salt Lake City, UT 84122",
      phone_number: "(801) 575-2002",
      website: "https://www.squatters.com/our-beers/",
      location: {
        lat: 40.785371,
        lng: -111.988009,
      },
    },
    {
      name: "Wasatch Brewery - Sugarhouse",
      address: "2110 Highland Drive, Salt Lake City, UT 84106",
      phone_number: "(801) 783-1127",
      website: "https://wasatchbeers.com/",
      location: {
        lat: 40.724933,
        lng: -111.859966,
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
              <u>
                <b>{selected.name}</b>
                <br />
              </u>
              <p>{selected.address}</p>
              <p>
                <b>Phone Number: </b>
                {selected.phone_number}
              </p>
              <a href={selected.website}>Visit Website</a>
            </p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
