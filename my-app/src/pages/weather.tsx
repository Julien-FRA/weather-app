import React, { useState, useEffect } from "react";
import { weatherInterface } from "../interfaces/weather";
import { displayWeather } from "../types/weather";
import { WeatherClass } from "../class/Weather";
import { API_TOKEN } from "../utils/config";
import WeatherContainer from "../components/container/WeatherContainer";

const coords: weatherInterface = {
  lat: 44.34,
  long: 10.99,
  key: API_TOKEN!,
};

const Weather = () => {
  const [weather, setWeather] = useState<displayWeather[]>([]);

  // const weatherInfo = async () => {
  //   const response = await new WeatherClass(
  //     coords.lat,
  //     coords.long,
  //     coords.key
  //   ).getWeather();
  //   setWeather(response.main);
  // };

  // useEffect(() => {
  //   weatherInfo();
  // }, []);

  // return <div>{weather.map(info => (
  //     <WeatherCard />
  // ))}</div>;

  return (
    <WeatherContainer />
  )
};

export default Weather;
