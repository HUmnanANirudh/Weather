const HeroCard = ({ weatherData }) => {
    const { main, sys, visibility } = weatherData;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();
  
    return (
      <div className="hero-card bg-gray-900 text-white p-4 rounded-md">
        <h2 className="text-2xl">Today's Highlights</h2>
        <p>Humidity: {main.humidity}%</p>
        <p>Pressure: {main.pressure} hPa</p>
        <p>Visibility: {visibility / 1000} km</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
        <p>Feels like: {(main.feels_like - 273.15).toFixed(1)}°C</p>
      </div>
    );
  };
  
  export default HeroCard;
  