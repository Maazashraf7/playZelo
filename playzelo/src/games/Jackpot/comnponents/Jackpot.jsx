// src/pages/Jackpot.jsx
import React from "react";
 
const tournaments = new Array(10).fill({
  players: "99+",
  winners: "2",
  type: "Turbo",
  prizepool: "₹ 10",
  entry: "₹ 50",
});
 
const Jackpot = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <div className="bg-[#0e2a5a] text-white text-center py-6 rounded-t-md">
        <h1 className="text-3xl font-bold">Playzelo Jackpot</h1>
      </div>
 
      {/* Tabs */}
      <div className="bg-[#0e2a5a] flex justify-end px-6 py-2 space-x-3 rounded-b-md">
        <button className="bg-orange-400 text-white px-4 py-1 rounded">All</button>
        <button className="bg-blue-800 text-white px-4 py-1 rounded">Regular 5 Min</button>
        <button className="bg-blue-900 text-white px-4 py-1 rounded">3 Player</button>
      </div>
 
      {/* Recommended Title */}
      <div className="px-4 py-3 text-yellow-500 font-bold text-lg">
        Recommended Tournaments
      </div>
 
      {/* Grid of Tournament Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-6">
        {tournaments.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center"
          >
            {/* Left Side Info */}
            <div className="">
              <div className="text-xs text-gray-600 mb-1 gap-2">
                <span className="mr-8">👤</span>
                <span className="mr-8">{t.players}+ • 3 Players • {t.winners} WINNERS</span>
                <span className="mr-8">ℹ️</span>
              </div>
 
              <div className="text-sm font-semibold text-gray-700 mb-2">{t.type}</div>
              <div className="text-xs text-gray-500 font-medium">PRIZEPOOL</div>
              <div className="text-green-600 font-bold text-lg h-[20px] w-[40px]">{t.prizepool}</div>
            </div>
 
            {/* Right Side Entry */}
            <div className="flex flex-col items-end">
              <div className="text-xs text-gray-500 font-medium">ENTRY</div>
              <button className="bg-green-600 text-white font-semibold px-4 py-1 rounded mt-1">
                {t.entry}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Jackpot;