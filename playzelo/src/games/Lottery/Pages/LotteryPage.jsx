import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast"; // ✅ import react-hot-toast
import LotteryInfo from "../LotteryComponents/lotteryinfo";
import BunchSelector from "../LotteryComponents/Bunch";
import TicketGrid from "../LotteryComponents/Ticketgrid";
import SummarySidebar from "../LotteryComponents/SummarySidebar";
import TicketPopup from "../LotteryComponents/TicketPopup";

const LotteryDemoWrapper = () => {
  const location = useLocation();
  const lottery = location.state?.lottery || {};

  const [mode, setMode] = useState("single");
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [viewTicket, setViewTicket] = useState(null);

  const drawDate = lottery.draw || "N/A";
  const drawTime = lottery.time || "N/A";
  const ticketPrice = Number(lottery.price?.replace("₹", "")) || 0;
  const lotteryTitle = lottery.title || "Lottery Game";

  const handleGridSelect = (arr) => setSelectedTickets(arr);
  const handleTicketClick = (ticket) => setViewTicket([ticket]);

  const handleAddToCart = (tickets = []) => {
    if (!tickets.length) return toast.error("No tickets selected to add to cart.");
    toast.success(`🛒 Added ${tickets.length} ticket(s) for ${lotteryTitle}`);
  };

  const handleBuy = (tickets = []) => {
    if (!tickets.length) return toast.error("Please select tickets first.");
    toast.success(`🎟️ Buying: ${tickets.join(", ")} for ${lotteryTitle}`);
  };

  // ✅ Centralized buy action
  const triggerBuy = () => handleBuy(selectedTickets);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-indigo-900 via-blue-800 to-purple-900">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* HERO BANNER */}
      <div className="w-full px-4 py-6 md:py-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-800 shadow-lg">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-xl tracking-wide mb-2">
            🔥 {lotteryTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-2">
            Draw: <span className="font-bold">{drawDate}</span> at{" "}
            <span className="font-bold">{drawTime}</span>
          </p>
          <button
            className="mt-5 px-8 py-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white text-xl rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-200"
            onClick={triggerBuy}
          >
            🎟️ Quick Buy
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/img/lottery-hero.svg"
            alt="Lottery Illustration"
            className="w-40 h-40 md:w-56 md:h-56"
            loading="lazy"
          />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6 grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white bg-opacity-90 rounded-2xl p-5 drop-shadow-lg animate-fadeIn">
            <LotteryInfo drawInfo={{ date: drawDate, time: drawTime }} />
          </div>
          <div className="bg-white bg-opacity-80 rounded-2xl p-5 drop-shadow-lg animate-fadeIn flex flex-wrap gap-4 items-center">
            <BunchSelector mode={mode} setMode={setMode} />
          </div>
          <div className="bg-white bg-opacity-80 rounded-2xl p-5 drop-shadow-lg animate-fadeIn">
            <TicketGrid
              mode={mode}
              onSelect={handleGridSelect}
              onTicketClick={handleTicketClick}
            />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-2 sticky top-6 flex flex-col">
          <SummarySidebar
            lotteryTitle={lotteryTitle}
            drawDate={drawDate}
            drawTime={drawTime}
            selectedTickets={selectedTickets}
            quantity={selectedTickets.length}
            ticketPrice={ticketPrice}
          />
        </aside>
      </div>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full lg:hidden bg-white/90 backdrop-blur border-t border-gray-200 flex flex-row items-center p-3 shadow-inner z-40 gap-2">
        <button
          onClick={() => handleAddToCart(selectedTickets)}
          className="flex-1 px-4 py-3 bg-blue-700 text-white font-bold rounded-lg mr-2"
        >
          Add to Cart
        </button>
        <button
          onClick={triggerBuy}
          className="flex-1 px-4 py-3 bg-amber-400 text-white font-bold rounded-lg"
        >
          Buy Now
        </button>
      </div>

      {/* TICKET POPUP */}
      {viewTicket && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl w-[95vw] max-w-lg mx-auto scale-95 md:scale-100 transition-all">
            <button
              aria-label="Close ticket popup"
              onClick={() => setViewTicket(null)}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full text-lg w-9 h-9 flex items-center justify-center"
            >
              ×
            </button>
            <TicketPopup
              tickets={viewTicket}
              drawDate={drawDate}
              drawTime={drawTime}
              price={ticketPrice}
              onClose={() => setViewTicket(null)}
              onBuy={handleBuy}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LotteryDemoWrapper;
