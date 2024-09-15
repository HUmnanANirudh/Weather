const ForecastCard = ({ forecastData }) => {
  return (
    <div className="forecast-card bg-gray-900 text-white p-4 rounded-md">
      <h2 className="text-2xl">5-Day Forecast</h2>
      <div className="forecast-grid grid grid-cols-5 gap-4">
        {forecastData.list.slice(0, 5).map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" />
            <p>{day.main.temp.toFixed(1)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
