const ForecastCard = ({ forecastData }) => {
  return (
    <div className="forecast-card bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">5-Day Forecast</h2>
      <div className="forecast-grid grid grid-cols-2 md:grid-cols-5 gap-6">
        {forecastData.list.slice(0, 5).map((day, index) => (
          <div
            key={index}
            className="forecast-item bg-gray-800 p-4 rounded-md flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <p className="text-lg font-semibold mb-2">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
              className="w-16 h-16 mb-2"
            />
            <p className="text-xl font-bold">{day.main.temp.toFixed(1)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
