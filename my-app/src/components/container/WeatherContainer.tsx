import React from "react";
import { weatherCoords } from "../../interfaces/weather";
import WeatherList from "../list/WeatherList";

const coordsParis: weatherCoords = {
  lat: 48.856614,
  long: 2.352222,
};

const coordsNY: weatherCoords = {
  lat: 40.712784,
  long: -74.005941,
};

const coordsSY: weatherCoords = {
  lat: -33.867487,
  long: 151.20699,
};

const coordsMT: weatherCoords = {
  lat: 45.501689,
  long: -73.567256,
};

const WeatherContainer = () => {
  return (
    <div className="container">
      <WeatherList lat={coordsParis.lat} long={coordsParis.long} />
      <WeatherList lat={coordsNY.lat} long={coordsNY.long} />
      <WeatherList lat={coordsSY.lat} long={coordsSY.long} />
      <WeatherList lat={coordsMT.lat} long={coordsMT.long} />
    </div>
  );
};

export default WeatherContainer;
