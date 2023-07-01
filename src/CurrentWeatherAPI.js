/********************
    
    Assignment 5  WeatherAPI Component
    Name: Maryam Ayemlo Gambo
    Date:March 3, 2023
    Description:Javascript framework using React:Retrieve Weather information from API

*********************/

const API_KEY = "de0cb66a1c8cd8f1743faac4767a99b9";

const makeIconURL = (iconID) =>
  `https://openweathermap.org/img/wn/${iconID}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const weatherData = await fetch(URL).then((response) => response.json());

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity } = {},
    wind: { speed } = {},
    sys: { country } = {},
    name
  } = weatherData;

  if (!weather) return null;
  const { description = " ", icon = "" } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    description,
    iconURL: makeIconURL(icon)
  };
};

export { getFormattedWeatherData };
