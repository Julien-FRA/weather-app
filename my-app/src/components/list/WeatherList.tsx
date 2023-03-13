import React, { useEffect, useState } from "react";
import { WeatherClass } from "../../class/Weather";
import { weatherCoords } from "../../interfaces/weather";
import {
  getBackground,
  getCelsius,
  getHour,
  getZone,
} from "../../services/weather";
import { displayWeather } from "../../types/weather";
import { API_TOKEN } from "../../utils/config";

const WeatherList = ({ lat, long }: weatherCoords) => {
  const [weather, setWeather] = useState<displayWeather>({});

  const weatherInfo = async () => {
    const response = await new WeatherClass(lat, long, API_TOKEN!).getWeather();
    setWeather(response);
  };

  useEffect(() => {
    weatherInfo();
  }, []);

  const actualTemp = getCelsius(weather.main?.temp);
  const minTemp = getCelsius(weather.main?.temp_min);
  const maxTemp = getCelsius(weather.main?.temp_max);

  const actualHour = getHour(weather.dt);

  const img = getBackground(actualTemp);

  const zoneName = getZone(weather.name);

  return (
    <div className="list">
      <figure className="list-figure">
        <img src={img} alt="temp" className="list-img" />
      </figure>
      <div className="list-info">
        <div className="list-group">
          <p className="list-name">{zoneName}</p>
          <p className="list-hour">
            {actualHour.hours}h{actualHour.minutes}
          </p>
        </div>
        <div className="list-group">
          <p className="list-temp">Actuelle: {actualTemp}°</p>
          <p className="list-min">Minimum: {minTemp}°</p>
          <p className="list-max">Maximum: {maxTemp}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherList;
