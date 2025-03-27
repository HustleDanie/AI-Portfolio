'use client';

import { useState } from 'react';

export default function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [sentimentScore, setSentimentScore] = useState(null);
  const [heatmapUrl, setHeatmapUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input change
  const handleTextChange = (e) => setText(e.target.value);

  // Handle image file input change
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // Submit the form data to your backend API endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a FormData instance to package text and image data
    const formData = new FormData();
    formData.append('text', text);
    if (image) {
      formData.append('image', image);
    }

    try {
      // Replace '/api/sentiment' with your actual backend endpoint
      const response = await fetch('/api/sentiment', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error during sentiment analysis');
      }

      const data = await response.json();
      // Assuming your API returns an object with sentimentScore and heatmapUrl
      setSentimentScore(data.sentimentScore);
      setHeatmapUrl(data.heatmapUrl);
    } catch (error) {
      console.error(error);
      // You can set error state here if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sentiment Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Text Input */}
        <div>
          <label htmlFor="text" className="block text-lg font-medium">
            Enter Text:
          </label>
          <textarea
            id="text"
            className="mt-2 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={text}
            onChange={handleTextChange}
            placeholder="Type your text here..."
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-lg font-medium">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {/* Display Results */}
      {sentimentScore !== null && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p className="text-lg">
            <strong>Sentiment Score:</strong> {sentimentScore}
          </p>
          {heatmapUrl && (
            <div className="mt-6">
              <h3 className="text-xl font-medium">Heatmap:</h3>
              <img
                src={heatmapUrl}
                alt="Sentiment Heatmap"
                className="mt-2 rounded shadow-lg"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
