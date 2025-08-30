// src/components/LotteryHeader.jsx
import React from "react";
 
export default function LotteryHeader() {
  return (
    <div className="w-full mt-1 rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden bg-[#0b1736]">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[6rem] md:text-[10rem] font-extrabold text-white/10 select-none tracking-widest whitespace-nowrap">
          PlayZelo
        </span>
      </div>
 
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side */}
        <div className="mb-2 md:mb-0">
          <h1 className="text-lg md:text-2xl font-extrabold text-white">
            Daily Lottery — Buy Your Lucky Ticket
          </h1>
          <p className="text-sm md:text-lg text-gray-300">
            Entries: 7:00 AM — 6:00 PM • Winners announced at 7:00 PM
          </p>
        </div>
 
        {/* Right Side */}
        <div className="text-sm text-gray-400">
          Ticket price: <span className="font-bold text-white">₹10</span>
        </div>
      </div>
    </div>
  );
}