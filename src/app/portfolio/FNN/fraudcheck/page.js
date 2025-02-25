'use client';

import { useState } from "react";
import { ExclamationIcon, CheckCircleIcon } from "@heroicons/react/solid";

export default function FraudCheck() {
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [riskScore, setRiskScore] = useState(null);
  const [fraudLikelihood, setFraudLikelihood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/fraud-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount),
          location,
          transactionType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch fraud analysis.");
      }

      const data = await response.json();
      // Expecting { riskScore: number, fraudLikelihood: number }
      setRiskScore(data.riskScore);
      setFraudLikelihood(data.fraudLikelihood);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Returns a contextual icon based on the score
  const renderRiskIcon = (score) => {
    if (score >= 70) {
      return <ExclamationIcon className="h-6 w-6 text-red-500 inline-block ml-2" />;
    } else if (score > 30) {
      return <ExclamationIcon className="h-6 w-6 text-yellow-500 inline-block ml-2" />;
    } else {
      return <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block ml-2" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Transaction Fraud Check
        </h1>
        
        <form onSubmit={handleSubmit}>
          {/* Amount Input */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          {/* Location Input */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>

          {/* Transaction Type Input */}
          <div className="mb-4">
            <label htmlFor="transactionType" className="block text-gray-700 text-sm font-bold mb-2">
              Transaction Type
            </label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            >
              <option value="">Select a type</option>
              <option value="purchase">Purchase</option>
              <option value="transfer">Transfer</option>
              <option value="withdrawal">Withdrawal</option>
              <option value="deposit">Deposit</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Checking..." : "Submit"}
          </button>
        </form>

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {/* Display the risk score and fraud likelihood with visual indicators */}
        {riskScore !== null && fraudLikelihood !== null && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Fraud Analysis</h2>
            
            {/* Risk Score */}
            <div className="mb-6">
              <p className="text-gray-700">
                Risk Score: <strong>{riskScore}</strong> {renderRiskIcon(riskScore)}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${
                    riskScore >= 70
                      ? "bg-red-500"
                      : riskScore > 30
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${riskScore}%` }}
                ></div>
              </div>
            </div>
            
            {/* Fraud Likelihood */}
            <div>
              <p className="text-gray-700">
                Fraud Likelihood: <strong>{fraudLikelihood}%</strong>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${
                    fraudLikelihood >= 70
                      ? "bg-red-500"
                      : fraudLikelihood > 30
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${fraudLikelihood}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
