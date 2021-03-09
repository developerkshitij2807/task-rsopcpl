import React, {useState} from 'react';
import ExchangeSection from './Components/ExchangeSection.js';
import MapSection from './Components/MapSection.js';
import WeatherSection from './Components/WeatherSection.js';

function App() {
  // Using IP Adress to fetch the client Location
  const [details, setDetails] = useState(null);

  const getUserGeoLocationDetails = () => {
    fetch(
      'https://geolocation-db.com/json/e18cd550-7ab3-11eb-b603-3d466becf114'
    )
      .then((response) => response.json())
      .then((data) => handleData(data));
  };

  getUserGeoLocationDetails();

  // Taking details data and passing it forward to get Time
  const handleData = (data) => {
    setDetails(data);
  };

  // const getTime = (details) => {
  //   fetch(
  //     `http://api.timezonedb.com/v2.1/get-time-zone?key=TUI1T2AYCWD2&format=json&by=position&lat=${details.latitude}&lng=${details.longitude}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setTime(new Date(data.formatted)));
  // };
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      <WeatherSection details={details} />
      <div className='ml-10 w-1/2'>
        {details && <MapSection details={details} />}
        <ExchangeSection />
      </div>
    </div>
  );
}

export default App;
