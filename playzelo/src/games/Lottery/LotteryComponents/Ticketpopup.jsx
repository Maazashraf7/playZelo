import React, { useEffect, useState } from "react";

const TicketPopup = ({
  tickets = [],
  drawDate,
  drawTime = "7:30 PM",
  price = 50,
  onClose = () => {},
  onBuy = () => {},
}) => {
  const [secLeft, setSecLeft] = useState(0);

  useEffect(() => {
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

    const target = parseTarget();
    const update = () =>
      setSecLeft(Math.max(0, Math.floor((target - Date.now()) / 1000)));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [drawDate, drawTime]);

  const format = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  };

  const amount = tickets.length * price;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticket-popup-title"
      aria-describedby="ticket-popup-desc"
      tabIndex={-1}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 max-w-md w-full animate-fadeIn">
        <h3
          id="ticket-popup-title"
          className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 select-none"
        >
          Ticket Details
        </h3>

        <p
          id="ticket-popup-desc"
          className="mb-2 text-gray-700 dark:text-gray-300"
        >
          Ticket(s): <strong>{tickets.join(", ")}</strong>
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Price per ticket: ₹{price}
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Draw: {drawDate} @ {drawTime}
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Time left:{" "}
          <span className="font-mono text-red-600 dark:text-red-400 font-bold">
            {format(secLeft)}
          </span>
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => onBuy(tickets)}
            className="flex-1 bg-red-600 dark:bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Buy ₹{amount}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPopup;
