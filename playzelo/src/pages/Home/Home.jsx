import React, { useState, useEffect, useRef } from "react";
import { IoIosPeople } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import logo1 from "../../assets/images/logo/logo2.png";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import CounterSection from '../../components/Counter/CounterSection'
import FormModal from "../../components/header/FormModol";
import CardSection from "../../components/header/CardSection";
import PlayzoloSection from "../../components/header/PlayzoloSection";
import GamingSection from "../../components/header/GamingSection";
import CasinoFeatures from "../../components/Casino/CasinoFeatures";
import CasinoShowcase from "../../components/header/CasinoShowcase";
import FloatingZoomCards from "../../components/header/FloatingZoomCards";

import videos from "../../assets/audio/135618-762107386.mp4"

//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const [walletBalance, setWalletBalance] = useState("0.00");
//   const [profilePic, setProfilePic] = useState(null);
//   const [userName, setUserName] = useState("User Name");
//   const [typewriterIndex, setTypewriterIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [amount, setAmount] = useState(2733168); // counter amount
//    const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     setIsFormOpen(true);
//   }, []);


//   // Refs for voices
//   const voice1Ref = useRef(null);
//   const voice2Ref = useRef(null);
//   const voice3Ref = useRef(null);

//   const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

//   const loadProfilePic = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => setProfilePic(e.target.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeProfilePic = () => setProfilePic(null);
//   const logoutUser = () => console.log("Logging out...");

//   // ✅ Typewriter Effect
//   useEffect(() => {
//     const texts = [
//       "100% Legal & Secure",
//       "Play and Win Real Money|",
//       "Genuine Online Platform 🚀",
//     ];
//     const speed = 100;
//     const delayBetween = 2000;
//     let i = 0;
//     let charIndex = 0;

//     function typeWriter() {
//       if (charIndex < texts[typewriterIndex].length) {
//         setDisplayText((prev) => prev + texts[typewriterIndex][charIndex]);
//         charIndex++;
//         setTimeout(typeWriter, speed);
//       } else {
//         setTimeout(() => {
//           setDisplayText("");
//           charIndex = 0;
//           setTypewriterIndex((prev) => (prev + 1) % texts.length);
//         }, delayBetween);
//       }
//     }

//     typeWriter();
//   }, [typewriterIndex]);

//   // ✅ Counter Auto Increment
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAmount((prev) => prev + Math.floor(Math.random() * 50));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Voice autoplay fix (user interaction required)
// // ✅ Voice sequential play
// useEffect(() => {
//   const v1 = voice1Ref.current;
//   const v2 = voice2Ref.current;
//   const v3 = voice3Ref.current;

//   const playSequentially = async () => {
//     try {
//       await v1.play();
//       // wait for v1 to end
//       await new Promise((resolve) => {
//         v1.onended = resolve;
//       });

//       await v2.play();
//       await new Promise((resolve) => {
//         v2.onended = resolve;
//       });

//       await v3.play();
//       await new Promise((resolve) => {
//         v3.onended = resolve;
//       });
//     } catch (err) {
//       console.log("Audio play error:", err);
//     }
//   };

//   const handleClick = () => {
//     playSequentially();
//     document.body.removeEventListener("click", handleClick);
//     // repeat every 2 minutes
//     setInterval(playSequentially, 2 * 60 * 1000);
//   };

//   document.body.addEventListener("click", handleClick);

//   return () => document.body.removeEventListener("click", handleClick);
// }, []);


//   const formattedAmount = amount.toLocaleString("en-IN");

//   return (
//     <>
//      {/* <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} /> */}
//       {/* ---------- Header ---------- */}
//       <header className="fixed w-full z-[999] top-0 left-0 bg-blue-950/30 backdrop-blur-2xl shadow-xl border-b border-white/10 animate-fadeInDown">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between items-center relative">
//             {/* Logo (Desktop) */}
//             <div className="hidden lg:inline-block">
//               <a href="index.html">
//                 <img src={logo1} alt="logo" className="max-w-[150px]" />
//               </a>
//             </div>

