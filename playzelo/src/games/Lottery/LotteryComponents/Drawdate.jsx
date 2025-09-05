import React from "react";

/**
 * DrawDateSelector shows up to 3 date options by default.
 * Props: drawDates (array), selected (string), setSelected(fn)
 */
const DrawDateSelector = ({ drawDates = ["12/09/2025", "13/09/2025", "14/09/2025"], selected, setSelected }) => {
  return (
    <div>
      <h4 className="font-semibold mb-2">Add Another Draw</h4>
      <div className="flex flex-wrap gap-2">
        {drawDates.map((d) => (
          <button
            key={d}
            onClick={() => setSelected(d)}
            className={`px-4 py-2 rounded-full border ${selected === d ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {d}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">Select a draw date (max 3 shown)</p>
    </div>
  );
};

export default DrawDateSelector;
