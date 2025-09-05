
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Clock, Sparkles, Trophy, Star } from 'lucide-react';
 
// Import images
import minesImg from "../../assets/images/jaqport/10.jpg";
import teenpattiImg from "../../assets/images/jaqport/mines.png";
import ludoImg from "../../assets/images/jaqport/12.jpg";
import lotteryImg from "../../assets/images/jaqport/13.jpg";
import bgImg from "../../assets/images/jaqport/jaqport-bg.jpg";
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
      tag: "HOT"
    },
    {
      id: 2,
      name: "LOTTERY",
      amount: "₹1,23,002",
      image: "lottery",
      link: "/lottery",
      tag: "NEW"
    },
    {
      id: 3,
      name: "JACKPOT",
      amount: "₹1,23,002",
      image: "jackpot",
      link: "/jackpot",
      tag: "WIN"
    }
  ];

  const runningGames = [
    {
      id: 4,
      name: "TEEN PATTI",
      amount: "₹1,23,002",
      image: "teenpatti",
      link: "/teenpatti",
      tag: "LIVE"
    },
    {
      id: 5,
      name: "LUDO",
      amount: "₹1,23,002",
      image: "ludo",
      link: "/ludo",
      tag: "FAST"
    },
    {
      id: 6,
      name: "LOTTERY 2",
      amount: "₹1,23,002",
      image: "lottery2",
      link: "/lottery2",
      tag: "MEGA"
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
      <div className="relative overflow-hidden rounded-2xl h-80 cursor-pointer group transform transition-all duration-300 ">
        {/* Background Image */}
        <img 
          src={getGameImage(game.image)}
          alt={`${game.name} game`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/70 transition-colors duration-300 "></div>
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center items-center p-4 z-10">
          {/* Top Section - Tag */}
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full transform transition-all duration-300">
              {game.tag}
            </span>
          </div>
          
          {/* Center Content */}
          <div className="text-center">
            {/* Game Title */}
            <h4 className="text-white text-3xl font-bold mb-4 tracking-wide transition-colors duration-300 group-hover:text-pink-300">
              {game.name}
            </h4>
            
            {/* Prize Amount */}
            <p className="text-green-400 text-2xl font-bold mb-8 transition-colors duration-300 group-hover:text-green-300">
              {game.amount}
            </p>
            
            {/* Play Button - Single Line */}
            <button
              onClick={() => window.location.href = game.link}
              className="px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center shadow-xl transform transition-all duration-300  bg-gradient-to-r from-pink-500 to-red-500 text-white cursor-pointer"
            >
              PLAY NOW
              <Play className="w-5 h-5 ml-2 fill-current" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
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
          {/* Enhanced Left Side - Top Winners List */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl transform transition-all duration-500 ">
              {/* Enhanced Header */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 px-6 py-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <Trophy className="w-6 h-6 text-yellow-300 mr-2 animate-bounce" />
                    <h4 className="text-white text-xl font-bold">Top Winners List</h4>
                  </div>
                  <button className="flex items-center text-white text-sm font-medium bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 transform ">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Enhanced Winners List */}
              <div className="p-6 overflow-y-auto max-h-[155vh]">
                <div className="space-y-0">
                  {winners.map((winner, idx) => (
                    <div
                      key={winner.rank}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg transition-all duration-300 hover:bg-white/10  transform cursor-pointer group ${
                        idx !== winners.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      {/* Rank and Name with Animation */}
                      <div className="flex items-center space-x-4 w-1/3">
                        <span className={`text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                          winner.rank <= 3 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                            : 'bg-white/20'
                        }`}>
                          {winner.rank}
                        </span>
                        <span className="text-white font-medium transition-colors duration-300 group-hover:text-pink-300">{winner.name}</span>
                      </div>
                      
                      {/* Flag with Enhanced Styling */}
                      <div className="flex flex-col items-center w-1/3">
                        <div className="rounded-full bg-gradient-to-r from-orange-500 to-green-500 p-0.5 shadow-lg transform transition-all duration-300 group-hover:rotate-12">
                          <span className="rounded-full bg-white flex justify-center items-center h-10 w-10">
                            <span className="text-lg">🇮🇳</span>
                          </span>
                        </div>
                        <span className="text-xs text-gray-300 mt-1 font-medium group-hover:text-white transition-colors duration-300">India</span>
                      </div>
                      
                      {/* Amount with Glow Effect */}
                      <div className="w-1/3 text-right">
                        <span className="text-green-400 font-bold relative group-hover:text-green-300 transition-colors duration-300">
                          {winner.amount}
                          <div className="absolute inset-0 text-green-300 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300">
                            {winner.amount}
                          </div>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side */}
          <div className="lg:col-span-8">
            {/* Enhanced Trending Jackpots Section */}
            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Enhanced Header with Timer */}
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 py-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center">
                      <Star className="w-6 h-6 text-yellow-300 mr-2 animate-spin" />
                      <h4 className="text-white text-xl font-bold">Trending JACKPOTS</h4>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hour' },
                        { value: timeLeft.minutes, label: 'Minu' },
                        { value: timeLeft.seconds, label: 'Seco' }
                      ].map((time, idx) => (
                        <React.Fragment key={time.label}>
                          {idx > 0 && <div className="text-xl animate-pulse">:</div>}
                          <div className="text-center bg-white/20 rounded-lg px-2 py-1 transform transition-all duration-300">
                            <div className="text-2xl font-bold">{time.value}</div>
                            <div className="text-xs">{time.label}</div>
                          </div>
                        </React.Fragment>
                      ))}
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

            {/* Enhanced Running Jackpots Section */}
            <div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Enhanced Header */}
                <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
                      <h4 className="text-white text-xl font-bold">RUNNING JACKPOTS</h4>
                    </div>
                    <button className="flex items-center text-white text-sm font-medium bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 transform  group">
                      browse all games
                      <ChevronRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
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