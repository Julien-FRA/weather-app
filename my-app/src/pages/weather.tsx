import React from 'react'
import { WeatherInterface } from "../interfaces/weather";
import { getWeather } from '../services/requestApiWeather';
import { API_TOKEN } from "../utils/config";

const weather: WeatherInterface = {
  lat: 45,
  long: 54,
  key: API_TOKEN!
}

const weatherInfo = getWeather(weather.lat, weather.long, weather.key);

const Weather = () => {
  return (
    <div>weather card</div>
  )
}

export default Weather