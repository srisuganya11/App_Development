import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../../Assets/CSS/BarGraph.css'; 

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarGraph = ({ data }) => {
  const chartData = {
    labels: ['Total Orders', 'Total Swapping Occurs'],
    datasets: [
      {
        label: 'Count',
        data: [data.totalOrders, data.totalSwapping],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
        },
        grid: {
          color: '#ddd',
        },
      },
      y: {
        ticks: {
          color: '#333',
        },
        grid: {
          color: '#ddd',
        },
      },
    },
  };

  return (
    <div className="bar-graph-container">
      <Bar data={chartData} options={options} className="bar-graph" />
    </div>
  );
};

export default BarGraph;
