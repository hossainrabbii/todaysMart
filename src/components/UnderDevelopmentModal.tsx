// components/UnderDevelopmentModal.tsx
"use client";

import { useEffect, useState } from "react";

export const UnderDevelopmentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(5); // seconds until buttons are enabled
  const [buttonsEnabled, setButtonsEnabled] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasSeenUnderDevModal");
    if (!hasVisited) {
      setIsVisible(true);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setButtonsEnabled(true); // enable buttons after countdown
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8 relative overflow-hidden py-12">
        {/* Close button */}
        <button
          onClick={() => {
            if (!buttonsEnabled) return;
            setIsVisible(false);
            localStorage.setItem("hasSeenUnderDevModal", "true");
          }}
          disabled={!buttonsEnabled}
          className={`absolute top-4 right-4 transition text-gray-400 dark:text-gray-500
            ${buttonsEnabled ? "hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer" : "cursor-not-allowed opacity-50"}
          `}
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl md:text-3xl font-bold text-orange-500 dark:text-gray-100 mb-4">
          🚧 Under Development
        </h2>

        {/* Message */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          This website is currently under development. Some features may not work properly yet,
          but they will be added in the next update. Thank you for your patience!
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-6">
          <div
            className="h-2 bg-blue-600 dark:bg-blue-500 transition-all duration-1000"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          ></div>
        </div>

        {/* Countdown badge */}
        <span className="absolute top-4 left-8 text-gray-500 dark:text-gray-400 text-sm mb-2">
          {buttonsEnabled ? "You may proceed" : `Please wait ${countdown}s`}
        </span>

        {/* Got it button */}
        <button
          onClick={() => {
            if (!buttonsEnabled) return;
            setIsVisible(false);
            localStorage.setItem("hasSeenUnderDevModal", "true");
          }}
          disabled={!buttonsEnabled}
          className={`w-full font-semibold py-3 rounded-xl shadow-md transition-all
            ${buttonsEnabled
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"}
          `}
        >
          Got it
        </button>
      </div>
    </div>
  );
};
