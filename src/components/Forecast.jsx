import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

const weatherIcons = {
  Clear: WiDaySunny,
  Clouds: WiCloudy,
  Rain: WiRain,
  Snow: WiSnow,
  Thunderstorm: WiThunderstorm,
};

const getColorClass = (weather) => {
  switch (weather) {
    case 'Clear': return 'from-yellow-400 to-orange-500';
    case 'Clouds': return 'from-gray-400 to-gray-600';
    case 'Rain': return 'from-blue-400 to-blue-600';
    case 'Snow': return 'from-indigo-400 to-indigo-600';
    case 'Thunderstorm': return 'from-purple-400 to-purple-600';
    default: return 'from-green-400 to-green-600';
  }
};

const getDayOfWeek = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date(date).getDay()];
};

const ForecastCard = ({ forecastData }) => {
  const getUniqueForecasts = () => {
    const uniqueForecasts = [];
    const seenDates = new Set();
    for (const forecast of forecastData.list) {
      const date = new Date(forecast.dt * 1000).toDateString();
      if (!seenDates.has(date) && uniqueForecasts.length < 5) {
        seenDates.add(date);
        uniqueForecasts.push(forecast);
      }
    }
    return uniqueForecasts;
  };

  const renderForecastCard = (day, index) => {
    const date = new Date(day.dt * 1000);
    const Icon = weatherIcons[day.weather[0].main] || WiDaySunny;
    const colorClass = getColorClass(day.weather[0].main);

    return (
      <div key={index} className={`bg-gradient-to-br ${colorClass} p-4 rounded-lg shadow-md flex flex-col items-center`}>
        <p className="font-bold text-lg text-white">{getDayOfWeek(date)}</p>
        <Icon className="text-5xl my-2 text-white" />
        <p className="text-2xl font-bold text-white">{day.main.temp.toFixed(1)}°C</p>
        <p className="text-sm text-white capitalize">{day.weather[0].description}</p>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {getUniqueForecasts().map(renderForecastCard)}
      </div>
    </div>
  );
};

export default ForecastCard;



