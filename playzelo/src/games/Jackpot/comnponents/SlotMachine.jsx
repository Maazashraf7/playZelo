import React, { useState } from "react";
import backImg from "../../assets/GamesImage/background.png";
import cycImg from "../../assets/GamesImage/cylinder.png";

// Symbol images
import ic1 from "../../assets/GamesImage/ic_slot1.png";
import ic2 from "../../assets/GamesImage/ic_slot2.png";
import ic3 from "../../assets/GamesImage/ic_slot3.png";
import ic4 from "../../assets/GamesImage/ic_slot4.png";
import ic5 from "../../assets/GamesImage/ic_slot5.png";
import logo from "../../assets/GamesImage/jackpot_logo.png";
import { motion } from "framer-motion";

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
  // reels is an array of 4 reels, each containing 3 symbols (prev, center, next)
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
        // Choose a random index for center symbol
        const centerIndex = Math.floor(Math.random() * symbolList.length);
        // Get previous and next indices (circular)
        const prevIndex =
          (centerIndex - 1 + symbolList.length) % symbolList.length;
        const nextIndex = (centerIndex + 1) % symbolList.length;

        // Return array of three symbols for this reel: prev, center, next
        return [
          symbolList[prevIndex],
          symbolList[centerIndex], // center symbol
          symbolList[nextIndex],
        ];
      });

    setReels(newReels);

    // Determine payout based on center symbols only
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
    <div className="text-center min-h-screen bg-gradient-to-b from-orange-500 to-purple-900">
      {/* Navigation / Header */}
      <nav className="bg-amber-500 w-full h-[100px] rounded-xs flex items-center mb-2 justify-center">
        <img src={logo} alt="Logo" className="h-20" />
      </nav>

      {/* Payout Table */}
      <div className="border-2 border-yellow-400 bg-purple-900 p-2 rounded-lg mb-3 h-[260px] mx-auto">
        <div className="text-left text-xl font-semibold text-white mb-2">
          Winning Combinations & Payouts:
        </div>
        <div className="grid grid-cols-2 gap-2 text-left text-white text-sm">
          {/* 🔥777 x4 */}
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={ic1} alt="icon" className="w-9 h-9" />
            ))}
          </div>
          <div className="text-right">x100</div>

          {/* RESPIN x4 */}
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={ic2} alt="icon" className="w-9 h-9" />
            ))}
          </div>
          <div className="text-right">x50</div>

          {/* BAR x4 */}
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={ic3} alt="icon" className="w-9 h-9" />
            ))}
          </div>
          <div className="text-right">x25</div>

          {/* 🔥7 x4 */}
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={ic4} alt="icon" className="w-9 h-9" />
            ))}
          </div>
          <div className="text-right">x20</div>

          {/* bar x4 */}
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={ic5} alt="icon" className="w-9 h-9" />
            ))}
          </div>
          <div className="text-right">x10</div>
        </div>
      </div>

      {/* Slot Reels */}
      <div
        className="inline-flex items-center justify-center gap-4 bg-black border-2 border-yellow-400 p-6 rounded-lg mx-auto max-w-4xl"
        style={{ perspective: "800px" }}
      >
        {/* {reels?.map((reelSymbols, reelIdx) => (
          <div

            key={reelIdx}
            className="w-28 h-35 bg-gray-900 rounded-md shadow-lg overflow-hidden relative border-2 border-gray-700 flex flex-col items-center justify-center
            bg-cover bg-center animate-spin-bg"
            style={{
              backgroundImage: `url(${cycImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {reelSymbols.map((symbol, idx) => {
              const isCenter = idx === 1;
              return (
                <motion.img
                  key={spinCount + "-" + reelIdx + "-" + idx}
                  src={symbol.img}
                  // alt={symbol.name}
                  initial={{
                    y: isCenter ? 100 : 0,
                    opacity: 0,
                    rotate: isCenter ? 0 : 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: isCenter ? 1 : 0.3,
                    rotate: isCenter ? 360 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`w-16 h-16 object-contain ${
                    isCenter
                      ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                      : "my-2 opacity-30"
                  }`}
                  style={{ filter: isCenter ? "none" : "grayscale(70%) brightness(60%)" }}
                />
              );
            })}
          </div>
         ))} */}

{reels?.map((reelSymbols, reelIdx) => (
  <div
    key={reelIdx}
    className="w-28 h-35 bg-gray-900 rounded-md shadow-lg overflow-hidden relative border-2 border-gray-700 flex flex-col items-center justify-center"
    style={{
      backgroundColor: "#222",
    }}
  >
    {/* Cylinder background (rotating clockwise) */}
    <motion.img
      src={cycImg}
      alt="Cylinder"
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
        filter: "brightness(90%) blur(1px)",
      }}
      animate={{ rotateX: 360 }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    />
    {/* Symbols (static) */}
    {reelSymbols.map((symbol, idx) => {
      const isCenter = idx === 1;
      return (
        <img
          key={spinCount + "-" + reelIdx + "-" + idx}
          src={symbol.img}
          alt={symbol.name}
          className={`w-16 h-16 object-contain ${
            isCenter
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              : "my-2 opacity-30 z-10"
          }`}
          style={{ filter: isCenter ? "none" : "grayscale(70%) brightness(60%)" }}
        />
      );
    })}
  </div>
))}

      </div>

      {/* Win Display */}
      <div className="text-green-400 font-bold text-xl mt-3">
        win: ₹ {win.toFixed(3)}
      </div>

      {/* Controls */}
      <div className="bg-gray-900 p-4 rounded-lg inline-flex items-center space-x-4 mt-1 justify-center max-w-md mx-auto py-4">
        <span className="text-white">Bet: ₹ {bet}</span>
        <button
          onClick={increaseBet}
          className="bg-orange-500 text-white px-3 rounded hover:bg-orange-600 transition"
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

      {/* Optional repeated Increase Bet button (can be removed if redundant) */}
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