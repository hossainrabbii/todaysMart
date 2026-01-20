"use client";
import { useEffect, useState } from "react";

export const FlashSaleCountdown = () => {
  // 24 hours in seconds
  const TOTAL_SECONDS = 24 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : TOTAL_SECONDS));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to HH : MM : SS
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format numbers to always show 2 digits
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white mx-auto w-full">
      <h2 className="text-3xl font-bold mb-4">🔥 Flash Sale!</h2>
      <p className="mb-6 text-lg">Hurry up! Sale ends in:</p>
      <div className="flex gap-4 text-center">
        {/* Hours */}
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-20 flex flex-col items-center animate-pulse">
          <span className="text-4xl font-bold">{format(hours)}</span>
          <span className="text-sm uppercase mt-1">Hours</span>
        </div>

        {/* Minutes */}
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-20 flex flex-col items-center animate-pulse delay-75">
          <span className="text-4xl font-bold">{format(minutes)}</span>
          <span className="text-sm uppercase mt-1">Minutes</span>
        </div>

        {/* Seconds */}
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-20 flex flex-col items-center animate-pulse delay-150">
          <span className="text-4xl font-bold">{format(seconds)}</span>
          <span className="text-sm uppercase mt-1">Seconds</span>
        </div>
      </div>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-all">
        Shop Now
      </button>
    </div>
  );
};
