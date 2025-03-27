'use client';

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle text generation
  const handleGenerateText = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setGeneratedText("");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: inputText }),
    });

    const data = await response.json();
    setGeneratedText(data.generatedText);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Custom GPT Text Generator</h1>

      {/* Input Box */}
      <textarea
        className="border border-gray-300 p-3 rounded-lg w-full max-w-lg h-32"
        placeholder="Enter your text prompt..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <button
        onClick={handleGenerateText}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Text"}
      </button>

      {/* Output Box */}
      {generatedText && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-2">Generated Text:</h2>
          <p className="text-gray-700">{generatedText}</p>
        </div>
      )}
    </div>
  );
}
