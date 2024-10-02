import React from 'react';

const HourlyTempCard = ({ hourlyData }) => {
  if (!hourlyData || !Array.isArray(hourlyData) || hourlyData.length === 0) {
    return (
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Hourly Temperature</h2>
        <p>Hourly data not available</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Hourly Temperature</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {hourlyData.slice(0, 4).map((hour, index) => (
          <div key={index} className="bg-gray-700 bg-opacity-50 p-4 rounded-md transition-all duration-300 hover:bg-opacity-70 flex flex-col items-center">
            <p className="text-sm text-gray-300 mb-2">
              {new Date(hour.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
            <p className="text-3xl font-bold">{hour.main.temp.toFixed(1)}°C</p>
            {hour.weather && hour.weather[0] && (
              <img 
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} 
                alt={hour.weather[0].description}
                className="w-12 h-12 mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyTempCard;