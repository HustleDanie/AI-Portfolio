// pages/dashboard.js
'use client';

import Head from "next/head";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Sample forecasted data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Forecast",
        data: [10, 20, 15, 30, 25],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Forecasted Data" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Chart Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl mb-4">Forecasted Data</h2>
        <Line data={data} options={options} />
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl mb-4">Model Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Accuracy</td>
                <td className="px-6 py-4 whitespace-nowrap">95%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Precision</td>
                <td className="px-6 py-4 whitespace-nowrap">92%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Recall</td>
                <td className="px-6 py-4 whitespace-nowrap">90%</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