//             <div className="relative flex-1 lg:flex-none lg:w-3/4 header-bottom">
//               <div className="header-wrapper flex justify-between items-center lg:justify-end lg:pr-4">
//                 {/* Logo (Mobile) */}
//                 <div className="lg:hidden max-w-[120px]">
//                   <a href="index.html">
//                     <img src={logo1} alt="logo" />
//                   </a>
//                 </div>

//                 {/* Hanging Download APK Button */}
//                 <div className="hanging-button absolute top-full right-1 flex flex-col items-center z-[1000]">
//                   <div className="hanger"></div>
//                   <a
//                     href="https://github.com/testitg/PlayZelo/releases/download/PlayZelo_V2.0/playzelo-release.apk"
//                     className="download-apk-btn"
//                   >
//                     ⬇ Download APK
//                   </a>
//                 </div>

//                 {/* Menu Area */}
//                 <div className="flex items-center space-x-4 ml-auto">
//                   {isLoggedIn ? (
//                     <>
//                       {/* Wallet Box */}
//                       <div className="hidden md:flex items-center p-2 rounded-lg bg-gray-700/50">
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
//                           alt="wallet"
//                           className="w-6 h-6 mr-2"
//                         />
//                         <span className="font-bold">
//                           ₹<span id="wallet-balance">{walletBalance}</span>
//                         </span>
//                       </div>

//                       {/* Profile Box */}
//                       <div className="relative">
//                         <div
//                           className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
//                           onClick={toggleProfileMenu}
//                         >
//                           <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center font-bold text-lg mr-2 overflow-hidden">
//                             {profilePic ? (
//                               <img
//                                 src={profilePic}
//                                 alt="profile"
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               "U"
//                             )}
//                           </div>
//                           <span className="text-white font-semibold hidden sm:inline">
//                             {userName}
//                           </span>
//                         </div>

//                         {isProfileMenuOpen && (
//                           <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
//                             <label className="block px-4 py-8 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
//                               Change Profile Picture
//                               <input
//                                 type="file"
//                                 className="hidden"
//                                 accept="image/*"
//                                 onChange={loadProfilePic}
//                               />
//                             </label>
//                             <div
//                               className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
//                               onClick={removeProfilePic}
//                             >
//                               Remove Profile Picture
//                             </div>
//                             <div
//                               className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
//                               onClick={logoutUser}
//                             >
//                               Logout
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     // Login & Signup Buttons
//                     <div className="flex space-x-3">
//                       <a
//                         href="./login"
//                         className="flex items-center border border-green-500 text-green-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-400/50"
//                       >
//                         <BiUser className="mr-2 text-lg" />
//                         <span>LOG IN</span>
//                       </a>

//                       <a
//                         href="./signup"
//                         className="flex items-center border border-pink-500 text-pink-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-400/50"
//                       >
//                         <IoIosPeople className="mr-2 text-lg" />
//                         <span>SIGN UP</span>
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ---------- Banner with Video ---------- */}
//       <section className="banner relative overflow-hidden bg-cover bg-center md:bg-left pt-[250px] pb-[150px] md:pt-[125px] md:pb-[330px]">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/audio/135618-762107386.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div className="banner-overlay absolute inset-0 bg-black opacity-60"></div>

//         <div className="container relative z-10 ml-35 pb-4">
//           <div className="row g-0">
//             <div className="col-xl-6 col-lg-7 col-12">
//               <div className="banner__content text-white lg:mb-[-150px] ">
//                 <h3 className="text-white text-3xl font-bold py-8">
//                   The Best Website
//                 </h3>

//                 {/* ✅ Typewriter Gradient Effect */}
//                 <h1 className="text-3xl md:text-[6vw] lg:text-[2rem] font-extrabold max-w-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  whitespace-nowrap overflow-hidden">
//                   {displayText}
//                   <span className="cursor">|</span>
//                 </h1>

