// pages/emotion.js
'use client';
import { useRef, useState, useEffect } from 'react';

export default function EmotionRecognition() {
  const videoRef = useRef(null);
  const [useWebcam, setUseWebcam] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [emotion, setEmotion] = useState(null);
  const [confidence, setConfidence] = useState(null);

  // Setup webcam when toggled on.
  useEffect(() => {
    if (useWebcam && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
        });
    }
    // Stop the webcam if the user toggles away from it.
    else if (!useWebcam && videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, [useWebcam]);

  // Handle file upload.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Simulate sending the image to the backend for emotion recognition.
  const handleRecognize = async () => {
    // In a production app, you would create a FormData instance,
    // attach your image, and then send it to your backend API.
    // For now, we'll simulate an API response.
    setTimeout(() => {
      // Simulated response values.
      setEmotion('Happy');
      setConfidence('95%');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Facial Expression Recognition</h1>

      {/* Toggle between Webcam and Image Upload */}
      <div className="mb-4">
        <button
          onClick={() => {
            setUseWebcam(true);
            setSelectedFile(null);
            setPreviewUrl(null);
            setEmotion(null);
            setConfidence(null);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-2 rounded"
        >
          Use Webcam
        </button>
        <button
          onClick={() => {
            setUseWebcam(false);
            setEmotion(null);
            setConfidence(null);
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Upload Image
        </button>
      </div>

      {/* Webcam Integration */}
      {useWebcam && (
        <div className="relative w-full max-w-md mb-4">
          <video
            ref={videoRef}
            className="w-full h-auto rounded shadow-lg"
            autoPlay
            muted
            playsInline
          ></video>
        </div>
      )}

      {/* Image Upload Integration */}
      {!useWebcam && (
        <div className="mb-4 w-full max-w-md">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-purple-50 file:text-purple-700
                       hover:file:bg-purple-100"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 w-full h-auto rounded shadow-lg"
            />
          )}
        </div>
      )}

      {/* Recognize Emotion Button */}
      {(useWebcam || previewUrl) && (
        <button
          onClick={handleRecognize}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
        >
          Recognize Emotion
        </button>
      )}

      {/* Display Recognized Emotion and Confidence */}
      {emotion && (
        <div className="mt-6 p-4 bg-white shadow rounded w-full max-w-md text-center">
          <h2 className="text-2xl font-bold">Recognition Result</h2>
          <p className="mt-2 text-lg">
            <span className="font-semibold">Emotion:</span> {emotion}
          </p>
          <p className="mt-1 text-lg">
            <span className="font-semibold">Confidence:</span> {confidence}
          </p>
        </div>
      )}
    </div>
  );
}
