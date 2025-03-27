'use client';

// pages/index.js
import { useState } from 'react';

function UploadSection() {
  const [contentPreview, setContentPreview] = useState(null);
  const [stylePreview, setStylePreview] = useState(null);

  const handleFileChange = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement file upload API call
    alert('Upload functionality not implemented yet.');
  };

  return (
    <section id="upload" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Images</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Content Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setContentPreview)}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4 file:rounded-full
              file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700"
          />
          {contentPreview && (
            <img
              src={contentPreview}
              alt="Content Preview"
              className="mt-2 rounded-lg shadow-sm"
            />
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Style Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setStylePreview)}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4 file:rounded-full
              file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700"
          />
          {stylePreview && (
            <img
              src={stylePreview}
              alt="Style Preview"
              className="mt-2 rounded-lg shadow-sm"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </section>
  );
}

function CompareSection() {
  // Replace these paths with the actual image sources or data from your backend.
  const originalImage = '/images/original.jpg';
  const processedImage = '/images/processed.jpg';

  return (
    <section id="compare" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Before and After Comparison
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center">
        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium">Original</span>
          <img
            src={originalImage}
            alt="Original"
            className="w-64 h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium">Processed</span>
          <img
            src={processedImage}
            alt="Processed"
            className="w-64 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  // Example image paths; in practice, these might be fetched from an API.
  const artworks = [
    '/gallery/artwork1.jpg',
    '/gallery/artwork2.jpg',
    '/gallery/artwork3.jpg',
    '/gallery/artwork4.jpg',
  ];

  return (
    <section id="gallery" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artworks.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Artwork ${index + 1}`}
              className="w-full h-auto hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  // 'activeTab' state to toggle between sections
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div>
      {/* Sticky header navigation */}
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('upload')}
            className={`text-white hover:text-gray-300 ${
              activeTab === 'upload' ? 'underline' : ''
            }`}
          >
            Upload
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`text-white hover:text-gray-300 ${
              activeTab === 'compare' ? 'underline' : ''
            }`}
          >
            Compare
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`text-white hover:text-gray-300 ${
              activeTab === 'gallery' ? 'underline' : ''
            }`}
          >
            Gallery
          </button>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        {activeTab === 'upload' && <UploadSection />}
        {activeTab === 'compare' && <CompareSection />}
        {activeTab === 'gallery' && <GallerySection />}
      </main>
    </div>
  );
}