//                 <h2 className="text-4xl text-white font-semibold pt-10">
//                   Genuine Money Transaction
//                 </h2>
//                 <p className="text-lg leading-8 py-10 capitalize text-white  max-w-lg">
//                   Assertively communicate an expanded array of mindshare rather
//                   than diverse technologies for magnetic applications seamlessly
//                   virtual then conveniently monetize synergistic human capital.
//                 </p>
//                 <a
//                   href="login.html"
//                   className="gradient-btn  default-button inline-block mt-12 py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
//                 >
//                   <span>
//                     Join Us Today{" "}
//                     <i className="icofont-play-alt-1 ml-2"></i>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20">
//     <CounterSection />
//   </div>

//       </section>

//       {<CardSection/>}
//      <section>
//        {<PlayzoloSection/>}
//      </section>
//       {<GamingSection/>}
//       {<CasinoFeatures/>}
     
//       {/* ---------- Voices (Audio Elements) ---------- */}
//       <audio
//         ref={voice1Ref}
//         src="/audio/ElevenLabs_2025-07-31T05_26_22_Sia – Casual & Comforting Girl Voice for AI Chatbots & Apps_pvc_sp100_s31_sb52_se8_b_m2.mp3"
//         preload="auto"
//       ></audio>
//       <audio ref={voice2Ref} src="/audio/login.mp3" preload="auto"></audio>
//       <audio ref={voice3Ref} src="/audio/badhai ho.mp3" preload="auto"></audio>
//     </>
//   );
// };
// import React, { useState, useEffect, useRef } from "react";
// import { IoIosPeople } from "react-icons/io";
// import { BiUser } from "react-icons/bi";
// import logo1 from "../assets/images/logo/logo.png";
// import Odometer from "react-odometerjs";
// import "odometer/themes/odometer-theme-default.css";
// import "./CounterSection.css"; // custom CSS
// import CounterSection from './CounterSection'
// import FormModal from "./FormModal";
// import CardSection from "./header/CardSection";
// import PlayzoloSection from "./header/PlayzoloSection";
// import GamingSection from "./header/GamingSection";
// import CasinoShowcase from "./header/CasinoShowcase";
// import FloatingZoomCards from "./header/FloatingZoomCards";

// const Home = ({ isLoggedIn = false }) => {
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const [walletBalance, setWalletBalance] = useState("0.00");
//   const [profilePic, setProfilePic] = useState(null);
//   const [userName, setUserName] = useState("User Name");
//   const [typewriterIndex, setTypewriterIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [amount, setAmount] = useState(2733168); // counter amount
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     setIsFormOpen(true);
//   }, []);

//   // Refs for voices
//   const voice1Ref = useRef(null);
//   const voice2Ref = useRef(null);
//   const voice3Ref = useRef(null);
//   const downloadBtnRef = useRef(null);
//   const hangerRef = useRef(null); // Ref for the hanger div

//   const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

//   const loadProfilePic = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => setProfilePic(e.target.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeProfilePic = () => setProfilePic(null);
//   const logoutUser = () => console.log("Logging out...");

//   // ✅ Typewriter Effect
//   useEffect(() => {
//     const texts = [
//       "100% Legal & Secure",
//       "Play and Win Real Money|",
//       "Genuine Online Platform 🚀",
//     ];
//     const speed = 100;
//     const delayBetween = 2000;
//     let i = 0;
//     let charIndex = 0;

//     function typeWriter() {
//       if (charIndex < texts[typewriterIndex].length) {
//         setDisplayText((prev) => prev + texts[typewriterIndex][charIndex]);
//         charIndex++;
//         setTimeout(typeWriter, speed);
//       } else {
//         setTimeout(() => {
//           setDisplayText("");
//           charIndex = 0;
//           setTypewriterIndex((prev) => (prev + 1) % texts.length);
//         }, delayBetween);
//       }
//     }

//     typeWriter();
//   }, [typewriterIndex]);

