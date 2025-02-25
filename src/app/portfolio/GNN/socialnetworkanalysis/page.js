'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the ForceGraph2D component to avoid SSR issues with React
const ForceGraph2D = dynamic(() => import("react-force-graph").then(mod => mod.ForceGraph2D), { ssr: false });

export default function Home() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [predictions, setPredictions] = useState([]);

  // Fetch network data from the backend
  useEffect(() => {
    fetch("/api/graph") // Assuming you have a backend API serving graph data
      .then(res => res.json())
      .then(data => setGraphData(data));
  }, []);

  // Handle the prediction request to the FastAPI backend
  const fetchPredictions = async () => {
    const res = await fetch("http://localhost:8000/predict", { method: "POST" });
    const data = await res.json();
    setPredictions(data.predictions);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Social Network Analysis</h1>

      {/* Graph Visualization */}
      <div className="mb-6">
        <ForceGraph2D
          graphData={graphData}
          nodeAutoColorBy="group"
          nodeLabel="id"
          linkDirectionalParticles={4}
          linkDirectionalParticleSpeed={0.01}
        />
      </div>

      {/* Prediction Button */}
      <button
        onClick={fetchPredictions}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Predict Communities
      </button>

      {/* Predictions Display */}
      {predictions.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Predictions</h2>
          <pre className="text-sm text-gray-700">{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
