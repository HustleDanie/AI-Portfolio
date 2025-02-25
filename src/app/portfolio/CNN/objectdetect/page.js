// pages/index.js

'use client';

import { useRef, useEffect } from 'react';

export default function ObjectDetectPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Set up the webcam video feed.
    async function setupCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        } catch (err) {
          console.error('Error accessing the webcam: ', err);
        }
      }
    }
    setupCamera();

    // 2. Dummy bounding boxes for demonstration.
    // In a real application, update this data with detection results.
    const boundingBoxes = [
      { x: 50, y: 50, width: 150, height: 100, label: 'Person', id: 1 },
      { x: 250, y: 120, width: 120, height: 80, label: 'Dog', id: 2 },
    ];

    // 3. Draw bounding boxes and labels on the canvas.
    function draw() {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const video = videoRef.current;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        // Match the canvas size to the video dimensions.
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Clear the previous frame.
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Iterate through the bounding boxes and draw them.
        boundingBoxes.forEach((box) => {
          context.beginPath();
          context.strokeStyle = 'red';
          context.lineWidth = 2;
          context.rect(box.x, box.y, box.width, box.height);
          context.stroke();

          // Draw a background rectangle for the label.
          context.fillStyle = 'red';
          context.font = '16px Arial';
          const text = `${box.label} (${box.id})`;
          const textWidth = context.measureText(text).width;
          context.fillRect(box.x, box.y - 20, textWidth + 4, 20);

          // Draw the label text.
          context.fillStyle = 'white';
          context.fillText(text, box.x + 2, box.y - 5);
        });
      }
      // Continue updating the overlay.
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl">
        {/* Video element for live webcam feed */}
        <video
          ref={videoRef}
          className="w-full h-auto rounded shadow-lg"
          autoPlay
          muted
          playsInline
        />
        {/* Canvas overlay for drawing bounding boxes and labels */}
        <canvas ref={canvasRef} className="absolute top-0 left-0" />
      </div>
    </div>
  );
}
