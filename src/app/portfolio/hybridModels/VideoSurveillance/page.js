'use client';

import { useState, useEffect } from 'react';

export default function LiveStreamPage() {
  const [alerts, setAlerts] = useState([]);
  const [socketStatus, setSocketStatus] = useState('Disconnected');

  useEffect(() => {
    // Connect to the WebSocket server (replace with your WebSocket endpoint)
    const socket = new WebSocket('ws://localhost:4000');

    socket.onopen = () => {
      console.log('WebSocket connected');
      setSocketStatus('Connected');
    };

    socket.onmessage = (event) => {
      try {
        // Assume the server sends messages in JSON format:
        // { anomaly: "Motion detected", timestamp: "2025-02-08T12:34:56Z" }
        const data = JSON.parse(event.data);
        // Prepend the new alert to the list of alerts
        setAlerts((prevAlerts) => [data, ...prevAlerts]);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setSocketStatus('Error');
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
      setSocketStatus('Disconnected');
    };

    // Cleanup the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Live Video Stream</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video Stream Section */}
          <div className="w-full md:w-2/3">
            <div className="relative">
              <video
                className="w-full rounded shadow-lg"
                controls
                autoPlay
                muted
                // Replace the source with your actual live stream URL or HLS source
                // For HLS streaming, you might need a library like hls.js.
              >
                <source src="/path/to/your/live-stream.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Display the current WebSocket connection status */}
              <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded">
                {socketStatus}
              </div>
            </div>
          </div>

          {/* Anomaly Alerts Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Anomaly Alerts</h2>
            <div className="max-h-96 overflow-y-auto space-y-4">
              {alerts.length === 0 ? (
                <p className="text-gray-500">No alerts detected yet.</p>
              ) : (
                alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="p-4 border border-red-300 bg-red-50 rounded shadow-sm"
                  >
                    <p className="text-red-700 font-medium">
                      {alert.anomaly}
                    </p>
                    {alert.timestamp && (
                      <p className="text-sm text-gray-600">
                        {new Date(alert.timestamp).toLocaleString()}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
