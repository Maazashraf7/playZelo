import React, { useState, useEffect, useRef } from 'react';
import { Play, Trophy, Star, Eye, MessageCircle, Gamepad2, Target, Dice1, Crown, Grid3X3, ChevronRight, Users, Clock, Zap, Calendar, GamepadIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom";
// import blogsMain from '../../assets/images/blogsimg/blogsmain.jpg';
import blogsMain from '../../assets/images/blogsimg/blogsmain.jpg';
import ludo01 from '../../assets/images/blogsimg/lodo01.jpg'
import jackpot01 from '../../assets/images/blogsimg/jackport01.jpg'
import lottery01 from '../../assets/images/blogsimg/lottery01.jpg'

const Blogs = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState('all');
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');

  // Game Status Data
  const gameStatusData = {
    all: [
      {
        id: 1,
        name: 'Ludo Championship',
        type: 'live',
        players: '2.5K',
        image: ludo01,
        prize: '₹50,000',
        timeLeft: 'Live Now'
      },
      {
        id: 2,
        name: 'Teen Patti Tournament',
        type: 'upcoming',
        players: '1.8K',
        image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=250&fit=crop',
        prize: '₹1,00,000',
        timeLeft: '2 hours'
      },
      {
        id: 3,
        name: 'Jackpot Mega Draw',
        type: 'live',
        players: '5.2K',
        image: jackpot01,
        prize: '₹2,50,000',
        timeLeft: 'Live Now'
      },
      {
        id: 4,
        name: 'Mines Master Challenge',
        type: 'upcoming',
        players: '900',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
        prize: '₹25,000',
        timeLeft: '1 day'
      },
      {
        id: 5,
        name: 'Lottery Lucky Draw',
        type: 'live',
        players: '3.1K',
        image: lottery01,
        prize: '₹75,000',
        timeLeft: 'Live Now'
      },
      {
        id: 6,
        name: 'Mines',
        type: 'upcoming',
        players: '4.5K',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
        prize: '₹5,00,000',
        timeLeft: '3 days'
      }
    ]
  };

  gameStatusData.live = gameStatusData.all.filter(game => game.type === 'live');
  gameStatusData.upcoming = gameStatusData.all.filter(game => game.type === 'upcoming');

  const tabs = [
    { id: 'all', name: 'All Games', icon: GamepadIcon, count: gameStatusData.all.length },
    { id: 'live', name: 'Live Games', icon: Zap, count: gameStatusData.live.length },
    { id: 'upcoming', name: 'Upcoming', icon: Calendar, count: gameStatusData.upcoming.length }
  ];

  const activeData = gameStatusData[activeTab];

  // Game Icons for Carousel
  const gameIcons = [
    { icon: Gamepad2, name: 'Controller' },
    { icon: Trophy, name: 'Trophy' },
    { icon: Target, name: 'Target' },
    { icon: Dice1, name: 'Dice' },
    { icon: Crown, name: 'Crown' },
    { icon: Star, name: 'Star' },
    { icon: Grid3X3, name: 'Grid' },
    { icon: Play, name: 'Play' },
  ];

  // Duplicate icons for infinite loop effect
  const infiniteGameIcons = [...gameIcons, ...gameIcons, ...gameIcons];

  // Carousel Animation - Left to Right
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const itemWidth = 120; // width of each icon item + margin
    const totalWidth = gameIcons.length * itemWidth;

    const animateScroll = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      carouselElement.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animateScroll);
    };

    const animationId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const games = [
    {
      id: 'all',
      name: 'All Games',
      images: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop',
         "src/assets/images/game/001.jpg",
         "src/assets/images/game/lottery01.jpg",
         "src/assets/images/game/teenpatti03.jpg"
      ]
    },
    {
      id: 'ludo',
      name: 'Ludo Game',
      images: [
        'src/assets/images/game/ludo01.jpg',
       "src/assets/images/game/01.png",
       "src/assets/images/game/ludo02.jpg"
      ]
    },
    {
      id: 'teenpatti',
      name: 'Teen Patti Game',
      images: [
        'https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=250&fit=crop',
        'src/assets/images/game/teenpatti02.jpg',
        "src/assets/images/game/teenpatti03.jpg"
      ]
    },
    {
      id: 'lottery',
      name: 'Lottery Game',
      images: [
        "src/assets/images/game/lottery01.jpg",
        "src/assets/images/game/lottery02.jpg",
        "src/assets/images/game/lottery03.webp"
      ]
    },
    {
      id: 'jackpot',
      name: 'Jackpot Game',
      images: [
        "src/assets/images/game/001.jpg",
       "src/assets/images/game/002.jpg",
        "src/assets/images/game/003.jpg"
      ]
    },
    {
      id: 'Mines',
      name: 'Mines Game',
      images: [
       "src/assets/images/game/home-2/01.jpg",
       "src/assets/images/game/home-2/images (1).jpg",
        "src/assets/images/game/home-2/04.jpg"
      ]
    }
  ];

  const selectedGameData = games.find(game => game.id === selectedGame);

  // Function to handle navigation to game details
  const handleGameDetailsNavigation = (gameId, imageIndex) => {
    navigate("/gamedetails", { 
      state: { 
        gameId, 
        imageIndex,
        gameData: selectedGameData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style>{`
        /* Enhanced Hero Button */
        .hero-play-btn {
          position: relative;
          display: inline-block;
          padding: 16px 32px;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(45deg, #dc2626, #ef4444, #dc2626);
          border: 2px solid #fca5a5;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
        }

        .hero-play-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .hero-play-btn:hover::before {
          left: 100%;
        }

        .hero-play-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.5);
        }

        /* Carousel Animation */
        .carousel-container {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          width: fit-content;
        }

        /* Card Border Animation - Only on Card Border */
        .card-border-effect {
          position: relative;
          overflow: hidden;
        }

        .card-border-effect::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, #dc2626, #ef4444, #f87171, #dc2626);
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: border-rotate 2s linear infinite;
          z-index: -1;
        }

        .card-border-effect:hover::before {
          opacity: 1;
        }

        .card-border-effect::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(to bottom, #1f2937, #111827);
          border-radius: 12px;
          z-index: 1;
        }

        .card-border-effect .card-content {
          position: relative;
          z-index: 2;
        }

        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Chevron Rotation */
        .chevron-rotate {
          transition: transform 0.3s ease;
        }

        .chevron-rotate.active {
          transform: rotate(90deg);
        }

        /* Video Background */
        // .video-overlay {
        //   background: linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.8));
        // }

        /* Gallery Navigation Hover Effect */
        .gallery-nav-item {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .gallery-nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.7s ease;
        }

        .gallery-nav-item:hover::before {
          left: 100%;
        }

        /* Play Button Styling */
        .play-btn-circle {
          background: linear-gradient(45deg, #000, #dc2626, #000);
          border: 2px solid #fff;
          transition: all 0.3s ease;
        }

        .play-btn-circle:hover {
          background: linear-gradient(45deg, #dc2626, #000, #dc2626);
          transform: scale(1.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gaming Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${blogsMain})` }}
        ></div>

        <div className="absolute inset-0 video-overlay z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl">
            GAME ON!
          </h1>
          <p className="text-xl md:text-xl mb-8 text-white font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience the Ultimate Gaming Adventure with Friends
          </p>
          <button className="hero-play-btn text-xl">
            <Play className="w-6 h-6 inline-block mr-3" />
            Start Playing Now
          </button>
        </div>
      </section>

      {/* Carousel Icons Section */}
      <section className="py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
        <div className="carousel-container">
          <div
            ref={carouselRef}
            className="carousel-track"
          >
            {infiniteGameIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 flex-shrink-0 w-[80px] mx-8"
                >
                  <div className="p-4 rounded-full border-3 border-red-500/50 hover:border-red-300 transition-all duration-300 hover:scale-100 hover:shadow-2sm hover:shadow-red-500/40 backdrop-blur-sm">
                    <IconComponent className="w-5 h-5 text-red-200" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 tracking-wide">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Game Status Section */}
      <section className="py-4 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Game Status
            </h2>
            <p className="text-gray-300 text-lg font-medium">See what's live and what's coming up</p>
          </div>


          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400 shadow-lg shadow-red-500/30 transform scale-105'
                      : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/70 hover:text-red-400 hover:border-red-500/50'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span>{tab.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    activeTab === tab.id
                      ? 'bg-white/20'
                      : 'bg-red-600/30'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Game Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeData.map((game) => (
              <div
                key={game.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {game.type === 'live' ? (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full border border-green-400">
                      <Zap className="w-4 h-4 text-white animate-pulse" />
                      <span className="text-white font-bold text-sm">LIVE</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full border border-orange-400">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">UPCOMING</span>
                    </div>
                  )}
                </div>

                {/* Game Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="play-btn-circle p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {game.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-400">Players</p>
                        <p className="text-sm font-bold text-white">{game.players}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-gray-400">Prize Pool</p>
                        <p className="text-sm font-bold text-white">{game.prize}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className={`w-5 h-5 ${game.type === 'live' ? 'text-green-400' : 'text-orange-400'}`} />
                      <span className={`text-sm font-bold ${
                        game.type === 'live' ? 'text-green-400' : 'text-orange-400'
                      }`}>
                        {game.timeLeft}
                      </span>
                    </div>

                    <button className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      game.type === 'live'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                        : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-500/30'
                    } hover:scale-105`}>
                      {game.type === 'live' ? 'Join Now' : 'Register'}
                    </button>
                  </div>
                </div>

                {/* Animated Border for Live Games */}
                {game.type === 'live' && (
                  <>
                    <div className="absolute inset-0 rounded-2xl opacity-30">
                      <div className="absolute inset-0 rounded-2xl border-4 border-green-400 animate-pulse"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 animate-pulse"></div>
                  </>
                )}

                {/* Upcoming Game Border */}
                {game.type === 'upcoming' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Blog Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Game Gallery
            </h2>
            <p className="text-gray-300 text-lg font-medium">Explore our amazing game collection and screenshots</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Game List */}
            <div className="lg:w-1/4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sticky top-6 border-2 border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Game Categories</h3>
                <div className="space-y-3">
                  {games.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => setSelectedGame(game.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group gallery-nav-item ${
                        selectedGame === game.id
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30 border-2 border-red-300 transform scale-105'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70 hover:text-red-400 border-2 border-transparent hover:border-red-500/50 hover:scale-102'
                      }`}
                    >
                      <span className="font-semibold text-lg">{game.name}</span>
                      <ChevronRight
                        className={`w-6 h-6 chevron-rotate ${
                          selectedGame === game.id ? 'active text-white' : 'text-gray-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Game Stats */}
                <div className="mt-10 p-5 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border-2 border-gray-600 shadow-xl">
                  <h4 className="font-bold mb-6 text-red-400 text-xl">Game Stats</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Total Games:</span>
                      <span className="text-white font-bold bg-red-600/30 px-4 py-2 rounded-full border border-red-500/50">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Players Online:</span>
                      <span className="text-green-400 font-bold bg-green-600/30 px-4 py-2 rounded-full border border-green-500/50">2.5K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Active Rooms:</span>
                      <span className="text-blue-400 font-bold bg-blue-600/30 px-4 py-2 rounded-full border border-blue-500/50">150+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Game Images */}
            <div className="lg:w-3/4">
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4 text-red-400">
                  {selectedGameData?.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedGameData?.name === 'All Games'
                    ? 'Browse through our complete collection of exciting games and discover your next favorite adventure'
                    : `Dive into the exciting world of ${selectedGameData?.name.toLowerCase()} and experience thrilling gameplay`
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedGameData?.images.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30 cursor-pointer card-border-effect"
                    onClick={() => handleGameDetailsNavigation(selectedGame, index)}
                  >
                    <div className="card-content bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={image}
                          alt={`${selectedGameData.name} ${index + 1}`}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-6 group-hover:translate-y-0">
                          <button className="play-btn-circle p-5 rounded-full hover:scale-110 transition-all duration-300 shadow-lg">
                            <Play className="w-7 h-7 text-white" />
                          </button>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-xl group-hover:text-red-400 transition-colors duration-300">
                            Game Screenshot {index + 1}
                          </h4>
                          <div className="flex items-center space-x-2 text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="text-sm font-bold">4.{5 + index}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Eye className="w-5 h-5" />
                            <span className="font-medium">{1 + index}.{2 + index}K views</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-medium">{20 + index * 5} comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-16">
                <button onClick={() => navigate("/gamedetails")} className="bg-gradient-to-r from-red-500 to-pink-500 px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/40 border-2 border-red-400/30">
                  Load More Screenshots
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;