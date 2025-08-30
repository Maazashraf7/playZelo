// Index.js
 
import React from "react";
import { useNavigate } from "react-router-dom";
import backImg  from "../../assets/GamesImage/background.png";
 
const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden">
        <img
          src={backImg}
          alt="background"
          className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
        />
      </div>
 
      <button
        // onClick={handlePlayClick}
        className="bg-yellow-600 rounded-full w-[120px] h-[50px] text-black font-bold
             border border-solid shadow-lg transform transition-transform duration-300
             hover:scale-110 hover:shadow-1xl">
     
        Play Now
      </button>
    </div>
  );
};


export default Index;