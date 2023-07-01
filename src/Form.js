/********************
    
    Assignment 5  Form Component
    Name: Maryam Ayemlo Gambo
    Date:March 3, 2023
    Description:Javascript framework using React: Search Form to get city

*********************/

import React, { useState } from "react";

export default function Form({ fetchWeatherData }) {
  const [newCity, setNewCity] = useState("");

  function formSubmit(event) {
    event.preventDefault();

    const trimmedText = newCity.trim();

    //  Prevent blank to do entries
    if (trimmedText !== "") {
      fetchWeatherData(trimmedText);
    }
  }

  //jsx styling for form
  const inputStyle = {
    border: "0.8px solid white",
    borderRadius: "0.4rem",
    backgroundColor: "transparent",
    color: "white",
    padding: "0.5rem",
    fontSize: "20px",
    fontWeight: "200px",
    width: "70%",
    display: "inline-block",
    height: "40px"
  };

  const formStyle = {
    border: "none",
    display: "flex",
    flex: "row",
    boxShadow: "none"
  };

  const buttonStyle = {
    padding: "10px 50px",
    border: "none",
    borderRadius: "0.4rem",
    fontWeight: "500",
    fontSize: "20px",
    height: "50px",
    marginLeft: "20px"
  };

  return (
    <form onSubmit={formSubmit} style={formStyle}>
      <input
        style={inputStyle}
        type="text"
        name="city"
        placeholder="Enter a city..."
        onChange={(e) => setNewCity(e.target.value)}
        value={newCity}
      />
      <button style={buttonStyle} onClick={formSubmit}>
        Submit
      </button>
    </form>
  );
}
