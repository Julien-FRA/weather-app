import React from "react";
import WeatherList from "../list/WeatherList";

const WeatherContainer = () => {
  return (
    <div className="container">
      <WeatherList />
      <WeatherList />
      <WeatherList />
      <WeatherList />
    </div>
  );
};

export default WeatherContainer;
