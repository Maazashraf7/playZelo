import React from "react";
import { useNavigate } from "react-router-dom";
// import img from "../../assets/images/jaqport/01.jpg"
export default function SingleSection() {
  const navigate = useNavigate();

  return (
     <section
      className="min-h-screen flex justify-center items-center gap-10 p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')", 
      }}
    >
      {/* Left side image with zoom animation */}
      <div className="relative w-1/2 max-w-lg overflow-hidden">
        <img
            src="/images/08.png"
          alt="Poker chips and cards"
          className="object-contain w-full h-full animate-pulse-slow"
          style={{ maxHeight: 450 }}
        />
        <style>{`
          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulseSlow 6s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Right side content */}
    <div className="w-1/2 max-w-xl flex flex-col justify-center">
  <h2
    className="text-white font-extrabold uppercase mb-6"
    style={{
      fontSize: "3.2rem",
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      textShadow: `
        2px 2px 4px rgba(0, 0, 0, 0.7),
        0 0 10px #ff2b73,
        0 0 20px #ff2b73
      `,
    }}
  >
    UNLOCK FREE SPIN
  </h2>
  <p className="text-gray-300 leading-relaxed mb-20">
    Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications seamlessly virtual then assertively communicate an expanded array of mindshare rather think wiverse technologies for magnetic applications seamlessly virtual that conveniently monetize synergistic human capital
  </p>
<button onClick={() => navigate('/gamelist')}
  className="self-start relative overflow-hidden font-extrabold px-4 py-2 rounded-[5px] shadow-2xl 
    bg-white text-[#ff2463] transition-colors duration-500 flex items-center gap-4 group"
>
  {/* Sliding gradient background */}
  <span 
    className="absolute inset-0 bg-gradient-to-l from-[#ff2463] via-[#ff2a61] to-[#ff1a3b] pointer-events-none
      transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"
    style={{ zIndex: 0 }}
  />

  {/* Text with hover white color */}
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
    BROWSE ALL MATCHES
  </span>

  {/* Circular arrow */}
  <span
    className="relative z-10 inline-flex justify-center items-top w-9 h-9 rounded-full bg-[#ff2463] text-white text-2xl
      transition-transform duration-500 ease-in-out group-hover:-rotate-45 ml-3"
    style={{ boxShadow: "0 0 10px rgba(255, 36, 99, 0.6)" }}
  >
    &#8594;
  </span>
</button>



</div>


    </section>
  );
}
