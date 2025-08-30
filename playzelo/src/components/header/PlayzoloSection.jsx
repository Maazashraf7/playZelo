import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import minesImg from "../../assets/images/jaqport/10.jpg";
import teenpattiImg from "../../assets/images/jaqport/mines.png";
import ludoImg from "../../assets/images/jaqport/12.jpg";
import lotteryImg from "../../assets/images/jaqport/13.jpg";
import bgImg from "../../assets/images/jaqport/jaqport-bg.jpg";
import ReactCountryFlag from "react-country-flag";

const CasinoInterface = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 74,
    hours: 6,
    minutes: 24,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const winners = [
    { rank: 1, name: "Samar", amount: "₹2365.96" },
    { rank: 2, name: "Vihaan", amount: "₹2365.96" },
    { rank: 3, name: "Aditya", amount: "₹2365.96" },
    { rank: 4, name: "Kabir", amount: "₹2365.96" },
    { rank: 5, name: "Rohan", amount: "₹2365.96" },
    { rank: 6, name: "Yuvraj", amount: "₹2365.96" },
    { rank: 7, name: "Ishaan", amount: "₹2365.96" },
    { rank: 8, name: "Aryan", amount: "₹2365.96" },
    { rank: 9, name: "Krishna", amount: "₹2365.96" },
    { rank: 10, name: "Laksh", amount: "₹2365.96" },
    { rank: 11, name: "Vivaan", amount: "₹2365.96" },
    { rank: 12, name: "Aarav", amount: "₹2365.96" }
  ];

  const trendingGames = [
    {
      id: 1,
      name: "MINES",
      amount: "₹1,23,002",
      image: "mines",
      link: "/mines",
    },
    {
      id: 2,
      name: "LOTTERY",
      amount: "₹1,23,002",
      image: "lottery",
      link: "/lottery",
    },
    {
      id: 3,
      name: "JACKPOT",
      amount: "₹1,23,002",
      image: "jackpot",
      link: "/jackpot",
    }
  ];

  const runningGames = [
    {
      id: 4,
      name: "TEEN PATTI",
      amount: "₹1,23,002",
      image: "teenpatti",
      link: "/teenpatti",
    },
    {
      id: 5,
      name: "LUDO",
      amount: "₹1,23,002",
      image: "ludo",
      link: "/ludo",
    },
    {
      id: 6,
      name: "LOTTERY 2",
      amount: "₹1,23,002",
      image: "lottery2",
      link: "/lottery2",
    }
  ];

  const GameCard = ({ game }) => {
    const getGameImage = (imageName) => {
      const images = {
        'mines': minesImg,
        'lottery': lotteryImg,
        'jackpot': minesImg,
        'teenpatti': teenpattiImg,
        'ludo': ludoImg,
        'lottery2': lotteryImg
      };
      return images[imageName] || lotteryImg;
    };

    return (
      <div className="relative overflow-hidden rounded-2xl h-80 cursor-pointer group">
        <img 
          src={getGameImage(game.image)} 
          alt={`${game.name} game`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
          <h4 className="text-white text-3xl font-bold mb-4 tracking-wide text-center">
            {game.name}
          </h4>
          <p className="text-green-400 text-2xl font-bold mb-8 text-center">
            {game.amount}
          </p>
          
          <Link
            to={game.link}
            className="px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center shadow-xl transform transition-all bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 hover:scale-105"
          >
            PLAY NOW
            <Play className="w-5 h-5 ml-2 fill-current" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">PlayZelo JACKPOTS</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At Modeltheme, we show only the best websites and portfolios built completely with passion, simplicity and creativity!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Top Winners List */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-xl font-bold">Top Winners List</h4>
                  <button className="flex items-center text-white text-sm font-medium bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Winners List */}
              <div className="p-6">
         <div className="space-y-0">
  {winners.map((winner, idx) => (
    <div
      key={winner.rank}
      className={
        // Add bottom border on all but last row
        `flex items-center justify-between py-2 px-2` +
        (idx !== winners.length - 1 ? ' border-b border-white/20' : '')
      }
    >
      {/* Left: Rank and Name */}
      <div className="flex items-center space-x-4 w-1/3">
        <span className="text-white font-medium w-6">{winner.rank}.</span>
        <span className="text-white">{winner.name}</span>
      </div>
      
      {/* Center: Flag in circle, country below */}
      <div className="flex flex-col items-center w-1/3">
        <span className="rounded-full bg-white flex justify-center items-center shadow h-10 w-10 mb-1">
          <ReactCountryFlag
            countryCode="IN"
            svg
            style={{
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            title="India"
          />
        </span>
        <span className="text-xs text-white mt-0.5 font-medium">India</span>
      </div>
      
      {/* Right: Amount */}
      <span className="text-green-400 font-bold w-1/3 text-right">{winner.amount}</span>
    </div>
  ))}
</div>

              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            {/* Trending Jackpots Section */}
            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                {/* Header with Timer */}
                <div className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white text-xl font-bold">Trending JACKPOTS</h4>
                    <div className="flex items-center space-x-3 text-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{timeLeft.days}</div>
                        <div className="text-xs">Days</div>
                      </div>
                      <div className="text-xl">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{timeLeft.hours}</div>
                        <div className="text-xs">Hour</div>
                      </div>
                      <div className="text-xl">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-xs">Minu</div>
                      </div>
                      <div className="text-xl">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                        <div className="text-xs">Seco</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trending Games Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trendingGames.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Running Jackpots Section */}
            <div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white text-xl font-bold">RUNNING JACKPOTS</h4>
                    <button className="flex items-center text-white text-sm font-medium bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all">
                      browse all games
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Running Games Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {runningGames.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CasinoInterface;