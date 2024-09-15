const HourlyTempCard = ({ hourlyData }) => {
  return (
    <div className="hourly-temp-card bg-gray-900 text-white p-4 rounded-md">
      <h2 className="text-2xl">Hourly Temperature</h2>
      <div className="hourly-grid grid grid-cols-4 gap-4">
        {hourlyData.slice(0, 4).map((hour, index) => (
          <div key={index} className="hourly-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p>{hour.main.temp.toFixed(1)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyTempCard;
