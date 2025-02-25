'use client';

// pages/style-enhancement.js
import { useState } from 'react';

export default function StyleEnhancement() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [option, setOption] = useState('style_transfer');
  const [resultUrl, setResultUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image file upload.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setResultUrl(null); // Reset previous results when a new image is uploaded.
    }
  };

  // Handle option selection changes.
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  // Simulate sending the image and option to your backend.
  const handleProcessImage = async () => {
    if (!selectedFile) return;
    setLoading(true);

    // In a production app, you would construct a FormData and send the file plus the chosen option:
    // const formData = new FormData();
    // formData.append('image', selectedFile);
    // formData.append('option', option);
    // const response = await fetch('/api/process-image', { method: 'POST', body: formData });
    // const data = await response.json();
    // setResultUrl(data.processedImageUrl);

    // For demonstration, simulate an API call with a delay.
    setTimeout(() => {
      // Use a placeholder image URL to represent the processed image.
      setResultUrl('https://via.placeholder.com/500?text=Processed+Image');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Image Style Transfer & Enhancement
      </h1>

      <div className="bg-white shadow-md rounded p-6 w-full max-w-lg">
        {/* File Upload Section */}
        <div className="mb-4">
          <label
            htmlFor="imageUpload"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Upload an Image
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0 file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-700 mb-2">Preview:</p>
            <img
              src={previewUrl}
              alt="Uploaded Preview"
              className="w-full rounded shadow"
            />
          </div>
        )}

        {/* Transformation Options */}
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700 mb-2">
            Choose a Transformation:
          </p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="style_transfer"
              name="option"
              value="style_transfer"
              checked={option === 'style_transfer'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="style_transfer" className="text-gray-700">
              Style Transfer
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="super_resolution"
              name="option"
              value="super_resolution"
              checked={option === 'super_resolution'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="super_resolution" className="text-gray-700">
              Super Resolution
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="denoising"
              name="option"
              value="denoising"
              checked={option === 'denoising'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="denoising" className="text-gray-700">
              Denoising
            </label>
          </div>
        </div>

        {/* Process Button */}
        <button
          onClick={handleProcessImage}
          disabled={!selectedFile || loading}
          className={`w-full py-2 px-4 rounded text-white font-semibold ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {loading ? 'Processing...' : 'Apply Transformation'}
        </button>
      </div>

      {/* Display Processed Result */}
      {resultUrl && (
        <div className="mt-8 w-full max-w-lg bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Result</h2>
          <img
            src={resultUrl}
            alt="Processed Result"
            className="w-full rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
