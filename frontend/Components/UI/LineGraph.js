import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data }) => {
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return <Line data={lineData} />;
};

export default LineGraph;
