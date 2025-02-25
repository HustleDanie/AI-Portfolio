"use client";
import { useState } from "react";
import Head from "next/head";
import * as Tone from "tone";

export default function MusicGenerator() {
  const [bpm, setBpm] = useState(120);
  const [scale, setScale] = useState("C Major");
  const [playing, setPlaying] = useState(false);

  const scales = ["C Major", "D Minor", "E Major", "G Major"];
  const melody = ["C4", "D4", "E4", "G4", "A4", "G4", "E4", "C4"];

  const synth = new Tone.Synth().toDestination();

  const playMelody = async () => {
    await Tone.start();
    Tone.Transport.bpm.value = bpm;

    const sequence = new Tone.Sequence(
      (time, note) => {
        synth.triggerAttackRelease(note, "8n", time);
      },
      melody,
      "8n"
    );

    sequence.start(0);
    Tone.Transport.start();
    setPlaying(true);
  };

  const stopMusic = () => {
    Tone.Transport.stop();
    setPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Head>
        <title>Music Generator</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">AI Music Generator</h1>

      <div className="max-w-xl bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Music Controls</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">BPM</label>
          <input
            type="range"
            min="60"
            max="180"
            value={bpm}
            onChange={(e) => setBpm(e.target.value)}
            className="w-full mt-1"
          />
          <p className="text-sm text-gray-600">{bpm} BPM</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Scale</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            {scales.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={playMelody}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={playing}
          >
            Play
          </button>
          <button
            onClick={stopMusic}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
