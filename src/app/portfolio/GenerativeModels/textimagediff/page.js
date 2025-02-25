// pages/index.js

'use client';

import React, { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([])

  const handleGenerate = (e) => {
    e.preventDefault()

    // Reset state for a new generation cycle
    setIsLoading(true)
    setProgress(0)
    setImages([])

    // Simulate API call progress with a timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Simulate generated images (you could replace these URLs with your API response)
          setImages([
            'https://via.placeholder.com/300?text=Image+1',
            'https://via.placeholder.com/300?text=Image+2',
            'https://via.placeholder.com/300?text=Image+3',
            'https://via.placeholder.com/300?text=Image+4',
            'https://via.placeholder.com/300?text=Image+5',
            'https://via.placeholder.com/300?text=Image+6',
          ])
          setIsLoading(false)
          return 100
        }
        return prev + 10
      })
    }, 300) // Update progress every 300ms (approx. 3 seconds total)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Image Generator</h1>
        <p className="text-gray-600">Type a prompt, see live progress, and view generated images.</p>
      </header>

      {/* Input & Live Preview Section */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded shadow mb-8">
        <form onSubmit={handleGenerate} className="flex flex-col gap-4">
          <label className="block">
            <span className="text-gray-700">Enter Prompt:</span>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your prompt here..."
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
          <button
            type="submit"
            disabled={isLoading || prompt.trim() === ''}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Generating...' : 'Generate Images'}
          </button>
        </form>

        {/* Live Preview: Progress Bar */}
        {isLoading && (
          <div className="mt-4">
            <p className="text-gray-600">Progress: {progress}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </section>

      {/* Generated Images Grid */}
      {images.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Generated Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="bg-white p-2 rounded shadow">
                <img src={src} alt={`Generated ${index + 1}`} className="w-full h-auto rounded" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
