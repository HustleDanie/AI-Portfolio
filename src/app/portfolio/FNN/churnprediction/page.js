'use client';

import { useState } from "react";

export default function ChurnPrediction() {
  const [subscriptionDuration, setSubscriptionDuration] = useState("");
  const [paymentHistory, setPaymentHistory] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [shapValues, setShapValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Replace with your actual API URL or logic
    try {
      const response = await fetch("/api/churn-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          subscriptionDuration: Number(subscriptionDuration), 
          paymentHistory: Number(paymentHistory) 
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
      }

      const data = await response.json();
      setPrediction(data.prediction);
      setShapValues(data.shapValues);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Customer Churn Prediction</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Subscription Duration Input */}
          <div className="mb-4">
            <label 
              htmlFor="subscriptionDuration" 
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Subscription Duration (months)
            </label>
            <input
              id="subscriptionDuration"
              type="number"
              value={subscriptionDuration}
              onChange={(e) => setSubscriptionDuration(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          {/* Payment History Input */}
          <div className="mb-4">
            <label 
              htmlFor="paymentHistory" 
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Payment History (e.g., number of late payments)
            </label>
            <input
              id="paymentHistory"
              type="number"
              value={paymentHistory}
              onChange={(e) => setPaymentHistory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Submit"}
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* Display Prediction and SHAP Values */}
        {prediction !== null && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Churn Prediction</h2>
            <p className="text-gray-700">
              Probability of churn: <strong>{(prediction * 100).toFixed(2)}%</strong>
            </p>

            {shapValues && (
              <div className="mt-4">
                <h3 className="text-lg font-medium">Feature Contributions (SHAP Values)</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(shapValues).map(([feature, value]) => (
                    <li key={feature}>
                      <span className="font-medium">{feature}:</span> {value.toFixed(3)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
