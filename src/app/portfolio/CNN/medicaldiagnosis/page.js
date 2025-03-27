// pages/dashboard.js
'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components.
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [heatmapUrl, setHeatmapUrl] = useState(null);
  const [chartData, setChartData] = useState(null);

  // Handle file input changes.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Simulate sending the file to your backend and getting predictions.
  const handlePredict = async () => {
    // In a real app, you would send 'selectedFile' to your backend API.
    // For demonstration, we simulate a delayed API response.
    setTimeout(() => {
      // Simulated prediction and additional data.
      setPrediction('Pneumonia detected with 87% confidence.');
      setHeatmapUrl('https://via.placeholder.com/400x300.png?text=Heatmap');
      setChartData({
        labels: ['Healthy', 'Pneumonia', 'Other'],
        datasets: [
          {
            label: 'Probability (%)',
            data: [10, 87, 3],
            backgroundColor: ['#10B981', '#EF4444', '#3B82F6'],
          },
        ],
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Medical Image Diagnosis Dashboard
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded">
        {/* File Upload Section */}
        <div className="mb-4">
          <label
            htmlFor="fileUpload"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Upload Medical Image
          </label>
          <input
            type="file"
            id="fileUpload"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Image Preview:</h2>
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-auto rounded shadow"
            />
          </div>
        )}

        {/* Analyze Button */}
        {selectedFile && (
          <button
            onClick={handlePredict}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Analyze Image
          </button>
        )}

        {/* Display Prediction, Heatmap, and Chart Data */}
        {prediction && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Prediction:</h2>
            <p className="text-gray-800 mb-4">{prediction}</p>

            {heatmapUrl && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Heatmap:</h2>
                <img
                  src={heatmapUrl}
                  alt="Heatmap"
                  className="w-full h-auto rounded shadow"
                />
              </div>
            )}

            {chartData && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Additional Data:</h2>
                <Bar data={chartData} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
