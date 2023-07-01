/********************
    
    Assignment 5  Weather CurrentWeather Component
    Name: Maryam Ayemlo Gambo
    Date:March 3, 2023
    Description:Javascript framework using React: displaying current weather

*********************/

import "./styles.css";
import React from "react";

export default function CurrentWeather({ weather, units }) {
  //jsk styling for Description.js
  const topSectionStyle = {
    width: "80%",
    margin: "30px auto",
    padding: "1rem",
    borderRadius: "0.4rem",
    color: "white",
    display: "flex",
    aligniItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  };

  const leftTempStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const h2Style = {
    fontSize: "15px",
    fontWeight: "800",
    textTransform: "capitalize"
  };

  const h1Style = {
    fontSize: "60px"
  };

  const imageStyle = {
    width: "150px",
    height: "150px"
  };

  return (
    <div className="section section_descriptions">
      <div className="section_temperature" style={topSectionStyle}>
        <div className="left-temp" style={leftTempStyle}>
          <h2 style={h2Style}>
            {weather.name},{weather.country}
          </h2>
          <img src={weather.iconURL} alt="weather-icon" style={imageStyle} />
          <h2 style={h2Style}>{weather.description}</h2>
        </div>
        <div className="temperature">
          <h1 style={h1Style}>
            {weather.temp.toFixed()}°{units === "metric" ? "C" : "F"}
          </h1>
        </div>
      </div>
    </div>
  );
}
