import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Use rich hex color arrays for gradients
const lotteries = [
  {
    title: "Playzelo 10 Evening",
    prize: "₹1 Lakhs",
    draw: "2025-09-03",
    time: "17:40",
    price: "₹10",
    color: ["#1a2980", "#26d0ce", "#1a2980"], // Ocean blue gradient
    btnColor: ["#134e5e", "#71b280"],         // Blue/green button
  },
  {
    title: "Playzelo 50 Weekly",
    prize: "₹2 Lakhs",
    draw: "2025-09-03",
    time: "19:30",
    price: "₹50",
    color: ["#0575e6", "#021b79", "#0575e6"], // Sapphire blue
    btnColor: ["#00c6ff", "#0072ff"],
  },
  {
    title: "Playzelo 30 Weekly",
    prize: "₹2.5 Lakhs",
    draw: "2025-09-03",
    time: "20:30",
    price: "₹30",
    color: ["#283e51", "#485563", "#283e51"], // Metal blue/gray
    btnColor: ["#1e3c72", "#2a5298"],
  },
  {
    title: "Playzelo 100 Monthly",
    prize: "₹3 Lakhs",
    draw: "2025-09-04",
    time: "18:30",
    price: "₹100",
    color: ["#314755", "#26a0da", "#314755"], // Steel blue
    btnColor: ["#11998e", "#38ef7d"],
  },
  {
    title: "Playzelo 100 Monthly",
    prize: "₹3 Lakhs",
    draw: "2025-09-04",
    time: "18:30",
    price: "₹100",
    color: ["#314755", "#26a0da", "#314755"],
    btnColor: ["#11998e", "#38ef7d"],
  },
];

// Generate extra lotteries with unique gradients for demo
const extraLotteries = Array.from({ length: 8 }, (_, i) => ({
  title: `Special Lottery ${i + 1}`,
  prize: `₹${Math.floor(Math.random() * 90 + 10)} Lakhs`,
  draw: "2025-09-05",
  time: "18:30",
  price: `₹${Math.floor(Math.random() * 500 + 10)}`,
  color: [
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  ], // Random color gradient
  btnColor: [
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  ],
}));

const Lotteries = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBuy = (lottery) => {
    navigate("/lottery/play", { state: { lottery } });
  };

  // Filter upcoming lotteries
  const displayedLotteries = (showMore ? [...lotteries, ...extraLotteries] : lotteries).filter(
    (lottery) => {
      const now = new Date();
      const [year, month, day] = lottery.draw.split("-").map(Number);
      const [hour, minute] = lottery.time.split(":").map(Number);
      const lotteryDateTime = new Date(year, month - 1, day, hour, minute);
      return lotteryDateTime >= now;
    }
  );

  return (
    <div className="min-h-screen bg-[#0a1733] p-6">
      <h1 className="text-center text-4xl font-extrabold mb-12 text-white tracking-wide drop-shadow-lg">
        🎟️ Featured Lotteries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {displayedLotteries.map((lottery, index) => {
          const now = new Date();
          const [year, month, day] = lottery.draw.split("-").map(Number);
          const [hour, minute] = lottery.time.split(":").map(Number);
          const lotteryDateTime = new Date(year, month - 1, day, hour, minute);

          const isActiveNow =
            lotteryDateTime.toDateString() === now.toDateString() &&
            lotteryDateTime >= now;

          return (
            <div
              key={index}
              className={`relative text-white rounded-3xl shadow-2xl transform transition-all duration-700 flex flex-col items-center justify-center h-[360px] border border-white/10 overflow-hidden group
                ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}
                hover:scale-105 hover:shadow-lg`}
              style={{
                background: `linear-gradient(135deg, ${lottery.color[0]}, ${lottery.color[1]}, ${lottery.color[2]})`
              }}
            >
              {/* Ribbon */}
              <div className="absolute top-4 left-[-30px] bg-blue-800 text-white px-10 py-1 rotate-[-45deg] shadow-md font-semibold text-xs">
                {lottery.price} Ticket
              </div>

              {/* Active Badge */}
              {isActiveNow && (
                <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                  Active Now
                </div>
              )}

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-3xl" />

              {/* Content */}
              <div className="p-6 text-center relative z-10 flex flex-col items-center">
                <h2 className="text-xl font-extrabold tracking-wide drop-shadow-lg uppercase text-white">
                  {lottery.title}
                </h2>

                <p className="text-4xl font-extrabold mt-4 text-white animate-pulse">
                  {lottery.prize}
                </p>

                <div
                  style={{
                    background: `linear-gradient(90deg, ${lottery.btnColor[0]}, ${lottery.btnColor[1]})`
                  }}
                  className="p-[2px] rounded-full mt-6 mb-5 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <button
                    onClick={() => handleBuy(lottery)}
                    className="bg-blue-900 text-white px-8 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    🚀 Buy Now
                  </button>
                </div>

                <p className="mt-2 text-sm text-gray-300">
                  📅 {lottery.draw} • 🕒 {lottery.time}
                </p>
                <p className="text-sm text-gray-300">
                  🎟️ Price: {lottery.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-10 py-3 bg-blue-900/50 backdrop-blur-md border border-blue-700 text-white font-bold rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-900"
        >
          {showMore ? "▲ View Less" : "▼ View More"}
        </button>
      </div>
    </div>
  );
};

export default Lotteries;
