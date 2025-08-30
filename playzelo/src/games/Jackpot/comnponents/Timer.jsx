import React, { useEffect, useState } from "react";
 
// export const Timer = () => {
 
const Timer = ({ onComplete }) => {    
const [secondsLeft, setSecondsLeft] = useState(10);
 
  useEffect(() => {
    if (secondsLeft === 0) {
      if (onComplete) onComplete(); // optional callback
      return;
    }
 
    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
 
    return () => clearTimeout(timer);
  }, [secondsLeft, onComplete]);
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="text-7xl font-bold text-gray-800 drop-shadow-md">
        {secondsLeft}
      </div>
      <div className="mt-4 text-2xl font-bold text-yellow-500 drop-shadow-sm animate-pulse">
        STARTING GAME...
      </div>
    </div>
  );
};
 
export default Timer;