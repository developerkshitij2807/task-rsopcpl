import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const MapSection = ({details}) => {
  const [viewPort, setViewPort] = useState({
    latitude: details.latitude,
    longitude: details.longitude,
    height: '20vh',
    width: '50vh',
    zoom: 11,
  });
  return (
    <ReactMapGL
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => {
        setViewPort(viewport);
      }}></ReactMapGL>
  );
};

export default MapSection;
