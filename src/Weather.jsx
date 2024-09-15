import axios from "axios";
import Navbar from "./components/Navbar";
import NowCard from "./components/NowCard";
import ForecastCard from "./components/Forecast";
import HeroCard from "./components/HeroCard";
import HourlyTempCard from "./components/HourlyTempCards";
import { useState, useEffect } from "react";

const apikey = import.meta.env.VITE_API_KEY;


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("Delhi");

  // Fetch weather data by city
  const getWeatherByCity = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );
      setWeatherData(res.data);
      getForecastData(city);
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  // Fetch forecast data for 5 days
  const getForecastData = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
      );
      setForecastData(res.data);
    } catch (err) {
      console.error("Error fetching forecast data:", err);
    }
  };

  // Fetch weather by current location
  const getWeatherByLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
        );
        setWeatherData(res.data);
        getForecastByCoords(latitude, longitude);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getForecastByCoords = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      );
      setForecastData(res.data);
    } catch (err) {
      console.error("Error fetching forecast data:", err);
    }
  };

  useEffect(() => {
    getWeatherByCity(); // Fetch default weather for Delhi on mount
  }, []);

  return (
    <div className="weather-app">
      <Navbar
        city={city}
        setCity={setCity}
        getWeatherByCity={getWeatherByCity}
        getWeatherByLocation={getWeatherByLocation}
      />
      {weatherData && forecastData && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="col-span-1">
            <NowCard weatherData={weatherData} />
            <ForecastCard forecastData={forecastData} />
          </div>
          <div className="col-span-2">
            <HeroCard weatherData={weatherData} />
            <HourlyTempCard hourlyData={forecastData.list} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
