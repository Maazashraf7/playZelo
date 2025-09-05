import React, { useState, useEffect } from "react";

const TicketGrid = ({
  mode = "bunch", // "bunch" or "ticket"
  bunchSize = 5,
  takenTickets = [],
  onSelect = () => {},
  onTicketClick = () => {}
}) => {
  const dummyTickets = Array.from({ length: 60 }, (_, i) => `52/${1321 + i}`);

  // Filter out already taken tickets
  const availableTickets = dummyTickets.filter(t => !takenTickets.includes(t));

  const [visibleTickets, setVisibleTickets] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  // Update visibleTickets whenever mode or availableTickets change
  useEffect(() => {
    if (mode === "bunch") {
      // Show only first ticket of each bunch
      const firstTicketsOfBunches = [];
      for (let i = 0; i < availableTickets.length; i += bunchSize) {
        firstTicketsOfBunches.push(availableTickets[i]);
      }
      setVisibleTickets(firstTicketsOfBunches);
    } else if (mode === "ticket") {
      // Show all tickets serial-wise
      const serialTickets = [...availableTickets].sort((a, b) => {
        const aNum = parseInt(a.split("/")[1]);
        const bNum = parseInt(b.split("/")[1]);
        return aNum - bNum;
      });
      setVisibleTickets(serialTickets);
    }
  }, [availableTickets, mode, bunchSize]);

  const handleTicketClick = (ticketStr) => {
    const index = dummyTickets.indexOf(ticketStr);

    if (mode === "bunch") {
      // Build the selected bunch starting from clicked ticket
      const bunch = [];
      for (let i = index; i < dummyTickets.length && bunch.length < bunchSize; i++) {
        if (!takenTickets.includes(dummyTickets[i])) {
          bunch.push(dummyTickets[i]);
        }
      }

      setSelected(bunch);

      // Update visibleTickets to next first tickets of remaining bunches
      const remainingTickets = dummyTickets.filter(
        t => !takenTickets.includes(t) && !bunch.includes(t)
      );
      const nextFirstTickets = [];
      for (let i = 0; i < remainingTickets.length; i += bunchSize) {
        nextFirstTickets.push(remainingTickets[i]);
      }
      setVisibleTickets(nextFirstTickets);
    } else if (mode === "ticket") {
      // Single ticket mode → show full bunch serial-wise
      const bunch = [];
      for (let i = index; i < dummyTickets.length && bunch.length < bunchSize; i++) {
        if (!takenTickets.includes(dummyTickets[i])) {
          bunch.push(dummyTickets[i]);
        }
      }
      setSelected(bunch);
    }

    onTicketClick(ticketStr);
  };

  return (
    <div className="p-4 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200">
      <p className="text-lg font-semibold mb-3 text-gray-800">🎫 Select Ticket Number</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {visibleTickets.map((ticket) => (
          <button
            key={ticket}
            onClick={() => handleTicketClick(ticket)}
            className={`px-3 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all duration-300 border
                       bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300 ${
                         selected.includes(ticket) ? "bg-green-200" : ""
                       }`}
            disabled={takenTickets.includes(ticket)}
          >
            {ticket}
          </button>
        ))}
      </div>

      {/* Show selected tickets serial-wise below */}
      {selected.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-700 mb-2">Selected Tickets:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketGrid;
