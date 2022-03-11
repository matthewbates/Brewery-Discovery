import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "90vh",
  width: "100%",
};

function MapContainer() {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

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
      hours_of_operation:
        "M - Th: 12-9 p.m. | F: 12-10 p.m. | Sat: 11-10 p.m. | Sun: 11-8 p.m.",
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
      hours_of_operation:
        "M: 12-8 p.m. | T/W: CLOSED | Th: 12-9 p.m. | F - Sat: 12-8 p.m. | Sun: 12-7 p.m.",
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
      hours_of_operation:
        "M - Th: 12-8 p.m. | F: 12-9 p.m. | Sat: 11-9 p.m. | Sun: 11-8 p.m.",
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
      hour: "M - W: 3-8 p.m. | Th - Sun: 12-8 p.m.",
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
      hours_of_operation: "Sun - Th: 11-8 p.m. | F - Sat: 11-9 p.m.",
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
      hours_of_operation:
        "M - Th: 12-9 p.m. | F - Sat: 12-10 p.m. | Sun: 12-8 p.m.",
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
      hours_of_operation:
        "M - Th: 3-10 p.m. | F - Sat: 12-12 a.m. | Sun: 12-10 p.m.",
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
      hours_of_operation:
        "M - Th: 3-11 p.m. | F - Sat: 12-12 a.m. | Sun: 12-10 p.m.",
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
      hours_of_operation:
        "M - Wed: 12-9 p.m. | Th - Sat: 12-10 p.m. | Sun: 12-8 p.m.",
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
      hours_of_operation:
        "M - T: 4-10 p.m. | W - Th: 11:30-10 p.m. | F - Sat: 11:30-11 p.m. | Sun: 11:30-5 p.m.",
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
      hours_of_operation:
        "M: CLOSED | T - Th: 4-11 p.m. | F: 4- 2 a.m. | Sat: 12-2 a.m. | Sun: 12-11 p.m.",
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
      hours_of_operation: "Sun - Th: 12-10 p.m. | F - Sat: 12-12 a.m.",
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
      hours_of_operation:
        "M - Th: 11-11 p.m. | F - Sat: 11-12 a.m. | Sun: 11-11 p.m.",
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
      hours_of_operation: "M - Sat: 12-9 p.m. | Sun: 12-7 p.m.",
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
      hours_of_operation: "Sun - Th: 12-10 p.m. | F - Sat: 12-12 a.m.",
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
      hours_of_operation: "Sun - Th: 12-8 p.m. | F - Sat: 12-9 p.m.",
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
      hours_of_operation: "Sun - Th: 11-9 p.m. | F - Sat: 11-10 p.m.",
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
      hours_of_operation: "M - Th: CLOSED | F - Sun: 12-6 p.m.",
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
      hours_of_operation:
        "M - T: CLOSED | W - Sat: 11-10 p.m. | Sun: 12-7 p.m.",
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
      hours_of_operation:
        "M - Th: 3-10 p.m. | F: 3-11 p.m. | Sat: 12-11 p.m. | Sun: 12-8 p.m.",
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
      hours_of_operation:
        "M: CLOSED | T - F: 12-10 p.m. | Sat: 11-10 p.m. | Sun: 12-6 p.m.",
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
      hours_of_operation:
        "M - T: CLOSED | W: 5-8 p.m. | Th: 4-8 p.m. |F: 3-10 p.m. | Sat: 12-10 p.m. | Sun: 2-8 p.m.",
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
      hours_of_operation: "M - Sun: 12-9 p.m.",
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
      hours_of_operation: "M - Sun: 12-11 p.m.",
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
      hours_of_operation: "M - Sun: 12-11 p.m.",
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
      hours_of_operation:
        "M - Th: 11-9 p.m. | F - Sat: 11-10 p.m. | Sun: 11-6 p.m.",
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
      hours_of_operation: "Sun - Th: 11-8 p.m. | F - Sat: 11-11 p.m.",
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
      hours_of_operation: "",
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
      hours_of_operation:
        "M - Th: 11-11 p.m. | F - Sat: 11-12 p.m. | Sun: 11-10 p.m.",
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
      hours_of_operation: "M - F: 12-10 p.m. | Sat - Sun: 10:30 - 10 p.m.",
      location: {
        lat: 40.724933,
        lng: -111.859966,
      },
    },
    {
      name: "Pint & Plow Brewing Company",
      address: "332 Clay Street, Kerrville, TX 78028",
      phone_number: "(830) 315-7468",
      website: "https://pintandplow.com/",
      hours_of_operation:
        "M/Th: 8-9 p.m. | T: CLOSED | Wed/F/Sat: 8-9 p.m. | Sun: 12-9 p.m.",
      location: {
        lat: 30.049347,
        lng: -99.140999,
      },
    },
    {
      name: "Deschutes Brewery",
      address: "210 NW 11th Avenue, Portland, OR 97209",
      phone_number: "(503) 296-4906",
      website: "https://www.deschutesbrewery.com/",
      hours_of_operation: "Sun - Th: 11:30-9 p.m., F - Sat: 11:30-10 p.m.",
      location: {
        lat: 45.524609,
        lng: -122.682068,
      },
    },
    {
      name: "Grains of Wraith Brewery",
      address: "3901 N Williams Avenue Suite A, Portland, OR 97227",
      phone_number: "(503) 954-3786",
      website: "https://gowbeer.com/",
      hours_of_operation: "M - Th: 2-10 p.m. | F - Sun: 12-10 p.m.",
      location: {
        lat: 45.550999,
        lng: -122.667015,
      },
    },
    {
      name: "Trap Door Brewing",
      address: "2315 Main Street, Vancouver, WA 98660",
      phone_number: "(360) 314-6966",
      website: "http://trapdoorbrewing.com/",
      hours_of_operation:
        "M - W: 3.10 p.m. | Th - Sat: 11-11 p.m. | Sun: 11-10 p.m.",
      location: {
        lat: 45.638636,
        lng: -122.67121,
      },
    },
    {
      name: "Twisted Pine Brewing Company",
      address: "3201 Walnut Street Suite A, Boulder, CO 80301",
      phone_number: "(303) 786-9270",
      website: "https://twistedpinebrewing.com/",
      hours_of_operation: "Sun - Sat: 11:30-9 p.m.",
      location: {
        lat: 40.020487,
        lng: -105.251154,
      },
    },
  ];

  return (
    <div className="google_styling">
      <LoadScript googleMapsApiKey="AIzaSyD4G8pUuPzvq_CQ9wdT5eOJpGG4ywQtFsY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={currentPosition}
        >
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                currentPostition={currentPosition}
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
              <div>
                <u>
                  <b>{selected.name}</b>
                  <br />
                </u>
                <p>{selected.address}</p>
                <p>
                  <b>Phone Number: </b>
                  {selected.phone_number}
                </p>
                <b>Hours of Operation:</b> <br />
                {selected.hours_of_operation}
                <br />
                <br />
                <a href={selected.website}>Visit Website</a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
