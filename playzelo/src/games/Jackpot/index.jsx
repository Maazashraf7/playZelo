import React, { useState } from "react";
import backImg from "../../assets/images/game/jackpot/bgImg.png";
import cycImg from "../../assets/images/game/jackpot/spinner.png";

// Symbol images
import ic1 from "../../assets/images/game/jackpot/7.png";
import ic2 from "../../assets/images/game/jackpot/777.png";
import ic3 from "../../assets/images/game/jackpot/bar.png";
import ic4 from "../../assets/images/game/jackpot/bar2.png";
import ic5 from "../../assets/images/game/jackpot/respin.png";
import logo from "../../assets/images/game/jackpot/logo.png";

const symbolList = [
  { name: "🔥777", img: ic1 },
  { name: "RESPIN", img: ic2 },
  { name: "BAR", img: ic3 },
  { name: "🔥7", img: ic4 },
  { name: "bar", img: ic5 },
];

const payouts = {
  "🔥777🔥777🔥777🔥777": 100,
  RESPINRESPINRESPINRESPIN: 50,
  BARBARBARBAR: 25,
  "🔥7🔥7🔥7🔥7": 20,
  barbarbarbar: 10,
};

const SlotMachine = () => {
  const [reels, setReels] = useState([
    [symbolList[0], symbolList[1], symbolList[2]],
    [symbolList[1], symbolList[2], symbolList[3]],
    [symbolList[2], symbolList[3], symbolList[4]],
    [symbolList[3], symbolList[4], symbolList[0]],
  ]);
  const [bet, setBet] = useState(3);
  const [balance, setBalance] = useState(1000);
  const [win, setWin] = useState(0);
  const [spinCount, setSpinCount] = useState(0);

  const spin = () => {
    const newReels = Array(4)
      .fill()
      .map(() => {
        const centerIndex = Math.floor(Math.random() * symbolList.length);
        const prevIndex = (centerIndex - 1 + symbolList.length) % symbolList.length;
        const nextIndex = (centerIndex + 1) % symbolList.length;

        return [
          symbolList[prevIndex],
          symbolList[centerIndex],
          symbolList[nextIndex],
        ];
      });

    setReels(newReels);

    const resultKey = newReels.map((symbols) => symbols[1].name).join("");
    const payout = payouts[resultKey] || 0;
    const winAmount = payout * bet;

    setWin(winAmount);
    setBalance(balance - bet + winAmount);
    setSpinCount((prev) => prev + 1);
  };

  const increaseBet = () => {
    setBet((prev) => prev + 1);
  };

  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-orange-500 to-purple-900 overflow-x-hidden px-4">
      {/* Navigation / Header */}
      <nav className="bg-amber-500 w-full h-[80px] sm:h-[100px] rounded-xs flex items-center justify-center mb-4">
        <img src={logo} alt="Logo" className="h-12 sm:h-20" />
      </nav>

      {/* Payout Table */}
      <div className="border-2 border-yellow-400 bg-purple-900 p-3 rounded-lg mb-4 w-full mx-auto">
        <div className="text-white text-left text-sm sm:text-lg font-semibold mb-3">
          Winning Combinations & Payouts:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-sm">
          {[{ img: ic1, mult: 100 }, { img: ic2, mult: 50 }, { img: ic3, mult: 25 }, { img: ic4, mult: 20 }, { img: ic5, mult: 10 }].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={item.img} alt="icon" className="w-8 h-8 sm:w-9 sm:h-9" />
                ))}
              </div>
              <div className="text-right">x{item.mult}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Slot Reels */}
      <div
        className="flex flex-wrap justify-center gap-4 bg-black border-2 border-yellow-400 p-4 sm:p-6 rounded-lg mx-auto w-[600px]"
        style={{ perspective: "800px" }}
      >
        {reels?.map((reelSymbols, reelIdx) => (
          <div
            key={reelIdx}
            className="w-24 h-28 sm:w-28 sm:h-32 bg-gray-900 rounded-md shadow-lg overflow-hidden relative border-2 border-gray-700 flex flex-col items-center justify-center"
            style={{ backgroundColor: "#222" }}
          >
            {/* Cylinder background */}
            <img
              src={cycImg}
              alt="Cylinder"
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                filter: "brightness(90%) blur(1px)",
              }}
            />

            {/* Symbols */}
            {reelSymbols.map((symbol, idx) => {
              const isCenter = idx === 1;
              return (
                <img
                  key={spinCount + "-" + reelIdx + "-" + idx}
                  src={symbol.img}
                  alt={symbol.name}
                  className={`w-12 h-12 sm:w-16 sm:h-16 object-contain ${
                    isCenter
                      ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                      : "my-2 opacity-30 z-10"
                  }`}
                  style={{
                    filter: isCenter ? "none" : "grayscale(70%) brightness(60%)",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Win Display */}
      <div className="text-green-400 font-bold text-lg sm:text-xl mt-3">
        Win: ₹ {win.toFixed(3)}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4 bg-gray-900 p-4 rounded-lg max-w-md mx-auto">
        <span className="text-white">Bet: ₹ {bet}</span>
        <button
          onClick={increaseBet}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          +
        </button>
        <button
          onClick={spin}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded shadow transition"
        >
          SPIN
        </button>
        <span className="text-cyan-300">Balance: ₹ {balance.toFixed(3)}</span>
      </div>

      {/* Optional repeated button */}
      <div className="mt-4">
        <button
          onClick={increaseBet}
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white transition"
        >
          Increase Bet
        </button>
      </div>

      <div className="text-white mt-2">Current Bet: ₹{bet}</div>
    </div>
  );
};

export default SlotMachine;