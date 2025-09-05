// // src/components/LotteryHeader.jsx
// import React from "react";
 
// export default function LotteryHeader() {
//   return (
//     <div className="w-full mt-1 rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden bg-[#0b1736]">
//       {/* Watermark Background */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <span className="text-[6rem] md:text-[10rem] font-extrabold text-white/10 select-none tracking-widest whitespace-nowrap">
//           PlayZelo
//         </span>
//       </div>
 
//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
//         {/* Left Side */}
//         <div className="mb-2 md:mb-0">
//           <h1 className="text-lg md:text-2xl font-extrabold text-white">
//             Daily Lottery — Buy Your Lucky Ticket
//           </h1>
//           <p className="text-sm md:text-lg text-gray-300">
//             Entries: 7:00 AM — 6:00 PM • Winners announced at 7:00 PM
//           </p>
//         </div>
 
//         {/* Right Side */}
//         <div className="text-sm text-gray-400">
//           Ticket price: <span className="font-bold text-white">₹10</span>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
 
const NewsTicker = () => {
  return (
    <div className="w-full bg-blue border-t border-b border-gray-200 overflow-hidden relative">
      {/* Inline CSS for marquee keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
 
      {/* Track */}
      <div
        className="flex whitespace-nowrap text-white font-medium text-base py-2"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        {/* Content Duplicate 1 */}
        <span className="mx-10">
          Seet ka promise bhi! 🤲{" "}
          <a
            href="#"
            className="px-2 py-1 border border-orange-400 rounded hover:bg-orange-100"
          >
            Download karo
          </a>{" "}
          aur control karo apni kismat!
        </span>
        <span className="mx-10">
          Miss ho gaye kya results? 🤔 Naye App mein history bhi hai, aur bhi
          features!
        </span>
 
        {/* Content Duplicate 2 (for infinite loop) */}
        <span className="mx-10">
          Seet ka promise bhi! 🤲{" "}
          <a
            href="#"
            className="px-2 py-1 border border-orange-400 rounded hover:bg-orange-100"
          >
            Download karo
          </a>{" "}
          aur control karo apni kismat!
        </span>
        <span className="mx-10">
          Miss ho gaye kya results? 🤔 Naye App mein history bhi hai, aur bhi
          features!
        </span>
      </div>
    </div>
  );
};
 
export default NewsTicker;