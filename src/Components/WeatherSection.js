import React from 'react';
import WeatherIcons from './WeatherIcons';

const WeatherSection = ({details}) => {
  // api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=d33e7edab8d411729416825ab6073a0
  return (
    <section className='weather-section'>
      {details && (
        <h1 className='text-2xl font-semibold'>
          {details.city}, {details.country_code}
        </h1>
      )}
      <WeatherIcons type='overcast' />
      <button className='flex justify-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-semibold rounded-full focus:outline-none'>
        Next 3 days forecast
      </button>
    </section>
  );
};

export default WeatherSection;
