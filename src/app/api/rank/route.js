// app/api/rank/route.js
import { NextResponse } from 'next/server'

export async function POST(req) {
  // Parse JSON body from the request
  const { userId } = await req.json() || {}
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Missing userId in request body' },
      { status: 400 }
    )
  }
  
  // In real usage, you'd call your ML backend / Python service here,
  // or run direct inference if you can do so in Node.
  // For now, return some mock data:
  const fakeCourses = [
    { course_id: 70, rating: 4.5 },
    { course_id: 12, rating: 4.2 },
    { course_id: 2,  rating: 3.9 }
  ]
  
  return NextResponse.json({
    success: true,
    courses: fakeCourses
  })
}
