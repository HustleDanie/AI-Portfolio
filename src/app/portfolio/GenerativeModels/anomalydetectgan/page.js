'use client';

// pages/index.js
import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const sampleData = [
  { name: 'Image 1', anomalyScore: 2.3, reconstructionError: 5.1 },
  { name: 'Image 2', anomalyScore: 1.8, reconstructionError: 4.5 },
  { name: 'Image 3', anomalyScore: 3.2, reconstructionError: 6.0 },
]

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Integrate with your backend or processing logic
    console.log('Uploading file:', selectedFile)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Anomaly Dashboard & Upload</h1>
      </header>

      {/* Dashboard Section */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow mb-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <LineChart
          width={600}
          height={300}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className="mx-auto"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="anomalyScore"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="reconstructionError"
            stroke="#82ca9d"
          />
        </LineChart>
      </section>

      {/* Upload Section */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Upload Image/Data</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto mb-4 border rounded"
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </section>
    </div>
  )
}
