import React from "react";

const games = [
  {
    id: 1,
    img: "assets/images/game/01.png",
    title: "Advice And Guide",
    link: "team-single.html",
    desc: "Holisticly underwhe fully researched deliverables for revolutionary sources skills and technically sound",
  },
  {
    id: 2,
    img: "assets/images/game/02.png",
    title: "Great Solutions",
    link: "team-single.html",
    desc: "Holisticly underwhe fully researched deliverables for revolutionary sources skills and technically sound",
  },
  {
    id: 3,
    img: "assets/images/game/03.png",
    title: "Support in Person",
    link: "team-single.html",
    desc: "Holisticly underwhe fully researched deliverables for revolutionary sources skills and technically sound",
  },
];

const CollectionSection = () => {
  return (
    <section className="collection-section padding-top padding-bottom">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Welcome to PlayZelo</h2>
        </div>

        {/* Games / Features Grid */}
        <div className="section-wrapper game">
          <div className="row g-4 justify-content-center">
            {games.map((game) => (
              <div key={game.id} className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src={game.img} alt={game.title} />
                    </div>
                    <div className="game__content">
                      <h4>
                        <a href={game.link}>{game.title}</a>
                      </h4>
                      <p>{game.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
