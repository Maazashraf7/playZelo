import React, { useState, useEffect, useRef } from "react";
import { IoIosPeople } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import logo1 from "../../assets/images/logo/logo2.png";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { FaArrowRight } from "react-icons/fa";


import CounterSection from '../../components/Counter/CounterSection'
import FormModal from "../../components/header/FormModol";
import CardSection from "../../components/header/CardSection";
import PlayzoloSection from "../../components/header/PlayzoloSection";
import GamingSection from "../../components/header/GamingSection";
// import CasinoFeatures from "../../components/Casino/CasinoFeatures";
import CasinoShowcase from "../../components/header/CasinoShowcase";
import FloatingZoomCards from "../../components/header/FloatingZoomCards";

import videos from "../../assets/audio/135618-762107386.mp4"



const Home = ({ }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState("0.00");
  const [profilePic, setProfilePic] = useState(null);
  // const [userName, setUserName] = useState("User Name");
  const [displayText, setDisplayText] = useState("");
  const [amount, setAmount] = useState(2733168); // counter amount
  const [isFormOpen, setIsFormOpen] = useState(true); // Open form on first render
  const [showScrollTop, setShowScrollTop] = useState(false); // Scroll to top button visibility
  const [isWalletOpen, setIsWalletOpen] = useState(false); // ✅ wallet state

  const [userName, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Refs for voices and elements
  const voice1Ref = useRef(null);
  const voice2Ref = useRef(null);
  const voice3Ref = useRef(null);
  const downloadBtnRef = useRef(null);
  const hangerRef = useRef(null);

  // ✅ Check user on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username || "GUEST");
      if (user.profilePic) setProfilePic(user.profilePic);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  // ✅ Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const loadProfilePic = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfilePic(imgUrl);

      let user = JSON.parse(localStorage.getItem("user")) || {};
      user.profilePic = imgUrl;
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  // ✅ Remove profile pic
  const removeProfilePic = () => {
    setProfilePic(null);
    let user = JSON.parse(localStorage.getItem("user")) || {};
    delete user.profilePic;
    localStorage.setItem("user", JSON.stringify(user));
  };

  // ✅ Logout
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUsername("");
    setProfilePic(null);
    setIsProfileMenuOpen(false);
    setIsLoggedIn(false);
    setWalletBalance(0.0);
    navigate("/login");
  };

  // ✅ Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ✅ Handle Scroll Event for Scroll to Top Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED Typewriter Effect with Proper Height Management
  const texts = [
    "Win Big. Play Hard. Cash Out Fast.",
    "Experience Ultimate Gaming Adventure.",
    "Join Millions of Happy Players Today."
  ];

  const handleDeposit = () => {
    navigate("/deposit");
  }

  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        // Deleting characters
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          timeoutId = setTimeout(typeWriter, 500); // Pause before typing next text
        } else {
          timeoutId = setTimeout(typeWriter, 50); // Fast deletion
        }
      } else {
        // Typing characters
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, 2000); // Pause when text is complete
        } else {
          timeoutId = setTimeout(typeWriter, 100); // Normal typing speed
        }
      }
    };

    // Start the typewriter effect
    typeWriter();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // ✅ Counter Auto Increment
  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prev) => prev + Math.floor(Math.random() * 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Voice autoplay fix (user interaction required)
  // ✅ Voice sequential play
  useEffect(() => {
    const v1 = voice1Ref.current;
    const v2 = voice2Ref.current;
    const v3 = voice3Ref.current;

    const playSequentially = async () => {
      try {
        await v1.play();
        await new Promise((resolve) => {
          v1.onended = resolve;
        });

        await v2.play();
        await new Promise((resolve) => {
          v2.onended = resolve;
        });

        await v3.play();
        await new Promise((resolve) => {
          v3.onended = resolve;
        });
      } catch (err) {
        console.log("Audio play error:", err);
      }
    };

    const handleClick = () => {
      playSequentially();
      document.body.removeEventListener("click", handleClick);
      setInterval(playSequentially, 2 * 60 * 1000);
    };

    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  // ✅ Smooth Horizontal Movement for Download Button and Hanger
  useEffect(() => {
    const button = downloadBtnRef.current;
    const hanger = hangerRef.current;
    if (!button || !hanger) return;

    let direction = 1;
    let currentPosition = 0;
    const maxMovement = 10;
    const speed = 0.20;

    function animate() {
      currentPosition += direction * speed;

      if (currentPosition > maxMovement || currentPosition < -5) {
        direction *= -1;
      }

      button.style.transform = `translateX(${currentPosition}px)`;
      hanger.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const formattedAmount = amount.toLocaleString("en-IN");

  return (
    <>
      <style jsx global>{`
        /* ✅ FIXED TYPEWRITER STYLES WITH PROPER HEIGHT MANAGEMENT */
        .typewriter-container {
          min-height: 120px; /* Fixed minimum height for 2 lines */
          max-height: 120px; /* Prevent expansion */
          overflow: hidden; /* Hide overflow */
          display: flex;
          align-items: flex-start;
          position: relative;
        }

        .typewriter-text {
          position: relative;
          display: inline-block;
          width: 100%;
          line-height: 1.4;
          font-size: clamp(1.5rem, 4vw, 2.5rem); /* Responsive font size */
          word-wrap: break-word;
          hyphens: auto;
        }

        .typewrite-wrap {
          border-right: 0.1em solid #fff;
          animation: blink-caret 1s step-end infinite;
          display: inline;
          white-space: pre-wrap; /* Preserve line breaks */
          word-break: break-word;
        }

        @keyframes blink-caret {
          from, to { 
            border-color: #fff; 
          }
          50% { 
            border-color: transparent; 
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .typewriter-container {
            min-height: 100px;
            max-height: 100px;
          }
          
          .typewriter-text {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
          }
        }

        @media (max-width: 480px) {
          .typewriter-container {
            min-height: 80px;
            max-height: 80px;
          }
          
          .typewriter-text {
            font-size: clamp(1rem, 6vw, 1.5rem);
          }
        }

        /* Enhanced Button Styles */
        .enhanced-btn {
          position: relative;
          cursor: pointer;
          border: none;
          color: white;
          background: transparent;
          overflow: hidden;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .enhanced-btn:after {
          content: '';
          background: linear-gradient(45deg, #fdfc47, #24fe41); 
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all 1.3s ease-in;
          z-index: 0;
        }

        .enhanced-btn:hover:after {
          transform: rotate(180deg);
          transition: all 1s ease-in-out;
        }

        .btn-text {
          background: #080808;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.15rem;
          border-radius: 23px;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .enhanced-btn:hover .btn-text {
          background: rgba(8, 8, 8, 0.9);
        }

        /* Join Today Button - Default Button Style */
        .default-button {
          position: relative !important;
          font-size: 1.125rem !important;
          font-weight: 700 !important;
          transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86) !important;
          padding: 0 2rem !important;
          line-height: 60px !important;
          font-family: "Oswald", sans-serif !important;
          text-transform: uppercase !important;
          border-radius: 4px !important;
          display: inline-block !important;
          text-decoration: none !important;
          color: #000 !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          cursor: pointer !important;
        }

        .default-button:before {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background-color: #fff !important;
          z-index: 1 !important;
          box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2) !important;
          border-radius: 4px !important;
          transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86) !important;
        }

        .default-button:after {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background-color: #ff0052 !important;
          transform: translate(4px, 4px) !important;
          z-index: 0 !important;
          border-radius: 4px !important;
          transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86) !important;
        }

        .default-button span {
          position: relative !important;
          z-index: 2 !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
          pointer-events: none !important;
        }

        .default-button:hover {
          transform: translate(4px, 4px) !important;
          color: #fff !important;
        }

        .default-button:hover:before {
          background-color: #ff0052 !important;
          box-shadow: none !important;
        }

        .default-button:hover:after {
          transform: translate(0, 0) !important;
          background-color: #d1004a !important;
        }

        /* Make sure Tailwind doesn't override */
        .default-button:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        .default-button:active {
          transform: translate(4px, 4px) !important;
        }
      `}</style>
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* ---------- Scroll to Top Button ---------- */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scrollToTop fixed right-6 z-[1000] w-10 h-10 bg-gradient-to-r from-pink-500/70 to-blue-500/70 backdrop-blur-md text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center justify-center group cursor-pointer"
          style={{
            bottom: '5%',
            opacity: showScrollTop ? 1 : 0,
            transition: '0.5s',
            borderRadius: '8px' // Square with rounded corners
          }}
        >
          {/* Primary Arrow Icon */}
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-6 h-6 text-white animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L7 7h3v10h4V7h3L12 2z" />
            </svg>
            <div className="text-xs font-bold ">TOP</div>
          </div>
        </button>
      )}

      {/* ---------- Header ---------- */}
      <header className="container fixed w-[100%] z-[999] top-0 left-0 bg-blue-950/30 backdrop-blur-2xl shadow-xl border-b border-white/10 animate-fadeInDown px-20">
        <div className="  px-4">
          <div className="flex flex-wrap justify-between items-center relative">
            {/* Logo (Desktop) */}
            <div className="hidden lg:inline-block">
              <a href="/">
                <img src={logo1} alt="logo" className="max-w-[150px]" />
              </a>
            </div>

            <div className="relative flex-1 lg:flex-none lg:w-3/4 header-bottom">
              <div className="header-wrapper flex justify-between items-center lg:justify-end lg:pr-4">
                {/* Logo (Mobile) */}
                <div className="lg:hidden max-w-[120px]">
                  <a href="/">
                    <img src={logo1} alt="logo" />
                  </a>
                </div>

                {/* Hanging Download APK Button */}
                <div className="hanging-button absolute top-full right-1 flex flex-col items-center z-[1000]">
                  <div ref={hangerRef} className="hanger"></div>
                  <a
                    ref={downloadBtnRef}
                    href="https://github.com/testitg/PlayZelo/releases/download/PlayZelo_V2.0/playzelo-release.apk"
                    className="download-apk-btn"
                  >
                    ⬇ Download APK
                  </a>
                </div>

                {/* Menu Area */}
                <div className="flex items-center space-x-4 ml-auto">
                  {isLoggedIn ? (
                    <>
                      {/* Wallet Box */}
                      <div className="hidden md:flex items-center p-2 rounded-lg bg-gray-700/50">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
                          alt="wallet"
                          className="w-6 h-6 mr-2"
                        />
                        <span className="font-bold">
                          ₹<span id="wallet-balance">{walletBalance}</span>
                        </span>
                      </div>

                      {/* Profile Box */}
                      <div className="relative">
                        <div
                          className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                          onClick={toggleProfileMenu}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center font-bold text-lg mr-2 overflow-hidden">
                            {profilePic ? (
                              <img
                                src={profilePic}
                                alt="profile"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              "U"
                            )}
                          </div>
                          <span className="text-white font-semibold hidden sm:inline">
                            {userName}
                          </span>
                        </div>

                        {isProfileMenuOpen && (
                          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                            <label className="block px-4 py-8 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                              Change Profile Picture
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={loadProfilePic}
                              />
                            </label>
                            <div
                              className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                              onClick={removeProfilePic}
                            >
                              Remove Profile Picture
                            </div>
                            <div
                              className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                              onClick={logoutUser}
                            >
                              Logout
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    // Enhanced Login & Signup Buttons
                    <div className="flex space-x-3">
                      <a
                        href="/login"
                        className="enhanced-btn"
                      >
                        <div className="btn-text">
                          <BiUser className="mr-2 text-lg" />
                          <span>LOG IN</span>
                        </div>
                      </a>

                      <a
                        href="/signup"
                        className="enhanced-btn"
                      >
                        <div className="btn-text">
                          <IoIosPeople className="mr-2 text-lg" />
                          <span>SIGN UP</span>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Banner with Video ---------- */}
      <section className="banner relative overflow-hidden bg-cover bg-center md:bg-left pt-[250px] pb-[150px] md:pt-[125px] md:pb-[330px]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/audio/135618-762107386.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="banner-overlay absolute inset-0 bg-black opacity-60"></div>

        <div className="container relative z-10 ml-30 pb-4">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-7 col-12 ml-20  px-10">
              <div className="banner__content text-white lg:mb-[-150px] ">
                <h3 className="text-white text-3xl font-bold py-8">
                  The Best Website
                </h3>

                {/* ✅ FIXED TYPEWRITER WITH PROPER HEIGHT CONTAINER */}
                <div className="typewriter-container">
                  <h1 className="font-extrabold max-w-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent typewriter-text">
                    <span className="typewrite-wrap">{displayText}</span>
                  </h1>
                </div>

                <h2 className="text-4xl text-white font-semibold pt-8">
                  Genuine Money Transaction
                </h2>
                <p className="text-lg leading-8 py-8 capitalize text-white  max-w-lg">
                  Assertively communicate an expanded array of mindshare rather
                  than diverse technologies for magnetic applications seamlessly
                  virtual then conveniently monetize synergistic human capital.
                </p>

                {/* Default Button with Inline Styles */}
                <div
                  className="mt-12 inline-block"
                  style={{
                    position: 'relative',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    padding: '0 2rem',
                    lineHeight: '60px',
                    fontFamily: '"Oswald", sans-serif',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    color: '#000',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translate(4px, 4px)';
                    const before = e.target.querySelector('.before-layer');
                    const after = e.target.querySelector('.after-layer');
                    const textSpan = e.target.querySelector('.text-content');
                    const iconWrapper = e.target.querySelector('.icon-wrapper');

                    if (before && after) {
                      // Red comes to front, white goes to back
                      before.style.backgroundColor = '#ff0052';
                      before.style.zIndex = '2';
                      before.style.boxShadow = 'none';

                      after.style.backgroundColor = '#fff';
                      after.style.zIndex = '1';
                      after.style.transform = 'translate(0, 0)';
                    }

                    if (textSpan) {
                      textSpan.style.color = '#fff'; // White text on red background
                    }

                    if (iconWrapper) {
                      iconWrapper.style.backgroundColor = '#fff'; // White circle
                      iconWrapper.style.color = '#ff0052'; // Red icon
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translate(0, 0)';
                    const before = e.target.querySelector('.before-layer');
                    const after = e.target.querySelector('.after-layer');
                    const textSpan = e.target.querySelector('.text-content');
                    const iconWrapper = e.target.querySelector('.icon-wrapper');

                    if (before && after) {
                      // Reset: White to front, red to back
                      before.style.backgroundColor = '#fff';
                      before.style.zIndex = '2';
                      before.style.boxShadow = '0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2)';

                      after.style.backgroundColor = '#ff0052';
                      after.style.zIndex = '1';
                      after.style.transform = 'translate(4px, 4px)';
                    }

                    if (textSpan) {
                      textSpan.style.color = '#000'; // Black text on white background
                    }

                    if (iconWrapper) {
                      iconWrapper.style.backgroundColor = '#ff0052'; // Red circle
                      iconWrapper.style.color = '#fff'; // White icon
                    }
                  }}
                  onClick={() => window.location.href = '/login'}
                >
                  {/* Before Layer */}
                  <div
                    className="before-layer"
                    style={{
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#fff',
                      zIndex: '2',
                      boxShadow: '0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2)',
                      borderRadius: '4px',
                      transition: 'all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86)'
                    }}
                  ></div>

                  {/* After Layer */}
                  <div
                    className="after-layer"
                    style={{
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#ff0052',
                      transform: 'translate(4px, 4px)',
                      zIndex: '1',
                      borderRadius: '4px',
                      transition: 'all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86)'
                    }}
                  ></div>

                  {/* Content */}
                  <span
                    className="text-content"
                    style={{
                      position: 'relative',
                      zIndex: '10',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      height: '100%',
                      pointerEvents: 'none',
                      color: '#000',
                      transition: 'color 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86)'
                    }}
                  >
                    <span>Join Us Today</span>

                    {/* Icon in Circle */}
                    <div
                      className="icon-wrapper"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#ff0052',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86)',
                        fontSize: '14px'
                      }}
                    >
                      <FaArrowRight />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20">
          <CounterSection />
        </div>
      </section>

      {<CardSection />}
      <section>
        {<PlayzoloSection />}
      </section>
      {<GamingSection />}
      {<CasinoShowcase />}
      {<FloatingZoomCards />}


      {/* ---------- Voices (Audio Elements) ---------- */}
      <audio
        ref={voice1Ref}
        src="/audio/ElevenLabs_2025-07-31T05_26_22_Sia – Casual & Comforting Girl Voice for AI Chatbots & Apps_pvc_sp100_s31_sb52_se8_b_m2.mp3"
        preload="auto"
      ></audio>
      <audio ref={voice2Ref} src="/audio/login.mp3" preload="auto"></audio>
      <audio ref={voice3Ref} src="/audio/badhai ho.mp3" preload="auto"></audio>
    </>
  );
};



export default Home;
