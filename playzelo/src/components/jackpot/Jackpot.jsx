import React, { useState } from "react";

// ✅ Reusable Modal Component
const GameModal = ({ show, onClose, title, instructions, checkboxId }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content game-modal">
          <div className="modal-header">
            <h5 className="modal-title text-gradient">{title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label neon-label">Enter Username</label>
              <input
                type="text"
                className="form-control neon-input"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label neon-label">How to Play</label>
              <div className="instructions-box p-3">
                <ul className="list-unstyled m-0">
                  {instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id={checkboxId} />
              <label className="form-check-label neon-label" htmlFor={checkboxId}>
                I agree with the rules
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn neon-btn" disabled>
              🚀 Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const JackpotSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const games = [
    {
      id: "mines",
      title: "💣 Play MINES",
      img: "assets/images/jaqport/mines.png",
      prize: "₹1,23,002",
      instructions: ["1️⃣ Select difficulty level.", "2️⃣ Avoid the hidden mines.", "3️⃣ Cash out before hitting a mine."],
    },
    {
      id: "lottery",
      title: "🎟️ Play LOTTERY",
      img: "assets/images/jaqport/10.jpg",
      prize: "₹1,23,002",
      instructions: ["1️⃣ Buy a lottery ticket.", "2️⃣ Wait for the draw.", "3️⃣ Match numbers to win big."],
    },
    {
      id: "teenpatti",
      title: "🃏 Play TEEN PATTI",
      img: "assets/images/jaqport/12.jpg",
      prize: "₹1,23,002",
      instructions: ["1️⃣ Place your bet.", "2️⃣ Get 3 cards.", "3️⃣ Compare hands and win."],
    },
  ];

  return (
    <section
      className="jaqport padding-top padding-bottom"
      style={{ backgroundImage: "url(assets/images/jaqport/jaqport-bg.jpg)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>PlayZelo JACKPOTS</h2>
          <p>
            At PlayZelo, we show only the best games built with passion, simplicity and creativity!
          </p>
        </div>

        <div className="section-wrapper">
          <div className="row">
            {/* Left Winners List */}
            <div className="col-lg-4 col-12">
              <div className="jaqport__left">
                <div className="jaqport__title d-flex justify-content-between align-items-center">
                  <h4>Top Winners List</h4>
                  <a href="jaqpot.html" className="default-button">
                    <span>
                      View All <i className="icofont-circled-right"></i>
                    </span>
                  </a>
                </div>
                <div className="jaqport__body">
                  <ul id="winnerList" className="winner-list">
                    {/* TODO: Fill dynamically */}
                    <li>🎉 Ramesh - ₹5,000</li>
                    <li>🎉 Priya - ₹12,000</li>
                    <li>🎉 Arjun - ₹25,000</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Jackpots */}
            <div className="col-lg-8 col-12">
              <div className="jaqport__right">
                <div className="jaqport__top">
                  <div className="jaqport__title">
                    <h4>Trending JACKPOTS</h4>
                    <div className="jaqport__title-gametime">
                      {/* Static Countdown for now */}
                      <ul className="countdown">
                        <li><span className="count-number">56</span><p>Days</p></li>
                        <li><span className="count-number">16</span><p>Hours</p></li>
                        <li><span className="count-number">25</span><p>Mins</p></li>
                        <li><span className="count-number">19</span><p>Secs</p></li>
                      </ul>
                    </div>
                  </div>

                  {/* Game Cards */}
                  <div className="jaqport__body">
                    <div className="row g-4 justify-content-center">
                      {games.map((game) => (
                        <div key={game.id} className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img src={game.img} alt={game.title} className="rounded-3 w-100" />
                              </div>
                              <div className="game__overlay">
                                <h4>{game.title.replace("Play ", "")}</h4>
                                <p>{game.prize}</p>
                                <button
                                  className="default-button play-now-btn"
                                  onClick={() => setActiveModal(game.id)}
                                >
                                  <span>
                                    PLAY NOW <i className="icofont-circled-right"></i>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Running Jackpots Bottom */}
                <div className="jaqport__bottom">
                  <div className="jaqport__title">
                    <h4>RUNNING JACKPOTS</h4>
                    <a href="game-list.html" className="default-button">
                      <span>
                        Browse all games <i className="icofont-circled-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render Modals */}
        {games.map((g) => (
          <GameModal
            key={g.id}
            show={activeModal === g.id}
            onClose={() => setActiveModal(null)}
            title={g.title}
            instructions={g.instructions}
            checkboxId={`agree-${g.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default JackpotSection;
