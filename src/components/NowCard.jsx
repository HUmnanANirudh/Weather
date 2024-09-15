const NowCard = ({ weatherData }) => {
    const { main, weather, name, sys } = weatherData;
    const date = new Date().toLocaleDateString();
  
    return (
      <div className="now-card bg-gray-900 text-white p-4 rounded-md">
        <h2 className="text-2xl">{name}</h2>
        <p>{date}</p>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="weather icon" />
        <p className="text-5xl">{(main.temp).toFixed(1)}°C</p>
        <p>{weather[0].description}</p>
        <p>Feels like: {(main.feels_like).toFixed(1)}°C</p>
      </div>
    );
  };
  
  export default NowCard;
  