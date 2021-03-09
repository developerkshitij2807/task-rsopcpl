import React from 'react';

const ExchangeSection = () => {
  return (
    <table class='table-auto mt-5'>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Price</th>
          <th>%Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EURUSD</td>
          <td>1.14702</td>
          <td className='text-green-600'>+0.21%</td>
        </tr>
        <tr class='bg-emerald-200'>
          <td>USDCHF</td>
          <td>0.9866</td>
          <td className='text-red-600'>-0.15%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExchangeSection;
