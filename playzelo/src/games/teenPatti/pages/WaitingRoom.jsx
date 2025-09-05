// WaitingRoom.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Example avatars (replace with your own images)
const players = [
  { id: "#01", name: "Rahul", avatar: "/src/assets/images/Teenpatti/Teenpatti/Images/boy.png" },
  { id: "#02", name: "Amit", avatar: "/src/assets/images/Teenpatti/Teenpatti/Images/boy.png" },
  { id: "#03", name: "Apoorv", avatar: "/src/assets/images/Teenpatti/Teenpatti/Images/boy.png" },
  { id: "#04", name: "Roshan", avatar:"/src/assets/images/Teenpatti/Teenpatti/Images/boy.png" },
  { id: "#06", name: "Shrishti", avatar: "/src/assets/images/Teenpatti/Teenpatti/Images/woman.png" },
];

const WaitingRoom = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // ✅ Navigate players to GameRoom
    navigate("/teenpatti/play", { state: { players } });
  };

  return (
    <div className="w-screen h-screen bg-[#05113D] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated Heading */}
      <motion.h2
        className="text-white text-xl font-extrabold mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Waiting for Players...
      </motion.h2>

      {/* Players Grid */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-6">
        {players.map((player, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 justify-center bg-[#081B4B] px-4 py-2 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={player.avatar}
              alt={player.name}
              className="w-12 h-12 rounded-full border-2 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
            />
            <div className="flex flex-col">
              <span className="text-yellow-400 font-bold text-lg">{player.name}</span>
              <span className="text-gray-300 text-sm">{player.id}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Start Game Button */}
      <motion.button
        onClick={handleStartGame}
        className="mt-12 bg-gradient-to-r from-red-400 to-yellow-600 text-white font-extrabold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.9)] hover:shadow-[0_0_35px_rgba(34,197,94,1)] text-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        style={{ borderRadius: "30px", fontWeight: "bolder", marginTop: "5px" }}
      >
        Start Game
      </motion.button>

      {/* Floating background circles */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-20 blur-xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default WaitingRoom;
