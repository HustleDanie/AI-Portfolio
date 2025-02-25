'use client';

// pages/drone-dashboard.js
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components.
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function DroneDashboard() {
  // Simulated drone status
  const [droneStatus, setDroneStatus] = useState({
    battery: 100,
    altitude: 0,
    speed: 0,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  });

  // Command parameters for controlling the drone
  const [command, setCommand] = useState({
    targetAltitude: 0,
    targetSpeed: 0,
  });

  // Simulated history for altitude (for charting)
  const [altitudeHistory, setAltitudeHistory] = useState([]);

  // Simulate drone telemetry updates every second.
  useEffect(() => {
    const interval = setInterval(() => {
      setDroneStatus((prevStatus) => {
        // Simulate battery drain and update telemetry.
        const newBattery = Math.max(prevStatus.battery - Math.random() * 0.5, 0);
        // For simplicity, we assume the drone quickly reaches the target altitude and speed.
        const newAltitude = command.targetAltitude;
        const newSpeed = command.targetSpeed;
        // Simulate small changes in coordinates.
        const newCoordinates = {
          lat: prevStatus.coordinates.lat + (Math.random() - 0.5) * 0.0001,
          lng: prevStatus.coordinates.lng + (Math.random() - 0.5) * 0.0001,
        };

        // Update altitude history for visualization.
        setAltitudeHistory((prevHistory) => {
          const updatedHistory = [...prevHistory, newAltitude];
          // Keep only the last 20 entries.
          return updatedHistory.length > 20 ? updatedHistory.slice(-20) : updatedHistory;
        });

        return {
          battery: newBattery,
          altitude: newAltitude,
          speed: newSpeed,
          coordinates: newCoordinates,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [command]);

  // Handle command parameter changes.
  const handleCommandChange = (e) => {
    const { name, value } = e.target;
    setCommand((prev) => ({ ...prev, [name]: Number(value) }));
  };

  // Dummy command sending function.
  const handleSendCommand = () => {
    // In a real app, send 'command' to your drone simulation/robotics backend.
    console.log('Sending command:', command);
  };

  // Prepare chart data (e.g., altitude history).
  const chartData = {
    labels: altitudeHistory.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Altitude (m)',
        data: altitudeHistory,
        fill: false,
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Drone Control Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Drone Status Panel */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Drone Status</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Battery:</span> {droneStatus.battery.toFixed(1)}%
            </li>
            <li>
              <span className="font-semibold">Altitude:</span> {droneStatus.altitude} m
            </li>
            <li>
              <span className="font-semibold">Speed:</span> {droneStatus.speed} m/s
            </li>
            <li>
              <span className="font-semibold">Coordinates:</span> Lat: {droneStatus.coordinates.lat.toFixed(6)}, Lng: {droneStatus.coordinates.lng.toFixed(6)}
            </li>
          </ul>
        </div>
        
        {/* Drone Control Panel */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Drone Controls</h2>
          <div className="mb-4">
            <label htmlFor="targetAltitude" className="block text-lg font-medium text-gray-700 mb-2">
              Target Altitude (m)
            </label>
            <input
              type="number"
              id="targetAltitude"
              name="targetAltitude"
              value={command.targetAltitude}
              onChange={handleCommandChange}
              className="w-full p-2 border rounded"
              placeholder="Enter desired altitude"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="targetSpeed" className="block text-lg font-medium text-gray-700 mb-2">
              Target Speed (m/s)
            </label>
            <input
              type="number"
              id="targetSpeed"
              name="targetSpeed"
              value={command.targetSpeed}
              onChange={handleCommandChange}
              className="w-full p-2 border rounded"
              placeholder="Enter desired speed"
            />
          </div>
          <button
            onClick={handleSendCommand}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Send Command
          </button>
        </div>
      </div>
      
      {/* Simulation Data Visualization */}
      <div className="mt-8 bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Simulation Data: Altitude Over Time</h2>
        <div className="w-full max-w-2xl mx-auto">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
