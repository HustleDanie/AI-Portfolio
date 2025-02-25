'use client';

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle Image Generation
  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);

    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setImages([data.imageUrl, ...images]); // Add new image to grid
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">AI Image Generator</h1>

      {/* Prompt Input */}
      <div className="flex w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter a prompt..."
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={generateImage}
          className="bg-blue-500 text-white px-4 py-3 rounded-r-lg"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Image Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow">
            <img src={image} alt="Generated" className="w-full h-48 object-cover rounded-md" />
            <div className="flex justify-between mt-2">
              <a href={image} download className="text-blue-500 text-sm">Download</a>
              <button className="text-blue-500 text-sm" onClick={() => navigator.clipboard.writeText(image)}>Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
