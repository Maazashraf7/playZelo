import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Images
import dealerImg from "/src/assets/images/Teenpatti/Teenpatti/Images/dealer.png";

const positionClasses = [
  "bottom-[10%] left-1/2 -translate-x-1/2",       // bottom center
  "top-[10%] left-[15%] sm:left-[20%]",          // top left
  "top-[10%] right-[15%] sm:right-[20%]",        // top right
  "bottom-[18%] left-[10%] sm:left-[15%]",       // bottom left
  "bottom-[18%] right-[10%] sm:right-[15%]",     // bottom right
];

const suits = ["spade", "club", "diamond", "heart"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

function generateDeck() {
  let deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({
        suit,
        value,
        img: `/src/assets/images/Teenpatti/Teenpatti/Images/${suit}_${value}.png`,
        faceUp: false,
      });
    });
  });
  return deck.sort(() => Math.random() - 0.5);
}

export default function GameRoom() {
  const location = useLocation();
  const waitingRoomPlayers = location.state?.players || [];

  const [players, setPlayers] = useState(
    waitingRoomPlayers.map((p, i) => ({
      id: i,
      name: p.name,
      amount: 1.0,
      avatar: p.avatar,
      cards: [],
      folded: false,
    }))
  );

  const [pot, setPot] = useState(0);
  const [flyingCards, setFlyingCards] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [timer, setTimer] = useState(10);
  const [timerActive, setTimerActive] = useState(false);

  const dealerRef = useRef(null);
  const playerRefs = useRef([]);
  const hasDealtRef = useRef(false);

  // 👇 Smooth step-by-step card animation like Android Compose
  const animateCard = async (playerIndex, card, cardIndex) => {
    const dealerEl = dealerRef.current;
    const playerEl = playerRefs.current[playerIndex];
    if (!dealerEl || !playerEl) return;

    const dealerRect = dealerEl.getBoundingClientRect();
    const playerRect = playerEl.getBoundingClientRect();

    // final target
    const endX = playerRect.left + (cardIndex - 1) * 20;
    const endY = playerRect.top + (cardIndex - 1) * 5;

    const steps = 30;
    const duration = 200; // total ms
    const stepDelay = duration / steps;

    const cardObj = {
      id: Date.now() + Math.random(),
      img: "/src/assets/images/Teenpatti/Teenpatti/Images/backgroundred.png",
      x: dealerRect.left + dealerRect.width / 2,
      y: dealerRect.top + dealerRect.height / 2,
      rotate: (cardIndex - 1) * 10,
    };

    setFlyingCards((prev) => [...prev, cardObj]);

    // step animation loop
    for (let s = 1; s <= steps; s++) {
      await new Promise((res) => setTimeout(res, stepDelay));
      setFlyingCards((prev) =>
        prev.map((c) =>
          c.id === cardObj.id
            ? {
                ...c,
                x: cardObj.x + ((endX - cardObj.x) * s) / steps,
                y: cardObj.y + ((endY - cardObj.y) * s) / steps,
              }
            : c
        )
      );
    }

    // finally give card to player
    setPlayers((prev) =>
      prev.map((p, i) =>
        i === playerIndex ? { ...p, cards: [...p.cards, card] } : p
      )
    );

    // remove from flying list
    setFlyingCards((prev) => prev.filter((c) => c.id !== cardObj.id));
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const dealCards = async () => {
    const newDeck = generateDeck();
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < players.length; i++) {
        const card = newDeck.pop();
        await animateCard(i, card, j);
        await wait(150); // delay between cards
      }
      await wait(300); // delay between players
    }

    setTimeout(() => {
      setTimerActive(true);
    }, 1000);
  };

  const flipCard = (playerIndex, cardIndex) => {
    if (playerIndex !== 0) return;
    setPlayers((prev) =>
      prev.map((p, i) =>
        i === playerIndex
          ? {
              ...p,
              cards: p.cards.map((c, ci) =>
                ci === cardIndex ? { ...c, faceUp: !c.faceUp } : c
              ),
            }
          : p
      )
    );
  };

  const handleShow = () => {
    setPlayers((prev) =>
      prev.map((p, i) =>
        i === 0
          ? { ...p, cards: p.cards.map((c) => ({ ...c, faceUp: true })) }
          : p
      )
    );
  };

  const handleBet = (playerId = 0, betAmount = 0.1) => {
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === playerId && p.amount >= betAmount
          ? { ...p, amount: p.amount - betAmount }
          : p
      )
    );
    setPot((prev) => prev + betAmount);
  };

  const handleFold = (playerId = 0) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, folded: true } : p))
    );
  };

  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCurrentTurn((t) => (t + 1) % players.length);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [players.length, timerActive]);

  useEffect(() => {
    if (!hasDealtRef.current) {
      hasDealtRef.current = true;
      dealCards();
    }
  }, []);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center overflow-hidden font-sans"
      style={{
        backgroundImage: "url('/src/assets/images/Teenpatti/Teenpatti/Images/teenpatti7.png')",
      }}
    >
      {/* Dealer */}
      <div
        ref={dealerRef}
        className="absolute top-[4%] left-1/2 -translate-x-1/2 text-center"
      >
        <img
          src={dealerImg}
          alt="Dealer"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-300 bg-white"
        />
        <div className="text-white font-bold mt-1 drop-shadow-md text-xs sm:text-sm">
          Dealer
        </div>
      </div>

      {/* Players */}
      {players.map((p, i) => (
        <div
          key={p.id}
          ref={(el) => (playerRefs.current[i] = el)}
          className={`absolute ${positionClasses[i]} flex flex-col items-center text-white font-semibold drop-shadow-md ${
            p.folded ? "opacity-50" : ""
          } w-[70px] sm:w-[90px] text-xs sm:text-sm`}
        >
          <div className="relative">
            <img
              src={p.avatar}
              alt={p.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white bg-gray-200"
            />

            {timerActive && currentTurn === i && (
              <svg className="absolute -top-1 -left-1" width="72" height="72">
                <circle
                  cx="36"
                  cy="36"
                  r={radius}
                  stroke="#555"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="36"
                  cy="36"
                  r={radius}
                  stroke={timer > 5 ? "lime" : "red"}
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (timer / 10) * circumference}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1s linear" }}
                />
              </svg>
            )}
          </div>

          <div className="truncate w-full text-center mt-1">
            {p.name} ${p.amount.toFixed(1)}
          </div>

          <div className="relative flex justify-center items-center h-[50px] sm:h-[60px] w-[120px] sm:w-[140px] mt-1">
            {p.cards.map((c, idx) => (
              <img
                key={idx}
                src={
                  i === 0
                    ? c.faceUp
                      ? c.img
                      : "/src/assets/images/Teenpatti/Teenpatti/Images/backgroundred.png"
                    : "/src/assets/images/Teenpatti/Teenpatti/Images/backgroundred.png"
                }
                alt={`${c.suit}_${c.value}`}
                onClick={() => flipCard(i, idx)}
                className={`absolute w-[30px] sm:w-[40px] h-auto ${
                  i === 0 ? "cursor-pointer" : ""
                }`}
                style={{
                  transform: `translateX(${(idx - 1) * 25}px) rotate(${(idx - 1) * 12}deg)`,
                  zIndex: idx + 1,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Flying Cards */}
      {flyingCards.map((card) => (
        <img
          key={card.id}
          src={card.img}
          className="absolute w-[40px] sm:w-[50px] z-[1000]"
          style={{
            top: card.y,
            left: card.x,
            transform: `rotate(${card.rotate}deg)`,
          }}
        />
      ))}

      {/* Pot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 font-bold text-lg sm:text-xl drop-shadow-md">
        Pot: ${pot.toFixed(2)}
      </div>

      {/* Buttons */}
     {/* Buttons */}
<div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 flex gap-5 flex-wrap justify-center px-6 max-w-full">
  {[
    { text: "Blind", color: "from-blue-500 to-blue-700", action: () => {} }, // 🔄 Now does nothing
    { text: "Show", color: "from-green-500 to-green-700", action: handleShow },
    { text: "Bet", color: "from-yellow-500 to-yellow-700", action: () => handleBet(0, 0.1) },
    { text: "Chaal", color: "from-purple-500 to-purple-700", action: () => console.log("Chaal") },
    { text: "Fold", color: "from-red-500 to-red-700", action: () => handleFold(0) },
  ].map(({ text, color, action }, idx) => (
    <button
      key={idx}
      onClick={action}
      className={`bg-gradient-to-r ${color} text-white font-bold py-2 px-4 rounded-lg shadow-lg min-w-[100px] sm:min-w-[100px] hover:scale-105 transition`}
    >
      {text}
    </button>
  ))}
</div>

    </div>
  );
}