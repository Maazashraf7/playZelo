import React, { useState, useRef, useEffect } from 'react';
import { Star, Play, Users, Clock, Award, Shield, Download, Share2, Heart, ArrowLeft, FileText } from 'lucide-react';

const GameDetailsPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const mainVideoRef = useRef(null);

  // Auto-play the main video when component mounts
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  const handleBackToBlog = () => {
    console.log('Navigating back to blog page...');
    window.history.back();
  };

  const handleVideoPlay = (index) => {
    setPlayingVideoIndex(index);
  };

  const handleVideoEnd = () => {
    setPlayingVideoIndex(null);
  };

  // Sample game data with placeholder videos
  const gameData = {
    title: "Adventure Quest: Temple Run",
    rating: 4.8,
    totalRatings: 25847,
    category: "Adventure",
    size: "125 MB",
    players: "Single Player",
    ageRating: "12+",
    developer: "PlayZole Games",
    lastUpdated: "2 days ago",
    version: "v2.4.1",
    description: "Embark on an epic adventure through ancient temples filled with mysteries and treasures. Experience endless running with challenging obstacles and exciting power-ups.",
    gameplayVideos: [
      { 
        video: 'src/assets/images/video-blogs/video-02.mp4', 
        poster: 'src/assets/images/video-blogs/video-02.mp4', 
        title: 'First Look Gameplay' 
      },
      { 
        video: 'src/assets/images/video-blogs/video-03.mp4', 
        poster: 'src/assets/images/video-blogs/video-03.mp4', 
        title: 'Temple Level Walkthrough' 
      },
      { 
        video: 'src/assets/images/video-blogs/video-04.mp4', 
        poster: 'src/assets/images/video-blogs/video-04.mp4', 
        title: 'Final Boss Battle' 
      },
    ]
  };

  const instructions = [
    "Tap the Play button to start your adventure",
    "Swipe left, right, up, or down to control your character",
    "Collect coins and gems scattered throughout the temple",
    "Use power-ups strategically to boost your performance",
    "Avoid obstacles and traps to keep running",
    "Complete daily challenges to unlock special rewards",
    "Upgrade your character with collected coins",
    "Share your high scores with friends"
  ];

  const policies = [
    "This game is suitable for ages 12 and above",
    "Internet connection required for online features and leaderboards",
    "In-app purchases are available but completely optional",
    "Your personal data is protected according to our privacy policy",
    "Report inappropriate behavior using the in-game report feature",
    "Game content is regularly updated with new levels and features",
    "Fair play policies are strictly enforced in multiplayer modes",
    "Account suspension may occur for violation of community guidelines"
  ];

  const termsAndConditions = [
    {
      title: "User Agreement",
      content: "By downloading and playing this game, you agree to abide by all terms and conditions set forth by PlayZole Games. Users must be at least 12 years old to play."
    },
    {
      title: "Privacy Policy",
      content: "We collect minimal data necessary for game functionality. Your personal information is never shared with third parties without explicit consent. All data is encrypted and stored securely."
    },
    {
      title: "In-App Purchases",
      content: "Optional purchases are available to enhance gameplay experience. All purchases are processed through secure payment gateways. Refunds are available according to platform policies."
    },
    {
      title: "Content Guidelines",
      content: "Users must maintain respectful behavior. Harassment, cheating, or inappropriate content will result in account restrictions. Community reporting helps maintain a safe environment."
    },
    {
      title: "Intellectual Property",
      content: "All game content, including graphics, sounds, and code, are property of PlayZole Games. Unauthorized distribution or modification is strictly prohibited."
    },
    {
      title: "Limitation of Liability",
      content: "PlayZole Games is not liable for any damages arising from game use. Service availability may vary. Regular backups of game progress are recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToBlog}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Blog</span>
              </button>
              <h1 className="text-2xl font-bold text-white">PlayZole</h1>
            </div>
            <div className="flex gap-3">
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Game Info */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden mb-8">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Main Game Video */}
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <video
                    ref={mainVideoRef}
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                  >
                    <source src="src/assets/images/video-blogs/video-01.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Game Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{gameData.title}</h2>
                  <p className="text-purple-300 text-lg">{gameData.category}</p>
                  <p className="text-gray-400 text-sm">Version {gameData.version}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{gameData.rating}</span>
                    <span className="text-gray-300">({gameData.totalRatings.toLocaleString()})</span>
                  </div>
                  <span className="text-purple-300">•</span>
                  <span className="text-gray-300">{gameData.ageRating}</span>
                  <span className="text-purple-300">•</span>
                  <span className="text-green-400">Featured</span>
                </div>

                <p className="text-gray-200 text-lg leading-relaxed">{gameData.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Download className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">{gameData.size}</p>
                    <p className="text-gray-400 text-sm">Size</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Single</p>
                    <p className="text-gray-400 text-sm">Player</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">2 days</p>
                    <p className="text-gray-400 text-sm">Updated</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                    <Play className="w-6 h-6" />
                    Play Now
                  </button>
                  <button className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-semibold transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
          <div className="flex border-b border-white/10 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Award },
              { id: 'instructions', label: 'How to Play', icon: Play },
              { id: 'policy', label: 'Policy', icon: Shield },
              { id: 'terms', label: 'Terms & Conditions', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Play className="w-6 h-6 text-purple-400" />
                    Additional Gameplay Videos
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {gameData.gameplayVideos.map((videoData, index) => (
                      <div key={index} className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1 transform hover:scale-105 transition-all duration-300 group">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                          <video
                            className="w-full h-full object-cover"
                            poster={videoData.poster}
                            preload="metadata"
                            onPlay={() => handleVideoPlay(index)}
                            onEnded={() => handleVideoEnd(index)}
                            onPause={() => handleVideoEnd(index)}
                            controls
                          >
                            <source src={videoData.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {playingVideoIndex !== index && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => {
                                const videos = document.querySelectorAll('video');
                                const targetVideo = videos[index + 1]; // +1 because main video is first
                                if (targetVideo) targetVideo.play();
                              }}>
                              <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors group-hover:scale-110 transform duration-300">
                                <Play className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold shadow-lg">
                          Video #{index + 1}
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium text-center truncate">
                          {videoData.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                    <p className="text-white text-center">
                      <span className="font-semibold">💡 Tip:</span> All videos have controls available. Main video auto-plays continuously.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Game Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Developer:</span>
                        <span className="text-white font-semibold">{gameData.developer}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Category:</span>
                        <span className="text-purple-400 font-semibold">{gameData.category}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Version:</span>
                        <span className="text-blue-400 font-semibold">{gameData.version}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Age Rating:</span>
                        <span className="text-orange-400 font-semibold">{gameData.ageRating}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Last Updated:</span>
                        <span className="text-green-400 font-semibold">{gameData.lastUpdated}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-300">Downloads:</span>
                        <span className="text-pink-400 font-semibold">1M+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3">🏆 Game Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-200">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Endless Adventure Mode
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Multiple Character Options
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Daily Challenges & Rewards
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Global Leaderboards
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">How to Play - Step by Step Guide</h3>
                <div className="space-y-4">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10 transform hover:scale-[1.02] transition-transform">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <p className="text-white text-lg pt-1">{instruction}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">💡 Pro Tips</h4>
                    <ul className="text-gray-200 space-y-2">
                      <li>• Practice daily to improve your reflexes</li>
                      <li>• Watch for pattern in obstacle placement</li>
                      <li>• Save power-ups for difficult sections</li>
                      <li>• Compete with friends for motivation</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">🎯 Game Objectives</h4>
                    <ul className="text-gray-200 space-y-2">
                      <li>• Achieve the highest possible score</li>
                      <li>• Unlock all available characters</li>
                      <li>• Complete all daily challenges</li>
                      <li>• Reach top 100 on leaderboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'policy' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Game Policy & Community Guidelines</h3>
                <div className="space-y-4">
                  {policies.map((policy, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl border border-white/10">
                      <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <p className="text-white text-lg">{policy}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3">⚠️ Important Notice</h4>
                  <p className="text-gray-200 mb-4">
                    Please read all policies carefully before playing. Our team is committed to providing a safe and enjoyable gaming experience for all users.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
                      Contact Support
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                      Report Issue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Terms & Conditions</h3>
                  <p className="text-gray-300 text-lg">Please read these terms carefully before using our game</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {termsAndConditions.map((term, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                      <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-white/10">
                        <h4 className="text-xl font-bold text-white flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          {term.title}
                        </h4>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-200 leading-relaxed text-lg">{term.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-white/20 p-8 text-center">
                  <FileText className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-4">Agreement Acceptance</h4>
                  <p className="text-gray-200 text-lg mb-6">
                    By clicking "Play Now" or downloading this game, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-colors">
                      I Accept Terms
                    </button>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors">
                      Download PDF
                    </button>
                  </div>
                </div>

                <div className="text-center text-gray-400 text-sm">
                  <p>Last updated: September 3, 2025</p>
                  <p className="mt-2">© 2025 PlayZole Games. All rights reserved.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;