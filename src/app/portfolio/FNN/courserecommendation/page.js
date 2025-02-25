// pages/index.js

'use client' // so we can use state, fetch, etc.

import { useState } from 'react'

export default function CourseRecommendationPage() {
  const [userId, setUserId] = useState('')
  const [courses, setCourses] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGetRanking = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/rank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      })
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }
      const data = await res.json()
      setCourses(data.courses || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Course Recommendation
      </h1>
      
      <div className="mb-4">
        <label>User ID:</label>
        <input
          className="border rounded p-2 ml-2"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      
      <button
        onClick={handleGetRanking}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Loading...' : 'Get Course Ranking'}
      </button>
      
      {error && <p className="text-red-500 mt-2">{error}</p>}
      
      {courses.length > 0 && (
        <ul className="mt-4 space-y-2">
          {courses.map((course, idx) => (
            <li key={course.course_id} className="border p-2 rounded">
              #{idx + 1} - Course ID: {course.course_id}, rating: {course.rating}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
