'use client';

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // auto-registers Chart components

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submit
  const handlePredict = async () => {
    if (!file) {
      alert("Please select a .txt file first!");
      return;
    }

    setLoading(true);

    try {
      // We create a FormData to pass the file to our API
      const formData = new FormData();
      formData.append("sensorFile", file);

      // POST to /api/predict
      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error in prediction request");
      }

      const data = await response.json();
      // 'data' might have classification results & RUL predictions
      setPredictionData(data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Error predicting. Check console for details.");
    }
    setLoading(false);
  };

  // If we have predictions, let's build chart data
  // Example: data.predRUL might be an array of RUL predictions over cycles
  const chartData = {
    labels: predictionData?.cycles || [],
    datasets: [
      {
        label: "Predicted RUL",
        data: predictionData?.rul || [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "True RUL (if available)",
        data: predictionData?.trueRUL || [],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Predict Machine Health</h1>

        {/* File input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Upload Sensor Data (.txt):
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="block w-full text-sm border border-gray-300 rounded p-2"
          />
        </div>

        {/* Predict button */}
        <button
          onClick={handlePredict}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {/* Show predictions */}
        {predictionData && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Prediction Results</h2>

            {/* Classification stats */}
            <p>
              <strong>Classification Accuracy:</strong>{" "}
              {predictionData.classAccuracy
                ? `${(predictionData.classAccuracy * 100).toFixed(2)}%`
                : "N/A"}
            </p>
            <p>
              <strong>Avg RUL Error (MAE):</strong>{" "}
              {predictionData.rulMAE
                ? predictionData.rulMAE.toFixed(2)
                : "N/A"}{" "}
              cycles
            </p>

            {/* Chart */}
            <div className="mt-4">
              <Line data={chartData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
