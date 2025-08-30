import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import "animate.css"; // Animation library

const TicketGrid = () => {
  
  const generateTickets = () => {
    return Array.from({ length: 400 }, (_, i) => ({
      id: `#T${i + 1}`,
      status: i % 3 === 0 ? "sold" : "available",
      price: 10,
    }));
  };

  const initialTickets = generateTickets();
  const [tickets, setTickets] = useState(initialTickets);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const ticketsPerPage = 20;

  const filteredTickets =
    filter === "all" ? tickets : tickets.filter((t) => t.status === filter);

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const buyTicket = (ticketId) => {
    Swal.fire({
      title: `Purchase Ticket ${ticketId}`,
      html: `
        <input id="username" class="swal2-input" placeholder="Enter your username" />
        <div class="text-gray-400 text-sm mt-2">Ticket price: ₹10</div>`,
      showCancelButton: true,
      confirmButtonText: "Pay ₹10",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2563EB",
      cancelButtonColor: "#6B7280",
      background: "#1E293B",
      color: "#F1F5F9",
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      preConfirm: () => {
        const username = document.getElementById("username").value;
        if (!username) {
          Swal.showValidationMessage("Please enter your username");
          return false;
        }
        return { username };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const username = result.value.username;
        setTickets((prevTickets) =>
          prevTickets.map((t) =>
            t.id === ticketId ? { ...t, status: "sold" } : t
          )
        );

        Swal.fire({
          title: `🎉 Ticket ${ticketId} purchased!`,
          text: `User: ${username}`,
          icon: "success",
          confirmButtonColor: "#2563EB",
          background: "#1E293B",
          color: "#F1F5F9",
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown",
          },
        });
      }
    });
  };

  const handleSoldTicket = (ticketId) => {
    Swal.fire({
      title: "Ticket Already Sold!",
      text: `Ticket ${ticketId} is already sold.`,
      icon: "error",
      confirmButtonColor: "#EF4444",
      background: "#1E293B",
      color: "#F1F5F9",
      showClass: {
        popup: "animate__animated animate__shakeX",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
   
  <div className="relative container mx-5 mt-4 px-6 py-6 bg-[#0a1a3c] min-h-screen">
    {/* Watermark Background */}
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-25deg)",
        background: "url('/assets/logo/logo2.png') no-repeat center",
        backgroundSize: "contain",
        width: "600px",
        height: "600px",
        opacity: 0.08,
        pointerEvents: "none",
        zIndex: 0,
      }}
    ></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Top Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Pagination */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg shadow hover:from-blue-800 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            <span className="font-medium text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg shadow hover:from-blue-800 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>

          {/* Filters */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setFilter("available");
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg font-semibold text-white shadow ${
                filter === "available"
                  ? "bg-gradient-to-r from-green-700 to-green-600"
                  : "bg-green-600 hover:bg-green-700"
              } transition-all`}
            >
              Available
            </button>
            <button
              onClick={() => {
                setFilter("sold");
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg font-semibold text-white shadow ${
                filter === "sold"
                  ? "bg-gradient-to-r from-red-700 to-red-600"
                  : "bg-red-600 hover:bg-red-700"
              } transition-all`}
            >
              Sold
            </button>
            <button
              onClick={() => {
                setFilter("all");
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg font-semibold text-white shadow ${
                filter === "all"
                  ? "bg-gradient-to-r from-gray-700 to-gray-600"
                  : "bg-gray-600 hover:bg-gray-700"
              } transition-all`}
            >
              All
            </button>
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {currentTickets.map((ticket, index) => (
            <div
              key={ticket.id}
              onClick={() =>
                ticket.status === "sold"
                  ? handleSoldTicket(ticket.id)
                  : buyTicket(ticket.id)
              }
              className={`relative p-4 rounded-2xl bg-gradient-to-b from-blue-900 to-blue-800 
                border border-white/10 shadow-lg cursor-pointer text-center text-white
                animate-fadeIn transition-transform duration-300 
                hover:scale-105 overflow-hidden
                before:content-[''] before:absolute before:inset-0 before:pointer-events-none 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                before:animate-sweep`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* SOLD Badge */}
              {ticket.status === "sold" && (
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-md z-10">
                  SOLD
                </div>
              )}

              {/* Ticket ID */}
              <div className="font-bold text-lg text-yellow-400 relative z-10">
                {ticket.id}
              </div>

              {/* Status Dot */}
              <div
                className={`w-3 h-3 rounded-full mt-2 mx-auto relative z-10 ${
                  ticket.status === "sold" ? "bg-red-600" : "bg-green-500"
                }`}
              />

              {/* Status text */}
              <div className="mt-2 text-sm text-gray-300 relative z-10">
                {ticket.status === "sold" ? "Taken" : "Available"}
              </div>

              {/* Price */}
              <div className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 relative z-10">
                ₹{ticket.price}
              </div>
            </div>
          ))}
        </div>

        {/* Showing info */}
        <div className="flex justify-between mt-6 items-center">
          <div className="text-sm text-gray-400">
            Showing {indexOfFirstTicket + 1} to{" "}
            {Math.min(indexOfLastTicket, filteredTickets.length)} of{" "}
            {filteredTickets.length} tickets
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGrid;