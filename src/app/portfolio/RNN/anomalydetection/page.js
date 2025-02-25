"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [sensorData, setSensorData] = useState([]);
  const [metrics, setMetrics] = useState({ precision: 0.95, recall: 0.92, f1: 0.93 });

  useEffect(() => {
    const fetchData = () => {
      // Mock real-time data (Replace with API/WebSocket)
      const newSensor = {
        id: sensorData.length + 1,
        value: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toLocaleTimeString(),
        anomaly: Math.random() > 0.8, // 20% chance of being an anomaly
      };
      setSensorData((prev) => [newSensor, ...prev.slice(0, 9)]); // Keep last 10 entries
    };

    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, [sensorData]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Live Sensor Dashboard</h1>

      {/* Performance Metrics */}
      <div className="grid grid-cols-3 gap-4 text-center mb-6">
        {["Precision", "Recall", "F1-score"].map((metric, i) => (
          <div key={metric} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{metric}</h3>
            <p className="text-xl font-bold text-blue-600">
              {Object.values(metrics)[i].toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Sensor Data Table */}
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Recent Sensor Data</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Timestamp</th>
              <th className="p-2 border">Value</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {sensorData.map((sensor) => (
              <tr
                key={sensor.id}
                className={sensor.anomaly ? "bg-red-100 text-red-600" : "bg-green-100"}
              >
                <td className="p-2 border">{sensor.timestamp}</td>
                <td className="p-2 border">{sensor.value}</td>
                <td className="p-2 border font-bold">
                  {sensor.anomaly ? "⚠️ Anomaly" : "✅ Normal"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
