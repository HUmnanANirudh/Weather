import React, { useState } from 'react';
import { TiWeatherWindy } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaBars } from "react-icons/fa"; // Added this import for the menu icon

const Navbar = ({ city, setCity, getWeatherByCity, getWeatherByLocation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black w-full px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-white">
            <TiWeatherWindy className="text-white text-3xl sm:text-4xl" />
            <span className="ml-2 text-xl sm:text-2xl text-white font-medium">WeatherIo</span>
          </div>

          {/* Search bar - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex items-center bg-black text-white border border-gray-500 rounded-full px-4 py-2 w-96">
            <CiSearch className="text-white text-xl mr-2" />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-black text-white outline-none border-none w-full placeholder-gray-400"
              placeholder="Search for the City"
            />
            <button
              onClick={getWeatherByCity}
              className="ml-2 text-white px-4 py-2 rounded-full"
            >
              Search
            </button>
          </div>

          {/* Current Location button - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex items-center bg-purple text-white rounded-full px-4 py-1">
            <FaLocationCrosshairs className="mr-2" />
            <button onClick={getWeatherByLocation} className="px-4 py-1">
              Current Location
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <FaBars className="text-2xl" /> {/* Changed to FaBars from react-icons */}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex items-center bg-black text-white border border-gray-500 rounded-full px-4 py-2 mb-4">
              <CiSearch className="text-white text-xl mr-2" />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-black text-white outline-none border-none w-full placeholder-gray-400"
                placeholder="Search for the City"
              />
              <button
                onClick={() => {
                  getWeatherByCity();
                  setIsMenuOpen(false);
                }}
                className="ml-2 text-white px-4 py-2 rounded-full"
              >
                Search
              </button>
            </div>
            <div className="flex items-center justify-center bg-purple-600 text-white rounded-full px-4 py-1">
              <FaLocationCrosshairs className="mr-2" />
              <button
                onClick={() => {
                  getWeatherByLocation();
                  setIsMenuOpen(false);
                }}
                className="px-4 py-1"
              >
                Current Location
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;