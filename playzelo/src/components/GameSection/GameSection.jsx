import React from "react";
import game1 from "../../assets/images/game/01.jpg";
import game2 from "../../assets/images/game/02.jpg";
import game3 from "../../assets/images/game/03.jpg";
import game4 from "../../assets/images/game/04.jpg";
import bgImage from "../../assets/images/match/bg.jpg";
import ComingSoonModal from "../ComingSoonModal/ComingSoon";
import { Link } from "react-router-dom";

const games = [
  { id: 1, img: game1, title: "Free Poker Games", category: "Slots", filter: "cat-1" },
  { id: 2, img: game2, title: "Free Poker Games", category: "Roulette", filter: "cat-2" },
  { id: 3, img: game3, title: "Free Poker Games", category: "Black Jack", filter: "cat-3" },
  { id: 4, img: game4, title: "Free Poker Games", category: "Poker Games", filter: "cat-4" },
];

const GameSection = () => {
  return (
    <div
      className="game-section padding-top padding-bottom overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>RELATED OTHER GAMES</h2>
        </div>

        {/* Filter Menu (static for now) */}
        <ul className="game__filter">
          <li data-filter="*" className="is-checked"><span className="category">All</span></li>
          <li data-filter=".cat-1"><span className="category">Slots</span></li>
          <li data-filter=".cat-2"><span className="category">Roulette</span></li>
          <li data-filter=".cat-3"><span className="category">Black Jack</span></li>
          <li data-filter=".cat-4"><span className="category">Poker Games</span></li>
        </ul>

        {/* Games Grid */}
        <div className="row g-4 grid">
          {games.map((game) => (
            <div key={game.id} className={`col-lg-6 col-12 ${game.filter}`}>
              <div className="game__item item-layer">
                <div className="game__inner text-center p-0">
                  <div className="game__thumb mb-0">
                    <img src={game.img} alt={game.title} className="rounded-3 w-100" />
                  </div>
                  <div className="game__overlay">
                    <div className="game__overlay-left">
                      <h4>{game.title}</h4>
                      <p>Category: {game.category}</p>
                    </div>
                    <div className="game__overlay-right">
                      <a
                        href="#"
                        className="default-button"
                        data-bs-toggle="modal"
                        data-bs-target="#comingSoonModal"
                      >
                        <span>Coming Soon <i className="icofont-circled-right"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          
        {/* Browse Button */}
        <div className="button-wrapper text-center mt-5">
          <Link to="/gamelist" className="default-button">
            <span>Browse All Matches <i className="icofont-circled-right"></i></span>
          </Link>
        </div>
      </div>
	  	<ComingSoonModal />

    </div>
  );
};

export default GameSection;