//   // ✅ Counter Auto Increment
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAmount((prev) => prev + Math.floor(Math.random() * 50));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Voice autoplay fix (user interaction required)
//   // ✅ Voice sequential play
//   useEffect(() => {
//     const v1 = voice1Ref.current;
//     const v2 = voice2Ref.current;
//     const v3 = voice3Ref.current;

//     const playSequentially = async () => {
//       try {
//         await v1.play();
//         // wait for v1 to end
//         await new Promise((resolve) => {
//           v1.onended = resolve;
//         });

//         await v2.play();
//         await new Promise((resolve) => {
//           v2.onended = resolve;
//         });

//         await v3.play();
//         await new Promise((resolve) => {
//           v3.onended = resolve;
//         });
//       } catch (err) {
//         console.log("Audio play error:", err);
//       }
//     };

//     const handleClick = () => {
//       playSequentially();
//       document.body.removeEventListener("click", handleClick);
//       // repeat every 2 minutes
//       setInterval(playSequentially, 2 * 60 * 1000);
//     };

//     document.body.addEventListener("click", handleClick);

//     return () => document.body.removeEventListener("click", handleClick);
//   }, []);

//   // ✅ Smooth Horizontal Movement for Download Button and Hanger
// useEffect(() => {
//   const button = downloadBtnRef.current;
//   const hanger = hangerRef.current;
//   if (!button || !hanger) return;

//   let direction = 1;
//   let currentPosition = 0;
//   const maxMovement = 10; // Pixels to move left and right
//   const speed = 0.20; // Speed increased to make it faster

//   function animate() {
//     currentPosition += direction * speed;

//     if (currentPosition > maxMovement || currentPosition < -5) {
//       direction *= -1; // Reverse direction
//     }

//     button.style.transform = `translateX(${currentPosition}px)`;
//     hanger.style.transform = `translateX(${currentPosition}px)`;
//     requestAnimationFrame(animate);
//   }

//   animate();
// }, []);
//   const formattedAmount = amount.toLocaleString("en-IN");

//   return (
//     <>
//       <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
//       {/* ---------- Header ---------- */}
//       <header className="fixed w-full z-[999] top-0 left-0 bg-blue-950/30 backdrop-blur-2xl shadow-xl border-b border-white/10 animate-fadeInDown">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between items-center relative">
//             {/* Logo (Desktop) */}
//             <div className="hidden lg:inline-block">
//               <a href="index.html">
//                 <img src={logo1} alt="logo" className="max-w-[150px]" />
//               </a>
//             </div>

//             <div className="relative flex-1 lg:flex-none lg:w-3/4 header-bottom">
//               <div className="header-wrapper flex justify-between items-center lg:justify-end lg:pr-4">
//                 {/* Logo (Mobile) */}
//                 <div className="lg:hidden max-w-[120px]">
//                   <a href="index.html">
//                     <img src={logo1} alt="logo" />
//                   </a>
//                 </div>

//                 {/* Hanging Download APK Button */}
//                 <div className="hanging-button absolute top-full right-1 flex flex-col items-center z-[1000]">
//                   <div ref={hangerRef} className="hanger"></div> {/* Add ref to hanger */}
//                   <a
//                     ref={downloadBtnRef} // Add the ref here
//                     href="https://github.com/testitg/PlayZelo/releases/download/PlayZelo_V2.0/playzelo-release.apk"
//                     className="download-apk-btn"
//                   >
//                     ⬇ Download APK
//                   </a>
//                 </div>

//                 {/* Menu Area */}
//                 <div className="flex items-center space-x-4 ml-auto">
//                   {isLoggedIn ? (
//                     <>
//                       {/* Wallet Box */}
//                       <div className="hidden md:flex items-center p-2 rounded-lg bg-gray-700/50">
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
//                           alt="wallet"
//                           className="w-6 h-6 mr-2"
//                         />
//                         <span className="font-bold">
//                           ₹<span id="wallet-balance">{walletBalance}</span>
//                         </span>
//                       </div>

