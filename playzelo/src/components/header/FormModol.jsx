import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";

import mAvt from "../../assets/images/maleAvt.png";
import { useNavigate } from "react-router-dom";

const DailyLotteryModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 1, seconds: 19 });
  const [ticketsSold, setTicketsSold] = useState(8);

  const winners = [
    { name: "Meena", amount: "₹50,000", game: "Lottery", time: "1h ago", img: mAvt },
    { name: "Ankit", amount: "₹25,000", game: "Jackpot", time: "12m ago", img: mAvt },
    { name: "Rajesh", amount: "₹10,000", game: "Teen Patti", time: "2m ago", img: mAvt },
    { name: "Priya", amount: "₹5,000", game: "Ludo", time: "1h ago", img: "" },
    { name: "Saira", amount: "₹12,500", game: "Jackpot", time: "1h ago", img: mAvt },
    { name: "Aarav", amount: "₹3,800", game: "Ludo", time: "8m ago", img: mAvt },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicketsSold((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/0 z-[2000] flex items-center justify-center p-2">
      <div className="relative bg-gray-800 bg-opacity-90 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[550px] overflow-hidden text-white flex flex-col">
        {/* Top header with title and close button */}
        <div className="flex justify-between items-center px-8 pt-4 pb-2 border-b border-gray-700">
          <h1 className="text-3xl font-extrabold">Daily Lottery</h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Main content with left and right sections */}
        <div className="flex px-12 py-6 gap-10">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center space-x-5 mb-8">
                <div className="bg-red-600 text-white py-3 px-4 rounded-[5px] text-xs font-extrabold">PlayZela</div>
                <div className="bg-gradient-to-r from-pink-400 via-pink-600 to-pink-700 text-white py-3 px-5 rounded-[5px] font-extrabold text-xs">
                  DAILY LOTTERY
                </div>
              </div>

              <p className="text-gray-300 text-lg font-medium mb-8">
                Entries open 7:00 AM — Close 6:00 PM. Winners announced 7:00 PM.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                {["hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className="text-center">
                    <div className="text-xs text-gray-400 mb-2 uppercase">{unit}</div>
                    <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-black font-extrabold text-xl rounded-md shadow-md px-5 py-2 tracking-widest">
                      {String(timeLeft[unit]).padStart(2, "0")}
                    </div>
                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black font-extrabold text-lg rounded-md px-5 py-1 mt-1 tracking-widest">
                      {String(timeLeft[unit]).padStart(2, "0")}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-6 ">
                
                <button  onClick={() => navigate("/lottery")} className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-extrabold px-8 py-3 rounded-lg shadow-lg transition hover:scale-105">
                  Buy Ticket
                  
                </button>
                <button  onClick={() => navigate("/lottery")} className="text-gray-400 hover:text-white font-extrabold text-lg transition-colors">
                  View Lottery Results
                </button>
              </div>
              <div className="flex items-center space-x-8 text-gray-300 font-extrabold text-lg mt-12">
                <div className="flex items-center space-x-2">
                  <Target className="text-red-500" size={22} />
                  <span>Top Prize ₹50,000</span>
                </div>
                <div>
                  Tickets sold: <span className="text-orange-400">{ticketsSold}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="bg-gray-800 w-96 p-4 overflow-y-auto max-h-[480px] rounded-3xl relative border border-gray-700">
            {/* Accent bar */}
            {/* <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 rounded-l-3xl "></div> */}

            {/* Header */}
            <h3 className="text-orange-400 font-extrabold text-xl mb-4 ml-4 relative z-10">
              Recent Winners
            </h3>
            <p className="text-gray-400 mb-6 text-sm ml-4 relative z-10">
              Verified payouts • 1,324
            </p>

            {/* Winners list */}
            <div className="space-y-5 relative z-10">
              {winners.map((winner, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {/* Replaced the colored circle with an image */}
                  <img
                    src={winner.img} // Use the image URL from the winner object
                    alt={winner.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-white">{winner.name}</span>
                      <span className="font-extrabold text-orange-400">won {winner.amount}</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {winner.game} • {winner.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyLotteryModal;