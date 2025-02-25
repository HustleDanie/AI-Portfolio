'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Chess } from "chess.js";

// Dynamically load the Chessboard to prevent SSR issues
const Chessboard = dynamic(() => import("react-chessboard").then(mod => mod.Chessboard), { ssr: false });

export default function Home() {
  // Initialize a new chess game instance
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [turn, setTurn] = useState(game.turn());

  // Handle a move: from source to target square
  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    // Illegal move
    if (!move) return false;
    setFen(game.fen());
    setTurn(game.turn());
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <header className="w-full max-w-4xl mb-5 p-4 bg-purple-600 rounded-lg shadow-md">
        <h1 className="text-center text-white text-3xl font-bold">Interactive Chess Game</h1>
      </header>
      
      <main className="w-full max-w-4xl bg-white p-5 shadow-lg rounded-lg flex flex-col items-center">
        <Chessboard
          position={fen}
          onPieceDrop={onDrop}
          boardWidth={400}
        />
        <div className="mt-5 text-lg">
          <p>Turn: <span className="font-bold">{turn === "w" ? "White" : "Black"}</span></p>
        </div>
      </main>
    </div>
  );
}
