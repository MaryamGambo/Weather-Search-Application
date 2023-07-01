/********************
    
    Assignment 5  App Component
    Name: Maryam Ayemlo Gambo
    Date:March 3, 2023
    Description:Javascript framework using React

*********************/

import "./styles.css";
import "mvp.css";
import Description from "./Descriptions";
import Form from "./Form";
import coldBg from "../public/images/cold weather.jpg";
import hotBg from "../public/images/sunny weather.jpg";
import React, { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import { getFormattedWeatherData } from "./CurrentWeatherAPI";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [backgroundImage, setbackgroundImage] = useState(coldBg);
  const [toggle, setToggle] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const buttonClass = toggle ? "on" : "off";

  useEffect(() => {
    fetchWeatherData(city, units);
  }, [units, city]);

  function fetchWeatherData(city, units) {
    const fetchWeatherData = async () => {
      setCity(city);
      if (city !== "") {
        const WeatherData = await getFormattedWeatherData(city, units);
        setWeather(WeatherData);
        //console.log(WeatherData);
        if (WeatherData === null) {
          setNotFound(true);
          return;
        } else {
          setNotFound(false);
        }
        //dynamic background
        const weatherChangeTemp = units === "metric" ? 20 : 60;
        if (WeatherData.temp <= weatherChangeTemp) {
          setbackgroundImage(coldBg);
        } else {
          setbackgroundImage(hotBg);
        }
      }
    };

    fetchWeatherData();
  }

  function handleUnitsClick(e) {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(-1);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius
      ? "Change Temp Scale:°F"
      : "Change Temp Scale:°C";
    setUnits(isCelsius ? "imperial" : "metric");
  }

  // function enterKeyPressed(e) {
  //   if (e.keyCode === 13) {
  //     setCity(e.currentTarget.value);
  //   }
  // }

  //jsx styling for App.js
  const appStyle = {
    width: "100%",
    height: "180vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${backgroundImage})`
  };

  const overlayStyle = {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "1rem",
    width: "100%",
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  };

  const sectionStyle = {
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

  const headerStyle = {
    fontWeight: "1000",
    width: "50%",
    margin: "0 auto",
    fontSize: "50px"
  };

  return (
    <div className="app" style={appStyle}>
      <div className="overlay" style={overlayStyle}>
        <h1 style={headerStyle}>Weather App</h1>

        <div className="section_inputs" style={sectionStyle}>
          <Form fetchWeatherData={fetchWeatherData} />
          {/* //use a button to toggle between temperature scale */}
          <button
            className={buttonClass}
            onClick={(e) => {
              handleUnitsClick(e);
              setToggle(!toggle);
            }}
          >
            Change Temp Scale:°C
          </button>
        </div>

        {weather && notFound === false && (
          <div>
            <CurrentWeather weather={weather} units={units} />
            <Description weather={weather} units={units} />
          </div>
        )}
        {notFound === true && <div style={sectionStyle}>City Not Found</div>}
      </div>
    </div>
  );
}
