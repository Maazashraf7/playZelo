import React, { useState, useEffect } from "react";
import bgImage from '../../assets/images/game/ludo/ludo-bg-img.jpg';
import img from '../../assets/images/game/ludo/ludo board.png';
import LudoGame from "./LudoGame";

export default function LandingPage() {
	const [step, setStep] = useState("welcome");
	const [showTerms, setShowTerms] = useState(false);
	const [countdown, setCountdown] = useState(10);

	useEffect(() => {
		let timer;
		if (step === "confirm" && countdown > 0) {
			timer = setTimeout(() => setCountdown(c => c - 1), 1000);
		} else if (countdown === 0 && step === "confirm") {
			// Countdown khatam hote hi next step jese "searching" ya "game" me le ja sakte hain
			setStep("searching");
		}
		return () => clearTimeout(timer);
	}, [step, countdown]);


	// Terms popup delay (5 sec after welcome)
	useEffect(() => {
		if (step === "welcome") {
			const timer = setTimeout(() => setShowTerms(true), 1000);
			return () => clearTimeout(timer);
		}
	}, [step]);

	// Searching after confirm opens game page
	useEffect(() => {
		if (step === "searching") {
			const timer = setTimeout(() => {
				setStep("game");
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [step]);

	return (
		<div className="relative min-h-screen flex items-center justify-center font-sans p-4 overflow-hidden">

			{/* Background Image with zoom animation */}
			<div
				className="absolute inset-0 bg-cover bg-center animate-scalePulse"
				style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
			/>

			{/* Animation CSS */}
			<style>
				{`
          @keyframes scalePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-scalePulse {
            animation: scalePulse 4s ease-in-out infinite;
          }
        `}
			</style>

			{/* Content container, relative and above background */}
			<div className="relative z-10 w-full">

				{/* Welcome Page */}
				{step === "welcome" && (
					<div className="text-center animate-fadeIn text-white drop-shadow-lg">
						{/* <h1 className="text-5xl md:text-6xl font-extrabold">
              🎲 PlayZelo Ludo 🎲
            </h1> */}

						{/* Terms Popup */}
						{showTerms && (
							<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
								<div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center">

									{/* Heading */}
									<h2 style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
										Terms & Conditions
									</h2>
									{/* Subheading */}
									<p className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
										📌 Ludo Game – Terms & Conditions
									</p>

									{/* List */}
									<ol className="text-sm text-gray-700 mb-5 text-left list-decimal list-inside space-y-1">
										<li>You must be 18+ and not from restricted states.</li>
										<li>This is a real money game and involves financial risk. Play responsibly.</li>
										<li>Fair play only – cheating or multiple accounts may lead to suspension.</li>
										<li>Winnings are withdrawable to verified bank/UPI accounts (KYC & taxes apply).</li>
									</ol>

									{/* Footer note */}
									<p className="text-sm text-gray-700 mb-4">
										👉 By tapping <b>I Agree</b>, you accept our full Terms & Conditions.
									</p>

									{/* Buttons */}
									<div className="flex gap-6 justify-center font-semibold">
										<button
											onClick={() => setShowTerms(false)}
											className="text-green-600 hover:text-green-800 transition"
										>
											CANCEL
										</button>
										<button
											onClick={() => {
												setShowTerms(false);
												setStep("play");
											}}
											className="text-blue-600 hover:text-blue-800 transition"
										>
											I AGREE
										</button>
									</div>
								</div>
							</div>

						)}
					</div>
				)}

				{/* Play Now Page */}
				{step === "play" && (
					<div className="text-center">
						<button
							onClick={() => setStep("lobby")}
							className="px-10 py-4  bg-white text-pink-700 text-2xl font-bold shadow-xl hover:scale-105 transform transition"
							style={{ borderRadius: '10px' }}
						>
							🚀 Play Now
						</button>
					</div>
				)}

				{/* Lobby Page */}
				{step === "lobby" && (
					<div className="w-full max-w-2xl mx-auto bg-gray-50 min-h-screen">

						{/* Top Header */}
						<div className="flex items-center justify-between bg-blue-900 text-white px-4 py-3">
							{/* Back Button */}
							<button
								onClick={() => setStep("play")}
								className="text-white text-xl font-bold"
							>
								←
							</button>
							<h1 className="text-lg font-semibold pr-[100px]">Ludo PlayZelo</h1>
							{/* <button className="text-yellow-400 text-sm font-bold">
        SELECT PLAYERS
      </button> */}
						</div>

						{/* Filter Row */}
						<div className="flex items-center gap-3 px-4 py-2 bg-white shadow-sm">
							{/* Left Side Button */}
							<button className="px-3 py-1 rounded-full bg-yellow-400 text-black font-medium text-sm">
								All
							</button>

							{/* Dropdown (Select Players) */}
							<select className="px-3 py-2 border rounded bg-white text-black shadow-sm text-sm">
								<option value="">Select Players</option>
								<option value="2">2 Players</option>
								<option value="3">3 Players</option>
								<option value="4">4 Players</option>
							</select>
						</div>


						{/* Button */}
						{/* <button className="text-yellow-400 text-sm font-bold">
      SELECT PLAYERS
    </button>
  </div>
</div> */}

						{/* Recommended Tournaments */}
						<div className="px-4 py-3">
							<h2 className="text-md font-bold text-gray-500 mb-2"
								style={{ color: "gray" }}
							>
								Recommended Tournaments
							</h2>
							{[
								{ prize: 5, entry: 3 },
								{ prize: 10, entry: 5 },
								{ prize: 20, entry: 10 },
							].map((t, i) => (
								<div
									key={i}
									onClick={() => {
										setStep("confirm");
										setCountdown(10);
									}}
									className="bg-white rounded-lg shadow-sm p-3 flex justify-between items-center cursor-pointer border border-gray-200 mb-2 hover:scale-[1.01] transition"
								>
									<div>
										<p className="text-sm text-gray-700 flex items-center gap-1">
											👥 133+ • 2 Players • 1 Winner
										</p>
										<p className="text-xs text-gray-500 font-medium mt-0.5">PRIZE POOL</p>
										<p className="text-lg font-bold text-pink-700">₹{t.prize}</p>
									</div>
									<div className="text-right">
										<p className="text-xs text-gray-500 font-semibold">REGULAR</p>
										<p className="text-red-500 text-xs">00m 05s</p>
										<button className="mt-1 px-3 py-0.5 bg-green-500 text-white rounded-full text-sm font-semibold shadow-sm">

											Entry ₹{t.entry}
										</button>
									</div>
								</div>
							))}

							{/* Other Tournaments */}
							<h2 className="text-md font-bold text-gray-700 mt-4 mb-2"
								style={{ color: "gray" }}
							>
								Other Tournaments
							</h2>
							{[
								{ prize: 100, entry: 50 },
								{ prize: 75, entry: 30 },
							].map((t, i) => (
								<div
									// key={i}
									// onClick={() => {
									//   setStep("confirm");
									//   setCountdown(10);
									// }}
									className="bg-white rounded-lg shadow-sm p-3 flex justify-between items-center cursor-pointer border border-gray-200 mb-2 hover:scale-[1.01] transition"
								>
									<div>
										<p className="text-sm text-gray-700 flex items-center gap-1">
											👥 133+ • 2 Players • 1 Winner
										</p>
										<p className="text-xs text-gray-500 font-medium mt-0.5">PRIZE POOL</p>
										<p className="text-lg font-bold text-pink-700">₹{t.prize}</p>
									</div>
									<div className="text-right">
										<p className="text-xs text-gray-500 font-semibold">REGULAR</p>
										<p className="text-red-500 text-xs">00m 09s</p>
										<button className="mt-1 px-3 py-0.5 bg-green-500 text-white rounded-full text-sm font-semibold shadow-sm">
											Entry ₹{t.entry}
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Confirm Password Popup */}
				{/* {step === "confirm" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl">
              <h2 className="text-lg font-semibold mb-3 text-pink-700">
                Confirm Password
              </h2>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <p className="text-gray-600 mb-3 font-medium">
                Starting in <span className="text-pink-700">{countdown}</span> sec...
              </p>
              <button
                onClick={() => setStep("searching")}
                className="px-6 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        )} */}


				{step === "confirm" && (
					<div className="w-full max-w-2xl mx-auto mt-4 p-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
						{/* Countdown content */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-10 h-10 text-green-600 mr-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 2a1 1 0 011 1v4a5 5 0 004 4v4a5 5 0 00-4 4v4a1 1 0 01-1 1h12a1 1 0 01-1-1v-4a5 5 0 00-4-4v-4a5 5 0 004-4V3a1 1 0 00-1-1H6z"
							/>
						</svg>

						<div>
							<p className="text-green-600 font-semibold text-lg mb-1">
								Game starting in...
							</p>
							<div className="bg-green-600 text-white rounded-full px-6 py-2 text-xl font-bold w-max">
								00m:0{countdown}s
							</div>
						</div>
					</div>
				)}


				{/* Searching for Players */}
				{step === "searching" && (
					<div className="flex flex-col items-center justify-center text-white mt-10">
						<h2 className="text-3xl font-extrabold animate-pulse mb-6">
							🔍 Searching for Players...
						</h2>

						<div className="flex items-center justify-center gap-8">
							{/* Player 1 Avatar */}
							<div className="flex flex-col items-center">
								<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-lg">
									🧑‍💼
								</div>
								<p className="text-sm mt-2 text-yellow-100">You</p>
							</div>

							{/* VS */}
							<div className="text-2xl font-bold text-yellow-300 animate-bounce">VS</div>

							{/* Player 2 Avatar (Dummy/Searching) */}
							<div className="flex flex-col items-center">
								<div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl text-black shadow-lg animate-pulse">
									❓
								</div>
								<p className="text-sm mt-2 text-yellow-100">Finding...</p>
							</div>
						</div>
					</div>
				)}


				{/* Game Page */}
				{step === "game" && (
					<div
						className="flex flex-col items-center justify-center w-full h-full min-h-screen py-4"
						style={{ backgroundColor: "rgba(5, 31, 74, 0.6)" }} // Transparent blue
					>
						{/* Top Header */}
						<div className="flex items-center justify-between w-full max-w-md px-4 py-2">
							<div className="w-10 h-10 border-2 border-orange-400 rounded-full" />
							<div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md">
								🏆 Prize Pool ₹0.6
							</div>
							<div className="w-10 h-10 border-2 border-orange-400 rounded-full" />
						</div>

						{/* Timer */}
						<p className="text-green-400 text-sm mt-1">⏱ 09:52</p>

						{/* Ludo Board */}
						<div
							className="mt-3 bg-contain bg-no-repeat bg-center"
							style={{ backgroundImage: `url(${img})` }}
						>
							<LudoGame/>
						</div>

						{/* Dice */}
						<div className="flex justify-center mt-4">
							<div className="w-12 h-12 border-2 border-orange-400 rounded-full flex items-center justify-center text-white text-xl">
								🎲
							</div>
						</div>
					</div>
				)}


			</div>
		</div>
	);
}