import React from "react";

const BunchSelector = ({ mode, setMode }) => {
  return (
    <div className="p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl shadow-lg max-w-sm mx-auto">
      <p className="text-xl font-extrabold mb-4 text-gray-900 dark:text-gray-100 tracking-wider">
        🎟️ Select Mode
      </p>
      <div className="flex justify-center gap-5">
        {[
          { key: "single", label: "1 Ticket" },
          { key: "bunch", label: "Bunch (5)" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setMode(btn.key)}
            className={`
              px-7 py-3 rounded-full font-semibold text-sm shadow-md transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400
              ${
                mode === btn.key
                  ? "bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white shadow-lg scale-110 ring-2 ring-indigo-500"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }
            `}
            aria-pressed={mode === btn.key}
            aria-label={`Select ${btn.label} mode`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BunchSelector;
