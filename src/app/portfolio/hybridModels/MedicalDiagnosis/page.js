'use client';

import { useState } from 'react';

export default function DiagnosisPage() {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [medicalImage, setMedicalImage] = useState(null);
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [highlightedImageUrl, setHighlightedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle file input change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMedicalImage(e.target.files[0]);
    }
  };

  // Submit patient data and medical image to the backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDiagnosisResult(null);
    setHighlightedImageUrl(null);

    try {
      const formData = new FormData();
      formData.append('patientName', patientName);
      formData.append('patientAge', patientAge);
      if (medicalImage) {
        formData.append('medicalImage', medicalImage);
      }

      // Call your backend endpoint for diagnosis
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Diagnosis failed. Please try again.');
      }

      const data = await response.json();
      // Expected response: { diagnosis: "Diagnosis text...", highlightedImageUrl: "https://..." }
      setDiagnosisResult(data.diagnosis);
      if (data.highlightedImageUrl) {
        setHighlightedImageUrl(data.highlightedImageUrl);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Medical Diagnosis</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-lg font-medium text-gray-700">
              Patient Name
            </label>
            <input
              id="patientName"
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter patient's name"
            />
          </div>

          {/* Patient Age */}
          <div>
            <label htmlFor="patientAge" className="block text-lg font-medium text-gray-700">
              Patient Age
            </label>
            <input
              id="patientAge"
              type="number"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter patient's age"
            />
          </div>

          {/* Medical Image Upload */}
          <div>
            <label htmlFor="medicalImage" className="block text-lg font-medium text-gray-700">
              Upload Medical Image
            </label>
            <input
              id="medicalImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mt-1 w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Processing...' : 'Submit for Diagnosis'}
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </form>

        {/* Diagnosis Results */}
        {diagnosisResult && (
          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Diagnosis Results</h2>
            <p className="mb-4 text-gray-800">{diagnosisResult}</p>
            {highlightedImageUrl && (
              <div>
                <h3 className="text-xl font-medium mb-2">Highlighted Abnormalities</h3>
                <img
                  src={highlightedImageUrl}
                  alt="Diagnosis with highlighted abnormalities"
                  className="w-full rounded shadow"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
