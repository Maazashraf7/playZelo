import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "animate.css"; // Animation library
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const TicketGrid = () => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [winnerData, setWinnerData] = useState(null);
  const [loadingWinner, setLoadingWinner] = useState(false);

  const [countdown, setCountdown] = useState(3);

  const ticketsPerPage = 20;
  const navigate = useNavigate();

  // Confetti celebration animation
  const launchConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 5,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  // Fetch tickets on mount
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setErrorMsg("");
        const response = await fetch("https://gamer-lk3e.onrender.com/api/tickets");
        if (!response.ok) throw new Error("Failed to fetch tickets");
        const data = await response.json();
        const apiTickets = data.tickets.map((ticket) => ({
          id: ticket._id,
          ticketNumber: ticket.ticketNumber,
          status: ticket.status,
          price: ticket.price || (ticket.lotteryId?.ticketPrice ?? 0),
          username: ticket.username || "",
          lotteryId: ticket.lotteryId?._id || ticket.lotteryId,
        }));
        setTickets(apiTickets);
      } catch (error) {
        console.error(error);
        setErrorMsg("Unable to load tickets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  // Filtering tickets by status
  const filteredTickets = filter === "all" ? tickets : tickets.filter(t => t.status === filter);

  // Pagination slicing
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  // Page change handler
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Countdown for winner modal
  useEffect(() => {
    let timer;
    if (showWinnerModal) {
      setCountdown(3);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setCountdown(3);
    }
    return () => clearInterval(timer);
  }, [showWinnerModal]);

  // Buy ticket popup & API call
  const buyTicket = (ticketNumber, price) => {
    Swal.fire({
      title: `<div class="text-2xl font-bold text-cyan-400">🎟️ Buy Ticket #${ticketNumber}</div>`,
      html: `
        <div class="flex flex-col gap-3 items-center">
          <input id="username" 
            class="swal2-input bg-slate-800/60 text-white placeholder-gray-400 border border-cyan-400/40 focus:ring-2 focus:ring-cyan-400 rounded-xl" 
            placeholder="Enter your username" 
            style="box-shadow: 0 0 15px rgba(0,255,255,0.3);"/>
          <div class="text-gray-300 text-md font-medium mt-2 bg-slate-700/40 px-4 py-2 rounded-lg shadow-lg">
            💰 Ticket Price: <span class="text-green-400 font-semibold">${price}<span>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "⚡ Pay ₹ " + price,
      cancelButtonText: "❌ Cancel",
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#f43f5e",
      background: "rgba(15, 23, 42, 0.9)",
      color: "#E2E8F0",
      backdrop: `rgba(0,0,0,0.7)`,
      customClass: {
        popup: "rounded-2xl shadow-2xl border border-cyan-400/30 backdrop-blur-md",
        title: "mb-3",
        confirmButton:
          "px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg transition-all duration-300",
        cancelButton:
          "px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 shadow-lg transition-all duration-300",
      },
      showClass: { popup: "animate__animated animate__fadeInDown" },
      hideClass: { popup: "animate__animated animate__fadeOutUp" },
      preConfirm: async () => {
        const username = document.getElementById("username").value;
        if (!username) {
          Swal.showValidationMessage("⚠️ Please enter your username");
          return false;
        }
        try {
          const res = await fetch(`https://gamer-lk3e.onrender.com/api/tickets/${ticketNumber}/buy`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ username }),
          });
          const data = await res.json();
          if (res.ok && data.success) {
            setTickets((prev) =>
              prev.map((t) => (t.ticketNumber === ticketNumber ? { ...t, status: "sold" } : t))
            );
            Swal.fire({
              title: `<span class="text-green-400 text-2xl font-bold">✅ Ticket Purchased!</span>`,
              html: `<div class="text-lg text-gray-200">🎟️ Ticket <b>${ticketNumber}</b> bought by <span class="text-cyan-400 font-semibold">${username}</span></div>`,
              icon: "success",
              background: "rgba(15, 23, 42, 0.95)",
              color: "#E2E8F0",
            });
            return true;
          } else {
            Swal.fire({
              title: `<span class="text-red-400 text-xl font-bold">❌ Purchase Failed</span>`,
              text: data.message || "Something went wrong.",
              icon: "error",
              background: "rgba(15, 23, 42, 0.95)",
              color: "#E2E8F0",
            });
            return false;
          }
        } catch (error) {
          console.error("Error:", error);
          Swal.fire({
            title: `<span class="text-yellow-400 text-xl font-bold">⚠️ Server Error</span>`,
            text: "Unable to connect to server.",
            icon: "error",
            background: "rgba(15, 23, 42, 0.95)",
            color: "#E2E8F0",
          });
          return false;
        }
      },
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
      showClass: { popup: "animate__animated animate__shakeX" },
      hideClass: { popup: "animate__animated animate__fadeOutUp" },
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
      />
      {/* Content Wrapper */}
      <div className="relative z-10">
        {loading && <div className="text-center text-gray-300">Loading tickets...</div>}
        {errorMsg && <div className="text-center text-red-500 font-semibold">{errorMsg}</div>}
        {!loading && !errorMsg && (
          <>
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
              <div className="flex justify-end gap-4 flex-wrap">
                {[
                  { key: "available", colorFrom: "green-700", colorTo: "green-600", label: "Available" },
                  { key: "sold", colorFrom: "red-700", colorTo: "red-600", label: "Sold" },
                  { key: "all", colorFrom: "gray-700", colorTo: "gray-600", label: "All" },
                ].map(({ key, colorFrom, colorTo, label }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setFilter(key);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold text-white shadow ${
                      filter === key
                        ? `bg-gradient-to-r from-${colorFrom} to-${colorTo}`
                        : `bg-${colorTo} hover:bg-${colorFrom}`
                    } transition-all whitespace-nowrap`}
                  >
                    {label}
                  </button>
                ))}

                {/* See Winner Button */}
                <button
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 shadow transition-all"
                  onClick={async () => {
                    setLoadingWinner(true);
                    try {
                      const lotteryId = tickets[0]?.lotteryId;
                      if (lotteryId) {
                        const res = await fetch(`https://gamer-lk3e.onrender.com/api/lottery/winner/${lotteryId}`);
                        const data = await res.json();
                        if (res.ok) {
                          setWinnerData(data.winners);
                          setShowWinnerModal(true);
                        } else {
                          Swal.fire("Error", "Unable to fetch winner data.", "error");
                        }
                      } else {
                        Swal.fire("Error", "Lottery ID not found.", "error");
                      }
                    } catch {
                      Swal.fire("Error", "Unable to fetch winner data.", "error");
                    } finally {
                      setLoadingWinner(false);
                    }
                  }}
                >
                  See Winner
                </button>
              </div>
            </div>

            {/* Tickets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {currentTickets.length > 0 ? (
                currentTickets.map((ticket, index) => (
                  <div
                    key={ticket.id}
                    onClick={() =>
                      ticket.status === "sold"
                        ? handleSoldTicket(ticket.ticketNumber)
                        : buyTicket(ticket.ticketNumber, ticket.price)
                    }
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        ticket.status === "sold"
                          ? handleSoldTicket(ticket.ticketNumber)
                          : buyTicket(ticket.ticketNumber, ticket.price);
                      }
                    }}
                    aria-label={`Ticket ${ticket.ticketNumber}, status ${ticket.status}, price ₹${ticket.price}`}
                    className={`relative p-5 rounded-3xl bg-gradient-to-b from-blue-900 to-blue-800 border border-white/20 shadow-xl text-white text-center cursor-pointer transition duration-300
                      focus:outline-none focus:ring-4 focus:ring-cyan-500
                      hover:scale-105 hover:shadow-2xl
                      animate-fadeIn
                      before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-sweep`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {ticket.status.toLowerCase() === "sold" && (
                      <div className="absolute top-2 left-2 bg-red-700 shadow-lg text-white font-bold text-xs px-3 py-1 rounded-xl animate-pulse z-10">
                        SOLD
                      </div>
                    )}
                    <div className="relative z-10 font-extrabold text-2xl text-yellow-400">{ticket.ticketNumber}</div>
                    <div
                      className={`w-5 h-5 rounded-full mx-auto mt-3 mb-2 shadow-lg relative z-10 ${
                        ticket.status === "sold"
                          ? "bg-red-600 shadow-red-700"
                          : "bg-green-500 shadow-green-400"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      ₹{ticket.price}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400">No tickets available</div>
              )}
            </div>

            {/* Showing info */}
            <div className="flex justify-between mt-6 items-center">
              <div className="text-sm text-gray-400">
                Showing {indexOfFirstTicket + 1} to {Math.min(indexOfLastTicket, filteredTickets.length)} of {filteredTickets.length} tickets
              </div>
            </div>
          </>
        )}

        {/* Winner Modal */}
        {showWinnerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl max-h-full overflow-auto rounded-3xl bg-[#1c1c1c]/85 p-10 text-white text-center shadow-[0_0_40px_rgba(255,200,0,0.8),inset_0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-lg animate-[scaleIn_1s_ease-in-out]">
              <button
                onClick={() => setShowWinnerModal(false)}
                className="absolute top-4 right-4 text-white text-2xl font-bold z-60 hover:text-yellow-400"
                aria-label="Close winner modal"
              >
                ×
              </button>

              {countdown > 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-6xl font-bold text-yellow-400 mb-4 animate-pulse">{countdown}</div>
                  <div className="text-2xl font-semibold">🎉 Winner Announcement in...</div>
                </div>
              ) : winnerData && winnerData.length > 0 ? (
                <>
                  <img
                    src={winnerData[0].profileImage || "https://i.pravatar.cc/120"}
                    alt="winner"
                    className="rounded-full border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.8)] mx-auto mb-4 w-32 h-32 object-cover"
                  />
                  <h2 className="text-yellow-400 mb-4 text-3xl font-bold drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
                    🎉 Congratulations 🎉
                  </h2>
                  <p className="mb-1 text-lg">
                    <b>Name:</b> {winnerData[0].name}
                  </p>
                  <p className="mb-1 text-lg">
                    <b>Username:</b> @{winnerData[0].username}
                  </p>
                  <div className="flex justify-center items-center gap-6 my-6 flex-wrap">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 rounded-full shadow-[0_0_25px_rgba(255,204,0,0.8)] hover:scale-110 transition">
                      🎟 Ticket: #{winnerData[0].ticketNumber}
                    </button>
                    <button className="bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full shadow-[0_0_25px_rgba(0,230,118,0.8)] hover:scale-110 transition">
                      🏆 Prize: ₹ {winnerData[0].prizeAmount || "120000"}
                    </button>
                  </div>
                  {!winnerData[0].success ? (
                    <button
                      onClick={() => {
                        const updatedWinnerData = [...winnerData];
                        updatedWinnerData[0] = { ...updatedWinnerData[0], success: true };
                        setWinnerData(updatedWinnerData);
                        launchConfetti();
                      }}
                      className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-[0_5px_15px_rgba(255,200,0,0.6)] hover:scale-105 transition"
                    >
                      Claim Prize
                    </button>
                  ) : (
                    <p className="text-green-400 text-xl font-bold mt-6 animate-fadeIn drop-shadow-[0_0_10px_rgba(0,255,150,0.8)]">
                      💸 Your prize will be transferred to your wallet shortly...
                    </p>
                  )}
                </>
              ) : (
                <p className="text-red-400 font-semibold">No winner data available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketGrid;
