'use client';

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  // Handle Text Search
  const handleTextSearch = async () => {
    if (query.trim() === "") return;

    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  // Handle Image Upload & Search
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Multimodal Search Engine</h1>

      {/* Search Bar */}
      <div className="flex gap-2 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search with text..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <button
          onClick={handleTextSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <p className="text-gray-500 my-4">or</p>

      {/* Image Upload */}
      <div className="p-4 border-dashed border-2 border-gray-300 rounded-lg text-center w-full max-w-lg">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" />
        <label htmlFor="imageUpload" className="cursor-pointer">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-48 object-cover rounded-md" />
          ) : (
            <p className="text-gray-600">Click to upload an image</p>
          )}
        </label>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full max-w-3xl">
        {results.length > 0 ? (
          results.map((image, index) => (
            <img key={index} src={image} alt={`Result ${index}`} className="rounded-lg shadow" />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No results found</p>
        )}
      </div>
    </div>
  );
}
