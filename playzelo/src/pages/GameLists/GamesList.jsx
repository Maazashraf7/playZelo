import React, { useState } from "react";
import "./GamesList.css";
 
const games = [
  { id: 1, img: "/src/assets/images/game/01.jpg", title: "Casino" },
  { id: 2, img: "/src/assets/images/game/01.png", title: "Casino Royal" },
  { id: 3, img: "/src/assets/images/game/02.jpg", title: "Poker" },
  { id: 4, img: "/src/assets/images/game/02.png", title: "Slots" },
  { id: 5, img: "/src/assets/images/game/03.jpg", title: "Jackpot" },
  { id: 6, img: "/src/assets/images/game/03.png", title: "Roulette" },
  { id: 7, img: "/src/assets/images/game/04.jpg", title: "Lucky Dice" },
  { id: 8, img: "/src/assets/images/game/04.png", title: "Blackjack" },
  { id: 9, img: "/src/assets/images/game/05.jpg", title: "Poker" },
  { id: 10, img: "/src/assets/images/game/05.png", title: "Cards" },
  { id: 11, img: "/src/assets/images/game/06.jpg", title: "Slot 777" },
  { id: 12, img: "/src/assets/images/game/06.png", title: "Ace" },
  { id: 13, img: "/src/assets/images/game/07.jpg", title: "Casino Party" },
  { id: 14, img: "/src/assets/images/game/07.png", title: "Royal Flush" },
  { id: 15, img: "/src/assets/images/game/08.jpg", title: "Mega Win" },
  { id: 16, img: "/src/assets/images/game/08.png", title: "Card Master" },
  { id: 17, img: "/src/assets/images/game/09.jpg", title: "777 Blast" },
  { id: 18, img: "/src/assets/images/game/10.jpg", title: "Super Dice" },
  { id: 19, img: "/src/assets/images/game/bg.jpg", title: "Lucky Spin" },
  { id: 20, img: "/src/assets/images/game/07.jpg", title: "Crazy Poker" },
];
 
const tabs = [
  "All Matches",
  "Today's Matches",
  "Upcoming Matches",
  "Match Results",
];
 
const GameList = () => {
  const [activeTab, setActiveTab] = useState("All Matches");
  const [selectedGame, setSelectedGame] = useState(null);
 
  return (
    <section className="game-section">
      {/* Header Section */}
      <div className="header-banner">
        <h2>Most Popular Game</h2>
 
        {/* Floating Glow Effects */}
        <div className="blur-circle blue"></div>
        <div className="blur-circle purple"></div>
        <span className="dot yellow"></span>
        <span className="dot pink"></span>
        <span className="dot green"></span>
      </div>
 
      {/* Tabs */}
      <div className="game-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
 
      {/* Game Grid */}
      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => setSelectedGame(game)}
          >
            <img src={game.img} alt={game.title} />
            <div className="overlay">
              <button className="play-btn">
                PLAY NOW <span style={{ fontSize: "18px" }}>➔</span>
              </button>
            </div>
          </div>
        ))}
      </div>
 
      {/* Modal */}
      {selectedGame && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedGame(null)}>
              &times;
            </span>
            <img src={selectedGame.img} alt={selectedGame.title} />
            <h3>{selectedGame.title}</h3>
            <p>
              Poker Games <span className="highlight">$1,325,002</span>
            </p>
            <button className="play-btn">Play Now ❤️</button>
          </div>
        </div>
      )}
    </section>
  );
};
 
export default GameList;