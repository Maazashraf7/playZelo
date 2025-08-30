import React from "react";
import TicketGrid from "../LotteryComponents/TicketGrid";
import LotteryHeader from "../LotteryComponents/Header";
 
function LotteryPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/lottery-bg.jpg')",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="min-h-screen bg-black/70 rounded-xl p-4">
        {/* Header */}
        <LotteryHeader />
 
        {/* Ticket Grid */}
        <TicketGrid />
      </div>
    </div>
  );
}
 
export default LotteryPage;