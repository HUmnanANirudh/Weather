import React from 'react';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';

const NowCard = ({ weatherData }) => {
  const { main, weather, name, sys, wind } = weatherData;
  const date = new Date().toLocaleDateString();

  return (
    <div className="now-card bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{name}, {sys.country}</h2>
        <p className="text-lg opacity-80">{date}</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <img 
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
          alt="weather icon" 
          className="w-24 h-24"
        />
        <p className="text-6xl md:text-7xl font-bold">{main.temp.toFixed(1)}°C</p>
      </div>
      <p className="text-xl md:text-2xl capitalize">{weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg p-3">
          <WiHumidity className="text-3xl" />
          <span className="text-lg">Humidity: {main.humidity}%</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg p-3">
          <WiStrongWind className="text-3xl" />
          <span className="text-lg">Wind: {wind.speed} m/s</span>
        </div>
      </div>
      <p className="text-lg">Feels like: {main.feels_like.toFixed(1)}°C</p>
    </div>
  );
};

export default NowCard;