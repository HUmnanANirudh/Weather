import { TiWeatherWindy } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";


const Navbar = ({ city, setCity, getWeatherByCity, getWeatherByLocation }) => {
  return(
        <div className="navbar bg-black flex justify-between items-center w-full h-20 px-6">
          <div className="flex items-center text-white">
            <TiWeatherWindy className="text-white text-4xl" />
            <span className="ml-2 text-2xl text-white font-medium">WeatherIo</span>
          </div>
          <div className="flex items-center bg-black text-white border border-gray-500 rounded-full px-4 py-2 w-96">
            <CiSearch className="text-white text-xl mr-2" />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-black text-white outline-none border-none w-full placeholder-gray-400"
              placeholder="Search for the City"
            />
            <button
              onClick={getWeatherByCity}
              className="ml-2  text-white px-4 py-2 rounded-full"
            >
              Search
            </button>
          </div>
          <div className="flex items-center bg-purple text-white rounded-full px-4 py-1">
            <FaLocationCrosshairs className="mr-2" />
            <button onClick={getWeatherByLocation} className="px-4 py-1">
              Current Location
            </button>
          </div>
        </div>
      );
    };
export default Navbar;
