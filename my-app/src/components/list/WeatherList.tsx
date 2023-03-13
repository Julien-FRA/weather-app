import React from "react";
import cloud from "../../assets/img/cloud.jpg";

const WeatherList = () => {
  return (
    <div className="list">
      <figure className="list-figure">
        <img src={cloud} alt="temp" className="list-img" />
      </figure>
      <div className="list-info">
        <p className="list-name">Paris</p>
        <p className="list-hour">10h00</p>
      </div>
    </div>
  );
};

export default WeatherList;
