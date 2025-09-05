import React from "react";
import { Calendar, Clock, Ticket } from "lucide-react";

const LotteryInfo = ({
  title = "Playzelo Lottery",
  ticketPrice = 50,
  drawInfo = { date: "01/09/2025", time: "6:30 PM" },
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-black/80 backdrop-blur-xl px-5 py-7 md:p-8 border border-gray-100 dark:border-gray-700 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] hover:scale-[1.01] duration-300 transition-all"
      style={{ color: "black" }}
    >
      {/* Animated Decorative Gradient Blob */}
      <div className="absolute -top-12 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/40 via-pink-300/30 to-yellow-200/30 rounded-full blur-2xl animate-pulse"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-10 gap-4">
        <div>
          <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-300/80 to-indigo-200/80 text-blue-900 px-6 py-2 rounded-full text-base font-black shadow-lg dark:bg-gray-800 dark:text-yellow-300">
          <Ticket className="w-5 h-5" aria-label="Ticket price" />
          ₹{ticketPrice}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-7 space-y-3 text-base relative z-10">
        <p className="flex items-center gap-3 bg-gray-100/80 dark:bg-gray-900/60 px-4 py-2.5 rounded-xl shadow border border-white/50 dark:border-gray-800">
          <Calendar className="w-5 h-5 text-green-700 dark:text-green-400" />
          <span>
            Draw Date:{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {drawInfo.date}
            </span>
          </span>
        </p>
        <p className="flex items-center gap-3 bg-gray-100/80 dark:bg-gray-900/60 px-4 py-2.5 rounded-xl shadow border border-white/50 dark:border-gray-800">
          <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-300" />
          <span>
            Draw Time:{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {drawInfo.time}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LotteryInfo;
