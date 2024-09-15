const WindSpeedCard = ({ windData }) => {
    return (
      <div className="wind-speed-card bg-gray-900 text-white p-4 rounded-md">
        <h2 className="text-2xl">Wind Speed</h2>
        <p>{windData.speed} m/s</p>
        <p>Direction: {windData.deg}°</p>
      </div>
    );
  };
  
export default WindSpeedCard;
  