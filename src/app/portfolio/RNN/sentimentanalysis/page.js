"use client";
import { useState } from "react";
import Head from "next/head";

export default function TextAnalysis() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (e) => setText(e.target.result);
      reader.readAsText(uploadedFile);
      setFile(uploadedFile.name);
    }
  };

  const analyzeText = async () => {
    if (!text.trim()) return alert("Please enter or upload text");

    // Mock AI prediction (replace with real API)
    setResult(`🔍 AI Analysis: This text has ${text.split(" ").length} words.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Head>
        <title>AI Text Analyzer</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">AI Text Analyzer</h1>

      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Text Input</h2>

        <textarea
          className="w-full p-3 border rounded mb-4"
          rows="6"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="mb-4">
          <input type="file" accept=".txt" onChange={handleFileUpload} className="mb-2" />
          {file && <p className="text-sm text-gray-600">📄 {file}</p>}
        </div>

        <button
          onClick={analyzeText}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Analyze
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">Results:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