//                       {/* Profile Box */}
//                       <div className="relative">
//                         <div
//                           className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
//                           onClick={toggleProfileMenu}
//                         >
//                           <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center font-bold text-lg mr-2 overflow-hidden">
//                             {profilePic ? (
//                               <img
//                                 src={profilePic}
//                                 alt="profile"
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               "U"
//                             )}
//                           </div>
//                           <span className="text-white font-semibold hidden sm:inline">
//                             {userName}
//                           </span>
//                         </div>

//                         {isProfileMenuOpen && (
//                           <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
//                             <label className="block px-4 py-8 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
//                               Change Profile Picture
//                               <input
//                                 type="file"
//                                 className="hidden"
//                                 accept="image/*"
//                                 onChange={loadProfilePic}
//                               />
//                             </label>
//                             <div
//                               className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
//                               onClick={removeProfilePic}
//                             >
//                               Remove Profile Picture
//                             </div>
//                             <div
//                               className="block px-4 py-10 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
//                               onClick={logoutUser}
//                             >
//                               Logout
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     // Login & Signup Buttons
//                     <div className="flex space-x-3">
//                       <a
//                         href="login.html"
//                         className="flex items-center border border-green-500 text-green-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-400/50"
//                       >
//                         <BiUser className="mr-2 text-lg" />
//                         <span>LOG IN</span>
//                       </a>

//                       <a
//                         href="signup.html"
//                         className="flex items-center border border-pink-500 text-pink-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-400/50"
//                       >
//                         <IoIosPeople className="mr-2 text-lg" />
//                         <span>SIGN UP</span>
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ---------- Banner with Video ---------- */}
//       <section className="banner relative overflow-hidden bg-cover bg-center md:bg-left pt-[250px] pb-[150px] md:pt-[125px] md:pb-[330px]">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={videos} type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div className="banner-overlay absolute inset-0 bg-black opacity-60"></div>

//         <div className="container relative z-10 ml-35 pb-4">
//           <div className="row g-0">
//             <div className="col-xl-6 col-lg-7 col-12">
//               <div className="banner__content text-white lg:mb-[-150px] ">
//                 <h3 className="text-white text-3xl font-bold py-8">
//                   The Best Website
//                 </h3>

//                 {/* ✅ Typewriter Gradient Effect */}
//                 <h1 className="text-3xl md:text-[6vw] lg:text-[2rem] font-extrabold max-w-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  whitespace-nowrap overflow-hidden">
//                   {displayText}
//                   <span className="cursor">|</span>
//                 </h1>

//                 <h2 className="text-4xl text-white font-semibold pt-10">
//                   Genuine Money Transaction
//                 </h2>
//                 <p className="text-lg leading-8 py-10 capitalize text-white  max-w-lg">
//                   Assertively communicate an expanded array of mindshare rather
//                   than diverse technologies for magnetic applications seamlessly
//                   virtual then conveniently monetize synergistic human capital.
//                 </p>
//                 <a
//                   href="login.html"
//                   className="gradient-btn  default-button inline-block mt-12 py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
//                 >
//                   <span>
//                     Join Us Today{" "}
//                     <i className="icofont-play-alt-1 ml-2"></i>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//           <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20">
//     <CounterSection />
//   </div>

//       </section>

//       {<CardSection/>}
//       <section>
//         {<PlayzoloSection/>}
//       </section>
//       {<GamingSection/>}
//       {<CasinoShowcase/>}
//       {<FloatingZoomCards/>}

      
//       {/* ---------- Voices (Audio Elements) ---------- */}
//       <audio
//         ref={voice1Ref}
//         src="/audio/ElevenLabs_2025-07-31T05_26_22_Sia – Casual & Comforting Girl Voice for AI Chatbots & Apps_pvc_sp100_s31_sb52_se8_b_m2.mp3"
//         preload="auto"
//       ></audio>
//       <audio ref={voice2Ref} src="/audio/login.mp3" preload="auto"></audio>
//       <audio ref={voice3Ref} src="/audio/badhai ho.mp3" preload="auto"></audio>
//     </>
//   );
// };

