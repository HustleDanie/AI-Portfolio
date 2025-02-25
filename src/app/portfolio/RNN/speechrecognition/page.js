"use client";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import { Line } from "react-chartjs-2";
import WaveSurfer from "wavesurfer.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Chart.js Data
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Forecast",
        data: [10, 20, 15, 30, 25],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Forecasted Data" },
    },
  };

  // Audio Recorder & Player
  const [audioUrl, setAudioUrl] = useState(null);
  const [recording, setRecording] = useState(false);
  const wavesurferRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (audioUrl && wavesurferRef.current) {
      wavesurferRef.current.load(audioUrl);
    }
  }, [audioUrl]);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#4F46E5",
      progressColor: "#1E40AF",
      cursorColor: "#FFFFFF",
      barWidth: 3,
      responsive: true,
    });
  }, []);

  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      setAudioUrl(URL.createObjectURL(audioBlob));
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAudioUrl(fileUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Chart Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl mb-4">Forecasted Data</h2>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl mb-4">Model Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Accuracy</td>
                <td className="px-6 py-4 whitespace-nowrap">95%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Precision</td>
                <td className="px-6 py-4 whitespace-nowrap">92%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Recall</td>
                <td className="px-6 py-4 whitespace-nowrap">90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Audio Recorder Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl mb-4">Audio Recorder & Uploader</h2>

        <div className="flex gap-4 mb-4">
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`px-4 py-2 rounded text-white ${recording ? "bg-red-500" : "bg-blue-500"}`}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </button>

          <label className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded">
            Upload File
            <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
          </label>
        </div>

        <div id="waveform" className="h-24 bg-gray-100 rounded"></div>

        {audioUrl && (
          <audio controls className="mt-4 w-full">
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
}
