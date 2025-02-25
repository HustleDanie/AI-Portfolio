'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function Forecast() {
  const [input, setInput] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simulated API call to fetch forecast data
  const fetchForecastData = async (query) => {
    // In a real-world scenario, you would replace this with a fetch call to your backend API.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulated forecast data (e.g., dates with forecast values)
        const simulatedData = [
          { date: '2023-01-01', value: 100 },
          { date: '2023-01-02', value: 105 },
          { date: '2023-01-03', value: 102 },
          { date: '2023-01-04', value: 110 },
          { date: '2023-01-05', value: 115 },
          { date: '2023-01-06', value: 120 },
          { date: '2023-01-07', value: 125 },
        ];
        resolve(simulatedData);
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with an actual API call if needed
      const data = await fetchForecastData(input);
      setForecastData(data);
    } catch (err) {
      console.error('Error fetching forecast:', err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Time-Series Forecasting</h1>
      
      {/* Data Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-lg font-medium mb-1">
            Enter Stock Symbol or Data Source:
          </label>
          <input
            type="text"
            id="query"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., AAPL or weather_station_1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Fetching Forecast...' : 'Get Forecast'}
        </button>
      </form>

      {/* Visual Chart for Forecast Results */}
      {forecastData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Forecast Results</h2>
          <LineChart width={800} height={400} data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      )}
    </div>
  );
}
