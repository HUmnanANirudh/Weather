import React from 'react';

const HeroCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.sys) {
    return (
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Today's Highlights</h2>
        <p>Weather data not available</p>
      </div>
    );
  }

  const { main, sys, visibility } = weatherData;
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const highlights = [
    { label: 'Humidity', value: `${main.humidity}%`, icon: '💧' },
    { label: 'Pressure', value: `${main.pressure} hPa`, icon: '🔽' },
    { label: 'Visibility', value: `${(visibility / 1000).toFixed(1)} km`, icon: '👁️' },
    { label: 'Feels Like', value: `${(main.feels_like - 273.15).toFixed(1)}°C`, icon: '🌡️' },
    { label: 'Sunrise', value: sunrise, icon: '🌅' },
    { label: 'Sunset', value: sunset, icon: '🌇' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Today's Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {highlights.map((item, index) => (
          <div key={index} className="bg-gray-700 bg-opacity-50 p-4 rounded-md transition-all duration-300 hover:bg-opacity-70">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{item.icon}</span>
              <h3 className="text-lg font-semibold">{item.label}</h3>
            </div>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;