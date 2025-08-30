import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import bgImg from '../../assets/images/bg.jpg';
import "./CounterSection.css"; // custom CSS
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
        <div className="bg-gradient-to-b from-pink-400 to-pink-600 text-white text-3xl font-bold px-4 py-3 shadow-lg min-w-[60px] text-center">
          {char}
        </div>
      );
    }
    return (
      <div className="relative w-16 h-16 bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg overflow-hidden">
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
        className="relative w-[1050px] h-[150px] mx-auto bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
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
          <div className="flex items-center space-x-1">
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



// import React, { useState, useEffect } from 'react';
// import { X, Target } from 'lucide-react';

// const DailyLottery = () => {
//   const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 1, seconds: 19 });
//   const [ticketsSold, setTicketsSold] = useState(8);
  
//   const winners = [
//     { name: 'Meena', amount: '₹50,000', game: 'Lottery', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b524?w=40&h=40&fit=crop&crop=face' },
//     { name: 'Ankit', amount: '₹25,000', game: 'Jackpot', time: '12m ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
//     { name: 'Rajesh', amount: '₹10,000', game: 'Teen Patti', time: '2m ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
//     { name: 'Priya', amount: '₹5,000', game: 'Ludo', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
//     { name: 'Saira', amount: '₹12,500', game: 'Jackpot', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face' },
//     { name: 'Aarav', amount: '₹3,800', game: 'Ludo', time: '8m ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         }
//         return prev;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTicketsSold(prev => prev + Math.floor(Math.random() * 3));
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex bg-gray-900 text-white min-h-screen relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-2xl"></div>
//         <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl"></div>
//         <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
//       </div>

//       <div className="flex-1 p-8 relative z-10">
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center">
//               <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold mr-2">
//                 PlayZeIn
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-3 py-1 rounded-full font-bold text-xs">
//               DAILY LOTTERY
//             </div>
//           </div>
//         </div>

//         <div className="mb-8">
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Entries open 7:00 AM — Close 6:00 PM. Winners announced 7:00 PM.
//           </p>
//         </div>

//         <div className="mb-8">
//           <div className="flex items-center space-x-6">
//             <div className="text-center">
//               <div className="text-xs text-gray-400 mb-1">HRS</div>
//               <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-4 py-2 font-bold text-xl min-w-[60px] text-center shadow-lg rounded">
//                 {String(timeLeft.hours).padStart(2, '0')}
//               </div>
//               <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black px-4 py-1 font-bold text-lg rounded">
//                 {String(timeLeft.hours).padStart(2, '0')}
//               </div>
//             </div>
            
//             <div className="text-center">
//               <div className="text-xs text-gray-400 mb-1">MIN</div>
//               <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-4 py-2 font-bold text-xl min-w-[60px] text-center shadow-lg rounded">
//                 {String(timeLeft.minutes).padStart(2, '0')}
//               </div>
//               <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black px-4 py-1 font-bold text-lg rounded">
//                 {String(timeLeft.minutes).padStart(2, '0')}
//               </div>
//             </div>
            
//             <div className="text-center">
//               <div className="text-xs text-gray-400 mb-1">SEC</div>
//               <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-4 py-2 font-bold text-xl min-w-[60px] text-center shadow-lg rounded">
//                 {String(timeLeft.seconds).padStart(2, '0')}
//               </div>
//               <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black px-4 py-1 font-bold text-lg rounded">
//                 {String(timeLeft.seconds).padStart(2, '0')}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4 mb-8">
//           <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 text-white px-6 py-3 font-bold text-base transition-all duration-300 transform shadow-lg rounded">
//             Buy Ticket
//           </button>
//           <button className="text-gray-300 hover:text-white font-bold text-lg transition-colors duration-300">
//             View Lottery Results
//           </button>
//         </div>

//         <div className="flex items-center space-x-6 text-gray-300">
//           <div className="flex items-center space-x-2">
//             <Target className="text-red-500" size={20} />
//             <span className="font-bold">Top Prize ₹50,000</span>
//           </div>
//           <div>
//             <span className="font-bold">Tickets sold: <span className="text-orange-400">{ticketsSold}</span></span>
//           </div>
//         </div>
//       </div>

//       <div className="w-96 bg-gray-800 p-6 relative">
//         <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
//           <X size={24} />
//         </button>

//         <div className="mb-6">
//           <h2 className="text-orange-400 font-bold text-xl mb-1">Recent Winners</h2>
//           <p className="text-gray-400 text-sm">Verified payouts • 1,324</p>
//         </div>

//         <div className="space-y-4">
//           {winners.map((winner, index) => (
//             <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
//               <img 
//                 src={winner.avatar} 
//                 alt={winner.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2">
//                   <span className="font-bold text-white">{winner.name}</span>
//                   <span className="text-orange-400 font-bold">won</span>
//                   <span className="text-orange-400 font-bold">{winner.amount}</span>
//                 </div>
//                 <div className="text-gray-400 text-sm">
//                   {winner.game} • {winner.time}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyLottery;
