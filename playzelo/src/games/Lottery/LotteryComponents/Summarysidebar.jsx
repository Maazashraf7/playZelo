import React, { useEffect, useState } from "react";
import ActionButtons from "./Actionbtn";

/**
 * Props:
 * - drawDate (string "DD/MM/YYYY")
 * - drawTime (string like "7:30 PM" or "19:30")
 * - selectedTickets (array)
 * - ticketPrice (number)
 */
const SummarySidebar = ({
  drawDate,
  drawTime = "7:30 PM",
  selectedTickets = [],
  ticketPrice = 50,
}) => {
  const [timeLeftSec, setTimeLeftSec] = useState(0);

  const parseTarget = () => {
    if (!drawDate) return Date.now();
    const [d, m, y] = drawDate.split("/").map(Number);

    let hours = 0,
      minutes = 0;
    if (drawTime.includes("AM") || drawTime.includes("PM")) {
      const [timePart, meridian] = drawTime.split(" ");
      const [hh, mm] = timePart.split(":").map(Number);
      hours = hh % 12 + (meridian === "PM" ? 12 : 0);
      minutes = mm;
    } else {
      const [hh, mm] = drawTime.split(":").map(Number);
      hours = hh;
      minutes = mm;
    }
    return new Date(y, m - 1, d, hours, minutes).getTime();
  };

  useEffect(() => {
    const target = parseTarget();
    const update = () => {
      const sec = Math.max(0, Math.floor((target - Date.now()) / 1000));
      setTimeLeftSec(sec);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [drawDate, drawTime]);

  const breakdown = (s) => {
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return { d, h, m, sec };
  };

  const { d, h, m, sec } = breakdown(timeLeftSec);
  const qtyToShow = selectedTickets.length;
  const amount = ticketPrice * qtyToShow;

  return (
    <aside
      className="w-full max-w-sm lg:w-80 sticky top-20 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-3xl shadow-xl p-6 mx-auto"
      style={{ minWidth: "320px" }}
      aria-label="Summary Sidebar with countdown timer"
    >
      <h2 className="text-xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide select-none">
        ⏳ Sale closes in
      </h2>

      {/* Countdown Timer Pills */}
      <div className="flex justify-center gap-3 mb-8" role="timer" aria-live="polite" aria-atomic="true">
        {[{ label: "D", value: d }, { label: "H", value: h }, { label: "M", value: m }, { label: "S", value: sec }].map((t) => (
          <div key={t.label} className="flex flex-col items-center">
            <time
              className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-5 py-3 rounded-xl text-3xl font-mono font-bold shadow-lg transition-transform duration-300 select-none"
              dateTime={`${String(t.value).padStart(2, "0")}${t.label.toLowerCase()}`}
              aria-label={`${t.label} - ${t.value}`}
            >
              {String(t.value).padStart(2, "0")}
            </time>
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t.label}</span>
          </div>
        ))}
      </div>

      {/* Purchase Details */}
      <dl className="divide-y divide-gray-300 dark:divide-gray-700 text-gray-700 dark:text-gray-300 text-sm space-y-4">
        <div className="flex justify-between">
          <dt>Date</dt>
          <dd className="font-semibold">{drawDate || "—"}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Tickets</dt>
          <dd className="font-semibold">{selectedTickets.length > 0 ? selectedTickets.join(", ") : "—"}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Quantity</dt>
          <dd className="font-semibold">{qtyToShow}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Amount</dt>
          <dd className="font-semibold">₹{amount}</dd>
        </div>
      </dl>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      <div className="flex justify-between text-lg font-extrabold text-gray-900 dark:text-white select-none">
        <span>Sub Total</span>
        <span>₹{amount}</span>
      </div>
      <div className="flex gap-3 mt-6">
            <ActionButtons/>
            {/* <button
              onClick={() => handleAddToCart(selectedTickets)}
              className="flex-grow px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuy(selectedTickets)}
              className="flex-grow px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-400 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all"
            >
              Buy Now
            </button> */}
          </div>
    </aside>
  );
};

export default SummarySidebar;
