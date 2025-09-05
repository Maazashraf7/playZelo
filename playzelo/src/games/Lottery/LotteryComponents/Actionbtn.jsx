import React from "react";

/**
 * Props:
 * - onAddToCart(selectedTickets)
 * - onBuy(selectedTickets)
 * - selectedTickets (array)
 */
const ActionButtons = ({ onAddToCart = () => {}, onBuy = () => {}, selectedTickets = [] }) => {
  const disabled = selectedTickets.length === 0;

  return (
    <div className="flex gap-4 mt-6">
      {/* Add to Cart */}
      <button
        onClick={() => onAddToCart(selectedTickets)}
        disabled={disabled}
        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all shadow-md
          ${
            disabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105 hover:shadow-lg"
          }`}
      >
        🛒 Add to Cart
      </button>

      {/* Buy Now */}
      <button
        onClick={() => onBuy(selectedTickets)}
        disabled={disabled}
        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all shadow-md
          ${
            disabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 hover:shadow-lg"
          }`}
      >
        ✈️ Buy Now
      </button>
    </div>
  );
};

export default ActionButtons;
