import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import logo from "/src/assets/images/Teenpatti/TeenPatti/Images/teenpattilogoo2.png";

const JoinRoom = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [roomCode, setRoomCode] = useState("");
  const [createdRoomLink, setCreatedRoomLink] = useState("");
  const [joinRoomCode, setJoinRoomCode] = useState("");

  const navigate = useNavigate(); // ✅ React Router navigate hook

  // Generate Room Code
  const handleCreateRoom = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setRoomCode(code);
    setCreatedRoomLink(`${window.location.origin}/room/${code}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(createdRoomLink);
    alert("Room link copied!");
  };

  const handleShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join My Room",
        text: "Click here to join the room:",
        url: createdRoomLink,
      });
    } else {
      alert("Share not supported on this browser, please copy the link.");
    }
  };

  // ✅ Handle Join Room Navigation
  const handleJoinRoom = () => {
    if (!joinRoomCode.trim()) {
      alert("Please enter a valid room code.");
      return;
    }

    // You can pass roomCode via route param or state
    navigate("/teenpatti/matching");
  };

  return (
    <div className="w-screen h-screen bg-[#05113D] flex flex-col items-center justify-center space-y-6 px-4">
      {/* Logo */}
      <img src={logo} alt="PlayZelo Logo" className="w-40 sm:w-48 md:w-56 lg:w-64" />

      {/* Buttons */}
      <button
        onClick={() => setShowCreatePopup(true)}
        className="w-full sm:w-80 md:w-96 lg:w-[400px] py-3 bg-gradient-to-r from-red-400 to-yellow-600 rounded-2xl text-blue-900 font-black shadow-lg transform hover:scale-105 transition-all"
        style={{ borderRadius: "20px", marginBottom: "10px", fontWeight: "bold" }}
      >
        Create Room
      </button>

      <button
        onClick={() => setShowJoinPopup(true)}
        className="w-full sm:w-80 md:w-96 lg:w-[400px] py-3 bg-gradient-to-r from-red-400 to-yellow-600 rounded-2xl text-blue-900 font-black shadow-lg transform hover:scale-105 transition-all"
        style={{ borderRadius: "20px", fontWeight: "bold" }}
      >
        Join Room
      </button>

      {/* Create Room Popup */}
      {showCreatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#0A1B4D]/95 backdrop-blur-lg rounded-2xl p-8 w-[90%] sm:w-[420px] shadow-2xl border border-white/10 relative text-white animate-fadeIn">
            <button
              onClick={() => {
                setShowCreatePopup(false);
                setRoomCode("");
                setCreatedRoomLink("");
              }}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-white tracking-wide">
              🎉 Create Room
            </h2>

            {!roomCode ? (
              <button
                onClick={handleCreateRoom}
                className="w-full bg-gradient-to-r from-red-400 to-yellow-600 text-blue-900 font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Generate Room
              </button>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-lg font-medium">Your Room Code:</p>
                  <p className="text-3xl font-extrabold text-orange-400 tracking-widest">
                    {roomCode}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">Room Link</label>
                  <input
                    type="text"
                    value={createdRoomLink}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#0F2A5F] text-gray-200 border border-gray-600 focus:outline-none"
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md"
                  >
                    Copy Link
                  </button>
                  <button
                    onClick={handleShareLink}
                    className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold shadow-md"
                  >
                    Share
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Join Room Popup */}
      {showJoinPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#0A1B4D]/95 backdrop-blur-lg rounded-2xl p-8 w-[90%] sm:w-[420px] shadow-2xl border border-white/10 relative text-white animate-fadeIn">
            <button
              onClick={() => setShowJoinPopup(false)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-white tracking-wide">
              🔑 Join Room
            </h2>

            <input
              type="text"
              placeholder="Enter Room Code"
              value={joinRoomCode}
              onChange={(e) => setJoinRoomCode(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0F2A5F] text-gray-200 border border-gray-600 focus:outline-none mb-5"
            />

            <button
              onClick={handleJoinRoom} // ✅ Navigate on click
              className="w-full bg-gradient-to-r from-red-400 to-yellow-600 text-blue-900 font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Join
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinRoom;