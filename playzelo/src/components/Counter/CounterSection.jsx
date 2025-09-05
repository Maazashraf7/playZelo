import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import bgImg from '../../assets/images/bg.jpg';


const PrizeBanner = () => {
  const [prizeAmount, setPrizeAmount] = useState(['₹', '5', ',', '0', '2', '3', '4', '7']);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate all numbers together, then increment the first number
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPrizeAmount(prev => {
          const newAmount = [...prev];
          for (let i = 1; i < newAmount.length; i++) {
            if (newAmount[i] !== ',') {
              newAmount[i] = Math.floor(Math.random() * 10).toString();
            }
          }
          const firstNumIndex = 1;
          const currentFirst = parseInt(newAmount[firstNumIndex]);
          newAmount[firstNumIndex] = ((currentFirst + 1) % 10).toString();
          return newAmount;
        });
        setIsAnimating(false);
      }, 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const NumberRoller = ({ char, index }) => {
    if (char === ',') {
      return <div className="text-white text-4xl font-bold px-1">{char}</div>;
    }
    if (index === 0) {
      return (
        <div className="bg-gradient-to-b from-pink-400 to-pink-600 text-white text-3xl font-bold px-3 py-3 shadow-lg min-w-[60px] text-center rounded-lg">
          {char}
        </div>
      );
    }
    return (
      <div className="relative w-14 h-14 bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg overflow-hidden rounded-lg">
        {isAnimating ? (
          <div className="animate-roll">
            {[...Array(24)].map((_, idx) => (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                style={{ transform: `translateY(${(idx - 12) * 64}px)` }}
              >
                {idx % 10}
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            {char}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes roll {
          0% { transform: translateY(0px); }
          100% { transform: translateY(768px); }
        }
        .animate-roll {
          animation: roll 1.5s ease-out;
        }
      `}</style>

      <div
        className="relative w-[1050px] h-[150px] mx-auto bg-cover bg-center rounded-xl overflow-hidden shadow-lg "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-20 w-16 h-16 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-16 right-32 w-8 h-8 bg-pink-300 rounded-full blur-sm"></div>
          <div className="absolute bottom-12 left-1/4 w-12 h-12 bg-blue-300 rounded-full blur-sm"></div>
          <div className="absolute top-4 right-16 w-6 h-6 bg-white rounded-full blur-sm"></div>
          <div className="absolute bottom-8 right-20 w-10 h-10 bg-purple-300 rounded-full blur-sm"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 h-full flex items-center justify-between px-4 ">
          {/* Left */}
          <div className="flex flex-col space-y-4">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                TODAY YOU CAN WIN  UPTO
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-1  rounded-lg">
            {prizeAmount.map((char, index) => (
              <NumberRoller key={index} char={char} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizeBanner;