import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import logo from '../utils/assets/Images/teenpattilogoo2.png';
import bonusImage from '../utils/assets/Images/newlobby1.png';
import animationData from '../utils/assets/Images/celebrationsbegin.json';
import bgImage from '../utils/assets/Images/1213.jpg';
 
function LobbyPage() {
  const lottieRef = useRef(null);
  const [showDialog, setShowDialog] = useState(true);
 
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
  const goToEntryPayment = () => window.location.href = '/entrylobby';
 
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img src={bgImage} alt="background" className="absolute top-0 left-0 w-full object-cover z-0" style={{height : 700}}/>
 
      {/* Logo top-left */}
      <img src={logo} alt="Game Logo" className="absolute top-5 left-5 w-[180px] h-[160px] z-10" />
 
      {/* Lottie coins falling animation */}
      <div ref={lottieRef} className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[700px] h-[380px] z-10"></div>
 
      {/* Daily Bonus popup */}
      {showDialog && (
        <div className="absolute top-5 right-5 w-[350px] bg-[#540909] rounded-xl p-4 flex flex-col gap-2 items-center z-20">
          <h2 className="text-white font-cursive font-bold text-lg">Daily Bonus</h2>
          <img src={bonusImage} alt="Bonus" className="w-full rounded-lg" />
          <button
            onClick={handleCloseDialog}
            className="px-3 py-1 rounded-lg  text-black font-semibold"style={{width: "300px"}}
          >
            Close
          </button>
        </div>
      )}
 
      {/* Entry Lobby Button */}
      <button
        onClick={goToEntryPayment}
        className="fixed bottom-14 left-1/2 transform -translate-x-1/2 px-7 py-2 rounded-2xl font-mono font-bold text-black bg-gradient-to-r from-pink-500 via-yellow-300 to-green-400 bg-[length:600%_600%] animate-shimmer z-20"
      >
        Entry Lobby
      </button>
    </div>
  );
}
 
export default LobbyPage;