'use client';

import { useState } from "react";

export default function NLPPlatform() {
  const [activeTab, setActiveTab] = useState("summarization");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    if (!inputText.trim()) return;
    setLoading(true);

    const response = await fetch("/api/nlp-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: activeTab, text: inputText }),
    });

    const data = await response.json();
    setOutputText(data.result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">NLP Task Platform</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        {["summarization", "translation", "qa"].map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setOutputText(""); }}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Input Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
          placeholder={`Enter text for ${activeTab}...`}
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleProcess}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>

      {/* Output Card */}
      {outputText && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-lg">
          <h2 className="text-lg font-semibold">Output:</h2>
          <p className="text-gray-700 mt-2">{outputText}</p>
        </div>
      )}
    </div>
  );
}
