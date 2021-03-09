import React from 'react';

const WeatherIcons = ({type, value}) => {
  if (type === 'overcast') {
    return (
      <div className='flex justify-start w-full items-center'>
        <img
          src='https://png.pngtree.com/png-vector/20190627/ourlarge/pngtree-cloudy-icon-design-png-image_1515876.jpg'
          alt='cloudy'
          className='h-20 w-auto'
        />
        <h2 className='text-5xl font-bold'>8°C</h2>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default WeatherIcons;
