import React, { useState } from "react";
import Pagination from "./Pagination";

const Winners = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const winners = [
    { rank: 1, name: "Player 27", id: "ID1026", score: 980556, game: "Ludo" },
    { rank: 2, name: "Player 35", id: "ID1034", score: 924374, game: "Carrom" },
    { rank: 3, name: "Player 14", id: "ID1013", score: 901928, game: "Chess" },
  ];

  const players = Array.from({ length: 50 }, (_, i) => ({
    rank: i + 4,
    name: `Player ${i + 4}`,
    id: `ID10${i + 4}`,
    score: Math.floor(Math.random() * 900000) + 100000,
    game: ["Ludo", "Carrom", "Chess"][i % 3],
  }));

  const startIndex = (page - 1) * itemsPerPage;
  const currentPlayers = players.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-900 to-blue-900 text-white flex flex-col items-center py-10 px-4">

      {/* Header */}
      <h1 className="capitalize text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
        <span role="img" aria-label="trophy">🏆</span>
        Winners
        <span role="img" aria-label="trophy">🏆</span>
      </h1>

      {/* Winners Cards */}
      <div className="flex flex-col md:flex-row gap-10 mb-12 w-full max-w-5xl justify-center min-h-[220px]">
        {winners.map((w, i) => (
          <div
            key={i}
            className={`flex-1 p-6 rounded-xl shadow-xl text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl ${w.rank === 1
                ? "bg-blue-600 border-4 border-yellow-400"
                : w.rank === 2
                  ? "bg-blue-600 border-4 border-gray-300"
                  : "bg-blue-600 border-4 border-orange-400"
              }`}
          >
            <div className="text-5xl mb-3">
              {w.rank === 1 ? "🥇" : w.rank === 2 ? "🥈" : "🥉"}
            </div>
            <h2 className="text-lg font-bold">{w.name}</h2>
            <p className="text-sm">ID: {w.id}</p>
            <p className="text-sm">Game: {w.game}</p>
            <p className="mt-3 font-bold text-lg">
              Score: {w.score.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden min-h-[400px]">
          <thead>
            <tr className="bg-blue-900">
              <th className="py-3 px-4 text-left">Rank</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Score</th>
              <th className="py-3 px-4 text-left">Game</th>
            </tr>
          </thead>
          <tbody>
            {currentPlayers.map((p, i) => (
              <tr
                key={i}
                className={`transition duration-200 cursor-pointer ${i % 2 === 0 ? "bg-blue-600" : "bg-blue-900"
                  } hover:bg-blue-200 hover:text-black`}
              >
                <td className="py-2 px-4">{p.rank}</td>
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">{p.id}</td>
                <td className="py-2 px-4">{p.score.toLocaleString()}</td>
                <td className="py-2 px-4">{p.game}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-8">
        {/* {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
              page === num
                ? "bg-yellow-400 text-black font-bold"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
          >
            {num}
          </button>
        ))} */}
        <Pagination
          totalPages={Math.ceil(players.length / itemsPerPage)}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Winners;