'use client';

import { useState, useEffect } from 'react';

export default function CredibilityPage() {
  const [articleText, setArticleText] = useState('');
  const [articleImage, setArticleImage] = useState(null);
  const [credibilityScore, setCredibilityScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [socketStatus, setSocketStatus] = useState('Disconnected');
  const [error, setError] = useState('');

  // Establish WebSocket connection for real-time credibility updates
  useEffect(() => {
    // Replace with your actual WebSocket endpoint
    const socket = new WebSocket('ws://localhost:4000/credibility');

    socket.onopen = () => {
      setSocketStatus('Connected');
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // Assuming the server sends messages like: { credibilityScore: 75 }
        if (data.credibilityScore !== undefined) {
          setCredibilityScore(data.credibilityScore);
        }
      } catch (err) {
        console.error('Error parsing WebSocket message:', err);
      }
    };

    socket.onerror = (err) => {
      console.error('WebSocket error:', err);
      setSocketStatus('Error');
    };

    socket.onclose = () => {
      setSocketStatus('Disconnected');
      console.log('WebSocket disconnected');
    };

    // Cleanup on component unmount
    return () => socket.close();
  }, []);

  // Handle form submission: send news article text and image to backend API for analysis
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('articleText', articleText);
      if (articleImage) {
        formData.append('articleImage', articleImage);
      }

      // Replace '/api/analyze-news' with your actual backend endpoint
      const res = await fetch('/api/analyze-news', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Analysis failed. Please try again.');
      }
      // Optionally, process response data if needed
      setArticleText('');
      setArticleImage(null);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-3xl font-bold mb-6">News Credibility Analysis</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* News Article Text Input */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="articleText">
              News Article Text
            </label>
            <textarea
              id="articleText"
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              rows={6}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the article text here..."
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="articleImage">
              Upload Article Image
            </label>
            <input
              id="articleImage"
              type="file"
              accept="image/*"
              onChange={(e) => setArticleImage(e.target.files[0])}
              className="mt-1 w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Analyzing...' : 'Submit for Analysis'}
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </form>

        {/* Real-Time Credibility Score Visualization */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Real-Time Credibility Score</h2>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold text-xl"
              style={{
                borderColor: credibilityScore !== null
                  ? credibilityScore >= 50
                    ? 'green'
                    : 'red'
                  : 'gray',
              }}
            >
              {credibilityScore !== null ? credibilityScore : '--'}
            </div>
            <p className="text-sm text-gray-600">WebSocket Status: {socketStatus}</p>
          </div>

          {/* Optional Progress Bar Visualization */}
          {credibilityScore !== null && (
            <div className="mt-4">
              <div className="h-2 w-full bg-gray-300 rounded">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${credibilityScore}%`,
                    backgroundColor: credibilityScore >= 50 ? 'green' : 'red',
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
