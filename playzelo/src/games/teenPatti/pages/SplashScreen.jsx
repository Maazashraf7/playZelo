import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
 
// Images
import logo from "/src/assets/images/Teenpatti/TeenPatti/Images/teenpattilogoo2.png";
import card1 from "/src/assets/images/Teenpatti/TeenPatti/Images/diamond_8.png";
import card2 from "/src/assets/images/Teenpatti/TeenPatti/Images/heart_10.png";
import card3 from "/src/assets/images/Teenpatti/TeenPatti/Images/spade_4.png";
 
// Logo animation
const logoVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};
 
// Cards animation
const cardVariants = {
  hidden: { scale: 0, opacity: 0, y: 50 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    rotate: i === 0 ? -15 : i === 2 ? 15 : 0,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};
 
// Welcome text animation
const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};
 
const SplashScreen = () => {
  const navigate = useNavigate();
  const cards = [card1, card2, card3];
 
  // ⏱ Auto navigate after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/teenpatti/lobby"); // Change this route if needed
    }, 3000); // 3 seconds
 
    return () => clearTimeout(timer); // cleanup
  }, [navigate]);
 
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-[#001743] via-[#002d70] to-[#001743] text-white p-6 text-center relative overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute w-72 h-72 bg-purple-700/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Logo at top */}
      <motion.img
        src={logo}
        alt="Logo"
        className="drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] mt-8"
        style={{ width: "200px" }}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      />
 
      {/* Cards at center */}
      <div className="flex items-center gap-8">
        {cards.map((img, i) => (
          <motion.div
            key={i}
            className="w-20 h-28 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-transform duration-300"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={img}
              alt={`Card ${i + 1}`}
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{ width: "60px" }}
            />
          </motion.div>
        ))}
      </div>
 
      {/* Text at bottom */}
      <div className="mb-10">
        <motion.h3
          className="relative text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to TeenPatti
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded"></span>
        </motion.h3>

        <motion.p
          className="mt-3 text-gray-300 text-lg tracking-wide italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Get ready to play and enjoy!
        </motion.p>
      </div>
    </div>
  );
};
 
export default SplashScreen;