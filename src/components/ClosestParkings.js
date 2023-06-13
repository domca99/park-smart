import React from "react";
import { Paper, Typography } from "@mui/material";

const ClosestParkings = (props) => {
  if (props.closestParkings.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 35,
        }}
      >
        <Paper elevation={0}>
          <img
            src={"http://maps.google.com/mapfiles/ms/micons/green-dot.png"}
          />
          <Typography variant="h6" style={{ color: "#06327D", fontSize: 17 }}>
            {props.parkings[props.closestParkings[0]].name}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            total capacity: {props.parkings[props.closestParkings[0]].capacity}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            free capacity: {props.parkings[props.closestParkings[0]].free}
          </Typography>
        </Paper>
        <Paper elevation={0}>
          <img
            src={"http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png"}
          />
          <Typography variant="h6" style={{ color: "#06327D", fontSize: 17 }}>
            {props.parkings[props.closestParkings[1]].name}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            total capacity: {props.parkings[props.closestParkings[1]].capacity}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            free capacity: {props.parkings[props.closestParkings[1]].free}
          </Typography>
        </Paper>
        <Paper elevation={0}>
          <img
            src={"http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"}
          />
          <Typography variant="h6" style={{ color: "#06327D", fontSize: 17 }}>
            {props.parkings[props.closestParkings[2]].name}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            total capacity: {props.parkings[props.closestParkings[2]].capacity}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            free capacity: {props.parkings[props.closestParkings[2]].free}
          </Typography>
        </Paper>
        <Paper elevation={0}>
          <img src={"http://maps.google.com/mapfiles/ms/micons/pink-dot.png"} />
          <Typography variant="h6" style={{ color: "#06327D", fontSize: 17 }}>
            {props.parkings[props.closestParkings[3]].name}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            total capacity: {props.parkings[props.closestParkings[3]].capacity}
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: 15 }}>
            free capacity: {props.parkings[props.closestParkings[3]].free}
          </Typography>
        </Paper>
      </div>
    );
  }
};

export default ClosestParkings;
