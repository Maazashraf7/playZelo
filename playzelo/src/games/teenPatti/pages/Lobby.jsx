import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import logo from '../../../assets/images/Teenpatti/Teenpatti/Images/teenpattilogoo2.png';
import bonusImage from '../../../assets/images/Teenpatti/Teenpatti/Images/newlobby1.png';
import animationData from '../../../assets/images/Teenpatti/Teenpatti/animations/celebrationsbegin.json';
import bgImage from '../../../assets/images/Teenpatti/Teenpatti/Images/1213.jpg';
 
function LobbyPage() {
  const lottieRef = useRef(null);
  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();
 
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);
 
  const handleCloseDialog = () => setShowDialog(false);
 
  const goToEntryPayment = () => {
    navigate('/teenpatti/entry'); // Existing route
  };
 
  const goToPublicEntryLobby = () => {
    navigate('/teenpatti/joinroom'); // 🆕 Add this route in your router file
  };
 
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img src={bgImage} alt="background" className="absolute top-0 left-0 w-full object-cover z-0" style={{ height: 700 }} />

      {/* Logo */}
      <img src={logo} alt="Game Logo" className="absolute top-5 left-5 w-[180px] h-[160px] z-10" />

      {/* Lottie Animation */}
      <div ref={lottieRef} className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[700px] h-[380px] z-10"></div>

      {/* Daily Bonus Popup */}
      {showDialog && (
        <div className="absolute top-5 right-5 w-[350px] bg-[#540909] rounded-xl p-4 flex flex-col gap-2 items-center z-20">
          <h2 className="text-white font-cursive font-bold text-lg">Daily Bonus</h2>
          <img src={bonusImage} alt="Bonus" className="w-full rounded-lg" />
          <button
            onClick={handleCloseDialog}
            className="px-3 py-1 rounded-lg text-white font-semibold"
            style={{ width: "300px" }}
          >
            Close
          </button>
        </div>
      )}
 
      {/* Entry Lobby Button */}
      <button
        onClick={goToEntryPayment}
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 px-7 py-2 rounded-2xl font-mono font-bold text-white bg-gradient-to-r from-pink-500 via-yellow-300 to-green-400 bg-[length:600%_600%] z-20"
      >
        Entry Lobby
      </button>
 
      {/* 🆕 Public Entry Lobby Button */}
      <button
        onClick={goToPublicEntryLobby}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-7 py-2 rounded-2xl font-mono font-bold text-white bg-gradient-to-r from-purple-500 via-blue-300 to-green-400 bg-[length:600%_600%] z-20"
      >
        Create Lobby
      </button>
    </div>
  );
}
 
export default LobbyPage;