const Home = ({ isLoggedIn = false }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState("0.00");
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState("User Name");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [amount, setAmount] = useState(2733168); // counter amount
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsFormOpen(true);
  }, []);

  // Refs for voices
  const voice1Ref = useRef(null);
  const voice2Ref = useRef(null);
  const voice3Ref = useRef(null);
  const downloadBtnRef = useRef(null);
  const hangerRef = useRef(null); // Ref for the hanger div

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const loadProfilePic = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePic = () => setProfilePic(null);
  const logoutUser = () => console.log("Logging out...");

  // ✅ Typewriter Effect
  useEffect(() => {
    const texts = [
      "100% Legal & Secure",
      "Play and Win Real Money|",
      "Genuine Online Platform 🚀",
    ];
    const speed = 100;
    const delayBetween = 2000;
    let i = 0;
    let charIndex = 0;

    function typeWriter() {
      if (charIndex < texts[typewriterIndex].length) {
        setDisplayText((prev) => prev + texts[typewriterIndex][charIndex]);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          setDisplayText("");
          charIndex = 0;
          setTypewriterIndex((prev) => (prev + 1) % texts.length);
        }, delayBetween);
      }
    }

    typeWriter();
  }, [typewriterIndex]);

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
        // wait for v1 to end
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
      // repeat every 2 minutes
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
  const maxMovement = 10; // Pixels to move left and right
  const speed = 0.20; // Speed increased to make it faster

  function animate() {
    currentPosition += direction * speed;

    if (currentPosition > maxMovement || currentPosition < -5) {
      direction *= -1; // Reverse direction
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
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      {/* ---------- Header ---------- */}
      <header className="fixed w-full z-[999] top-0 left-0 bg-blue-950/30 backdrop-blur-2xl shadow-xl border-b border-white/10 animate-fadeInDown">
        <div className="container mx-auto px-4">
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
                  <div ref={hangerRef} className="hanger"></div> {/* Add ref to hanger */}
                  <a
                    ref={downloadBtnRef} // Add the ref here
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
                    // Login & Signup Buttons
                    <div className="flex space-x-3">
                      <a
                        href="/login"
                        className="flex items-center border border-green-500 text-green-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-400/50"
                      >
                        <BiUser className="mr-2 text-lg" />
                        <span>LOG IN</span>
                      </a>

                      <a
                        href="/signup"
                        className="flex items-center border border-pink-500 text-pink-500 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-400/50"
                      >
                        <IoIosPeople className="mr-2 text-lg" />
                        <span>SIGN UP</span>
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

        <div className="container relative z-10 ml-35 pb-4">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-7 col-12">
              <div className="banner__content text-white lg:mb-[-150px] ">
                <h3 className="text-white text-3xl font-bold py-8">
                  The Best Website
                </h3>

                {/* ✅ Typewriter Gradient Effect */}
                <h1 className="text-3xl md:text-[6vw] lg:text-[2rem] font-extrabold max-w-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  whitespace-nowrap overflow-hidden">
                  {displayText}
                  <span className="cursor">|</span>
                </h1>

                <h2 className="text-4xl text-white font-semibold pt-10">
                  Genuine Money Transaction
                </h2>
                <p className="text-lg leading-8 py-10 capitalize text-white  max-w-lg">
                  Assertively communicate an expanded array of mindshare rather
                  than diverse technologies for magnetic applications seamlessly
                  virtual then conveniently monetize synergistic human capital.
                </p>
                <a
                  href="/login"
                  className="gradient-btn  default-button inline-block mt-12 py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
                >
                  <span>
                    Join Us Today{" "}
                    <i className="icofont-play-alt-1 ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20">
    <CounterSection />
  </div>

      </section>

      {<CardSection/>}
      <section>
      {<PlayzoloSection/>}
      </section>
      {<GamingSection/>}
      {<CasinoShowcase/>}
      {<FloatingZoomCards/>}

      
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
