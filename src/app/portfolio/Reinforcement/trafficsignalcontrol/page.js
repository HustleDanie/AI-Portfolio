"use client";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Dummy initial traffic signals with positions (latitude, longitude) and states.
const initialSignals = [
  { id: 1, position: [40.7128, -74.0060], state: "green" },
  { id: 2, position: [40.7138, -74.0050], state: "red" },
  { id: 3, position: [40.7148, -74.0040], state: "yellow" },
];

export default function TrafficDashboard() {
  // State for traffic signals
  const [signals, setSignals] = useState(initialSignals);
  // Optimization metrics (simulate congestion reduction percentage)
  const [metrics, setMetrics] = useState({ congestionReduction: 20 });

  // Simulate real-time updates every 5 seconds:
  useEffect(() => {
    const interval = setInterval(() => {
      setSignals((prev) =>
        prev.map((signal) => {
          // Randomly change the state among red, yellow, green.
          const states = ["red", "yellow", "green"];
          const randomState = states[Math.floor(Math.random() * states.length)];
          return { ...signal, state: randomState };
        })
      );
      // Simulate an update to optimization metrics.
      setMetrics({ congestionReduction: Math.floor(Math.random() * 40) + 10 });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual override: update a signal state when a user clicks a button.
  const overrideSignal = (id, newState) => {
    setSignals((prev) =>
      prev.map((signal) =>
        signal.id === id ? { ...signal, state: newState } : signal
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        City Traffic Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Map View */}
        <div className="md:col-span-2">
          <MapContainer
            center={[40.7128, -74.0060]}
            zoom={15}
            className="h-96 w-full rounded-lg shadow"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {signals.map((signal) => (
              <Marker key={signal.id} position={signal.position}>
                <Popup>
                  Signal #{signal.id} — Status:{" "}
                  <span
                    className={`font-bold ${
                      signal.state === "red"
                        ? "text-red-600"
                        : signal.state === "yellow"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {signal.state}
                  </span>
                </Popup>
              </Marker>
            ))}
            {/* Optionally draw a polyline connecting signals to visualize traffic flow */}
            <Polyline
              positions={signals.map((signal) => signal.position)}
              color="blue"
            />
          </MapContainer>
        </div>
        {/* Control Panel */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Traffic Signal Control</h2>
          <div className="space-y-4">
            {signals.map((signal) => (
              <div key={signal.id} className="border p-2 rounded-md">
                <p className="font-medium">Signal #{signal.id}</p>
                <p>
                  Current State:{" "}
                  <span
                    className={`font-bold ${
                      signal.state === "red"
                        ? "text-red-600"
                        : signal.state === "yellow"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {signal.state}
                  </span>
                </p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => overrideSignal(signal.id, "red")}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Red
                  </button>
                  <button
                    onClick={() => overrideSignal(signal.id, "yellow")}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Yellow
                  </button>
                  <button
                    onClick={() => overrideSignal(signal.id, "green")}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Green
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Optimization Metrics */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Optimization Metrics</h2>
            <p>
              Congestion Reduction:{" "}
              <span className="font-bold">{metrics.congestionReduction}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
