import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EntryLobby = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState("₹20");
  const navigate = useNavigate();

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  const joinNow = () => {
    closeSheet();
    navigate("/teenpatti/matching");
  };

  const tournamentData = [
    {
      players: "133+",
      winners: 3,
      type: "Regular",
      prize: "₹ 4",
      entry: "₹ 20",
    },
    ...Array(11).fill({
      players: "99+",
      winners: 2,
      type: "Turbo",
      prize: "₹ 10",
      entry: "₹ 50",
    }),
  ];

  return (
    <div className="min-h-screen bg-gray-100" style={{width : 1270}}>
      {/* ✅ Navbar */}
      <header className="bg-[#122b5c] text-black py-4 px-6 shadow-md w-full min-w-full">
        <div className="max-w-[1270px] w-full mx-auto">
          <h1 className="text-lg font-bold text-white">Playzelo Teenpatti</h1>
        </div>
      </header>

      {/* ✅ Filter Bar */}
      <div className="bg-[#122b5c] shadow-md w-full">
        <div className="flex items-center justify-between px-4 py-2 max-w-[1270px] w-full mx-auto">
          <div className="text-2xl cursor-pointer text-white">☰</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-md bg-[#1d3a7c] text-white text-sm font-medium">
              All
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300">
              Regular 5 Min
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300">
              3 Player
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Section Title */}
      <div className="px-4 py-5 w-full max-w-[1270px] mx-auto text-black">
        <h2 className="text-lg text-black font-semibold mb-4" style={{color : "black"}}>
          Recommended Tournaments
        </h2>

        {/* ✅ Lobby Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tournamentData.map((card, index) => (
            <div
              key={index}
              className="bg-[#f6f7f8] shadow-md rounded-lg p-4 flex flex-col gap-2 h-[120px]"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center gap-1">👤 {card.players}</span>
                <span className="text-gray-500">
                  3 Players • {card.winners} WINNERS
                </span>
                <span className="text-xs bg-[#122b5c] text-white px-2 py-1 rounded">
                  {card.type}
                </span>
                <span>ℹ️</span>
              </div>

              {/* Labels */}
              <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                <span>PRIZEPOOL</span>
                <span>ENTRY</span>
              </div>

              {/* Values */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  {card.prize}
                </span>
                <button
                  onClick={openSheet}
                  className="bg-[#ffcc00] text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-400"
                >
                  {card.entry}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {isSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center relative" style={{text: "white"}}>
            <h2 className="text-lg font-bold mb-4">Confirm Payment</h2>

            <select
              value={selectedEntry}
              onChange={(e) => setSelectedEntry(e.target.value)}
              className="border rounded-md p-2 w-full mb-4 focus:ring-2 focus:ring-[#122b5c] text-black"
            >
              <option>₹10</option>
              <option>₹20</option>
              <option>₹50</option>
              <option>₹100</option>
            </select>

            <div className="flex justify-between gap-3">
              <button
                className="bg-green-600 text-black px-4 py-2 rounded-md hover:bg-green-700 w-1/2"
                onClick={joinNow}
              >
                Join Now
              </button>
              <button
                className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600 w-1/2"
                onClick={closeSheet}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryLobby;