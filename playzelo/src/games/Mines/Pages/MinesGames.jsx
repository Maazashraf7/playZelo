import React, { useState, useEffect } from "react";
// import logoImg from "../../assets/images/logo/logo2.png";
import logoImg from "../../../assets/images/logo/logo2.png";

const TOTAL_CELLS = 25;

function generateMines(count) {
  const mines = new Set();
  while (mines.size < count) {
    mines.add(Math.floor(Math.random() * TOTAL_CELLS));
  }
  return mines;
}

function calculateCashout(bet, safePicks, mines) {
  if (safePicks === 0) return 0;
  return bet * ((TOTAL_CELLS - mines) / (TOTAL_CELLS - safePicks));
}

const DiamondBitcoinIcon = () => (
  <div className="w-5 h-5 bg-orange-500 rounded-md flex items-center justify-center rotate-45">
    <svg
      className="w-3 h-3 text-white -rotate-45"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm.6 14.5h-1.2v1.5h-1v-1.5h-.9v-1h.9v-.8h-1v-1h1v-.8h-1.2v-1h1.2v-1.2h1V10.7h.8v1.1h1.2v1h-1.2v.8h1.1v1h-1.1v.8h1.2v1h-1.2v1.5h-1v-1.5z" />
    </svg>
  </div>
);

export default function MinesGame() {
  const [balance, setBalance] = useState(6240088185.6);
  const [bet, setBet] = useState(56660);
  const [minesCount, setMinesCount] = useState(3);

  const [gameStarted, setGameStarted] = useState(false);
  const [mines, setMines] = useState(new Set());
  const [revealed, setRevealed] = useState(new Set());
  const [safePicks, setSafePicks] = useState(0);
  const [cashoutNow, setCashoutNow] = useState(0);

  useEffect(() => {
    setCashoutNow(calculateCashout(bet, safePicks, minesCount));
  }, [safePicks, bet, minesCount]);

  function startGame() {
    if (bet <= 0 || bet > balance) {
      alert("Invalid bet amount.");
      return;
    }
    if (minesCount < 1 || minesCount >= TOTAL_CELLS) {
      alert("Invalid mines count.");
      return;
    }

    setBalance((b) => b - bet);
    setMines(generateMines(minesCount));
    setRevealed(new Set());
    setSafePicks(0);
    setGameStarted(true);
    setCashoutNow(0);
  }

  function resetGame() {
    setGameStarted(false);
    setMines(new Set());
    setRevealed(new Set());
    setSafePicks(0);
    setCashoutNow(0);
  }

  function revealCell(idx) {
    if (!gameStarted || revealed.has(idx)) return;

    if (mines.has(idx)) {
      alert("Boom! You hit a mine! Game Over.");
      resetGame();
      return;
    }

    const newRevealed = new Set(revealed);
    newRevealed.add(idx);
    setRevealed(newRevealed);

    const newSafePicks = safePicks + 1;
    setSafePicks(newSafePicks);

    if (newSafePicks === TOTAL_CELLS - minesCount) {
      alert("You cleared the board! You won!");
      resetGame();
    }
  }

  function cashout() {
    if (!gameStarted || safePicks === 0) return;
    alert(`Cashed out ₹${cashoutNow.toFixed(2)}!`);
    setBalance((b) => b + cashoutNow);
    resetGame();
  }

return (
  <div className="min-h-screen bg-[#101822] text-white font-sans p-4 sm:p-6 flex flex-col items-center">
    {/* Header */}
    <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <img src={logoImg} alt="Logo" className="w-12 h-10 rounded" />
        <h1 className="text-xl sm:text-2xl font-bold">PlayZelo • Mines</h1>
      </div>
      <div className="flex gap-3 flex-wrap">
        <button className="bg-gray-700 px-4 py-2 rounded text-sm">
          Balance: ₹{balance.toFixed(2)}
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold text-sm">
          User ID: 12334
        </button>
      </div>
    </div>

    {/* Main Section */}
    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
      {/* Left Panel */}
      <div className="bg-[#1d2935] p-4 rounded-lg space-y-4 w-full lg:w-[300px]">
        <button className="bg-[#2e3c4b] px-4 py-2 rounded text-white font-medium w-full">
          Manual
        </button>

        {/* Bet Amount */}
        <div>
          <div className="text-gray-400 text-sm mb-1">Bet Amount</div>
          <div className="relative flex items-center bg-[#2e3c4b] rounded px-3 py-2">
            <input
              type="number"
              value={bet}
              onChange={(e) => setBet(Number(e.target.value))}
              className="bg-transparent w-full text-white focus:outline-none"
              min="0"
              step="any"
            />
            <div className="ml-2">
              <DiamondBitcoinIcon />
            </div>
            <div className="absolute right-3 flex items-center space-x-2">
              <button
                onClick={() => setBet(bet / 2)}
                className="text-xs bg-[#3a4b5c] px-2 py-1 rounded-xl"
              >
                ½
              </button>
              <button
                onClick={() => setBet(bet * 2)}
                className="flex-col sm:flex-row text-xs bg-[#3a4b5c] px-2 py-1 rounded-xl mr-7 gap-2 w-full"
              >
                2×
              </button>
            </div>
          </div>
        </div>

        {/* Mines Selector */}
        <div>
          <div className="text-gray-400 text-sm mb-1">Mines</div>
          <select
            className="w-full bg-[#2e3c4b] rounded px-3 py-2 text-white"
            value={minesCount}
            onChange={(e) => setMinesCount(Number(e.target.value))}
          >
            {[3, 5, 7, 9, 10, 12, 15].map((val) => (
              <option key={val}>{val}</option>
            ))}
          </select>
        </div>

        {/* Start Game Button */}
        <button
          onClick={startGame}
          className="bg-green-500 hover:bg-green-600 w-full py-2 rounded font-bold"
          disabled={gameStarted}
        >
          Start Game
        </button>
      </div>

      {/* Game Grid */}
      <div className="bg-[#1d2935] p-4 sm:p-6 rounded-lg flex-1">
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-3">
          {[...Array(TOTAL_CELLS)].map((_, idx) => {
            const isRevealed = revealed.has(idx);
            const isMine = mines.has(idx);
            let classes = "bg-[#2e3c4b]";
            if (isRevealed && isMine) classes = "bg-red-600";
            else if (isRevealed) classes = "bg-green-600";

            return (
              <button
                key={idx}
                onClick={() => revealCell(idx)}
                disabled={!gameStarted || isRevealed}
                className={`${classes} aspect-square sm:w-full lg:w-[150px] lg:h-[90px] rounded-lg flex items-center justify-center font-bold text-xl transition`}
              >
                {!isRevealed ? (
                  <img
                    src={logoImg}
                    alt="Logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                ) : isMine ? (
                  <span className="text-3xl sm:text-6xl">💣</span>
                ) : (
                  <span className="text-3xl sm:text-7xl">💎</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-6 w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-gray-400 text-sm sm:text-base">
        Revealed: {safePicks}/{TOTAL_CELLS}
      </div>
      <button
        onClick={cashout}
        disabled={!gameStarted || safePicks === 0}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-2 rounded font-bold text-sm sm:text-base"
      >
        Cashout
      </button>
    </div>
  </div>
)
};