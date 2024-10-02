import React from 'react';

const WindSpeedCard = ({ windData }) => {
  if (!windData || typeof windData.speed === 'undefined' || typeof windData.deg === 'undefined') {
    return (
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Wind Speed</h2>
        <p>Wind data not available</p>
      </div>
    );
  }

  const getWindDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(deg / 45) % 8];
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Wind Speed</h2>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-3xl md:text-4xl font-bold">{windData.speed.toFixed(1)}</p>
          <p className="text-sm text-gray-400">m/s</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-lg md:text-xl font-semibold">{getWindDirection(windData.deg)}</p>
          <p className="text-sm text-gray-400">{windData.deg}°</p>
        </div>
      </div>
    </div>
  );
};

export default WindSpeedCard;