import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const zoom = 13;

  const putMarkers = (center, parkings, closestParkings) => {
    if (closestParkings.length > 0) {
      return (
        <GoogleMap
          center={center}
          zoom={zoom}
          mapContainerStyle={{ height: "40%", width: "95%", left: "2.5%" }}
        >
          <Marker
            position={{
              lat: parkings[closestParkings[0]].latitude,
              lng: parkings[closestParkings[0]].longitude,
            }}
            icon={"http://maps.google.com/mapfiles/ms/micons/green-dot.png"}
          />
          <Marker
            position={{
              lat: parkings[closestParkings[1]].latitude,
              lng: parkings[closestParkings[1]].longitude,
            }}
            icon={"http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png"}
          />
          <Marker
            position={{
              lat: parkings[closestParkings[2]].latitude,
              lng: parkings[closestParkings[2]].longitude,
            }}
            icon={"http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"}
          />
          <Marker
            position={{
              lat: parkings[closestParkings[3]].latitude,
              lng: parkings[closestParkings[3]].longitude,
            }}
            icon={"http://maps.google.com/mapfiles/ms/micons/pink-dot.png"}
          />
          <Marker
            position={center}
            icon={"http://maps.google.com/mapfiles/kml/pal4/icon15.png"}
          />
        </GoogleMap>
      );
    } else {
      return (
        <GoogleMap
          center={center}
          zoom={zoom}
          mapContainerStyle={{ height: "40%", width: "95%", left: "2.5%" }}
        />
      );
    }
  };

  return putMarkers(props.center, props.parkings, props.closestParkings);
};

export default Map;
