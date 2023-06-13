import "./App.css";
import SearchField from "./components/SearchField";
import Map from "./components/Map";
import React, { useState } from "react";
import axios from "axios";
import ClosestParkings from "./components/ClosestParkings";
import logo from "./assets/logo.png";
import { Typography } from "@mui/material";

const App = () => {
  const [parkings, setParkings] = useState([]);
  const [center, setCenter] = useState({
    lat: 49.19495931724228,
    lng: 16.60866018376306,
  });

  const [closestParkings, setClosestParkings] = useState([]);

  const handleSearch = async (location) => {
    let currentParkings = [];
    try {
      await axios
        .get(
          "https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/carparks_live/FeatureServer/0/" +
            "query?where=1%3D1&outFields=name,capacity,free,Latitude,Longitude&outSR=4326&f=json"
        )
        .then((response) => {
          currentParkings = response.data.features.map((parking) => ({
            name: parking.attributes.name,
            capacity: parking.attributes.capacity,
            free: parking.attributes.free,
            latitude: parking.attributes.Latitude,
            longitude: parking.attributes.Longitude,
          }));
          setParkings(currentParkings);
        });
    } catch (err) {}

    let currentCenter = null;
    try {
      await axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            location +
            "&key=AIzaSyCcId_R49N5xwRWR4ZeHKnKY2k1YhdVnUg"
        )
        .then((response) => {
          currentCenter = response.data.results[0].geometry.location;
          setCenter(currentCenter);
        });
    } catch (err) {}
    findClosest(currentCenter, currentParkings);
  };

  const findClosest = (center, parkings) => {
    let distances = [];
    parkings.forEach((parking) => {
      distances.push(
        Math.sqrt(
          (parking.latitude - center.lat) ** 2 +
            (parking.longitude - center.lng) ** 2
        )
      );
    });
    let spareDistances = [...distances];
    let closestInds = [];
    for (let i = 0; i < 4; i++) {
      let minDistance = Math.min(...spareDistances);
      closestInds.push(distances.indexOf(minDistance));
      spareDistances.splice(spareDistances.indexOf(minDistance), 1);
    }
    setClosestParkings(closestInds);
  };

  return (
    <div className="App">
      <div style={{ float: "left", width: "80%", paddingTop: 70 }}>
        <Typography
          variant={"h6"}
          style={{
            color: "#06327D",
            textAlign: "left",
            paddingLeft: 70,
          }}
        >
          Parking close to
        </Typography>
        <SearchField onSearch={handleSearch} />
      </div>
      <div style={{ float: "right" }}>
        <img
          src={logo}
          alt={"Logo"}
          width={200}
          style={{ paddingTop: 20, paddingRight: 60, paddingBottom: 15 }}
        />
      </div>
      <Map
        center={center}
        parkings={parkings}
        closestParkings={closestParkings}
      />
      <ClosestParkings parkings={parkings} closestParkings={closestParkings} />
    </div>
  );
};

export default App;
