'use client';

import { useState } from "react";

export default function Dashboard() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));

    // Simulate processing and displaying results
    setTimeout(() => {
      setResults({
        diagnosis: "Pneumonia detected",
        confidence: "92%",
        heatmap: "/heatmap-placeholder.png", // Replace with actual heatmap result
      });
    }, 2000);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-6`}>
      
      {/* Header */}
      <div className="flex justify-between w-full max-w-4xl mb-6">
        <h1 className="text-3xl font-bold">Medical Imaging Dashboard</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Upload Section */}
      <div className="border-dashed border-2 border-gray-400 p-6 rounded-lg text-center w-full max-w-lg bg-white dark:bg-gray-800">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" />
        <label htmlFor="imageUpload" className="cursor-pointer">
          {image ? (
            <img src={image} alt="Uploaded X-ray/MRI" className="w-full h-48 object-cover rounded-md" />
          ) : (
            <p className="text-gray-500">Click to upload an X-ray or MRI scan</p>
          )}
        </label>
      </div>

      {/* Results Section */}
      {results && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg w-full max-w-lg bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2">Diagnosis:</h2>
          <p className="text-gray-700 dark:text-gray-300">{results.diagnosis}</p>
          <p className="text-gray-700 dark:text-gray-300">Confidence: {results.confidence}</p>

          {/* Heatmap Result */}
          <h2 className="text-lg font-semibold mt-4">Heatmap:</h2>
          <img src={results.heatmap} alt="Heatmap" className="w-full h-48 object-cover rounded-md mt-2" />
        </div>
      )}
    </div>
  );
}
