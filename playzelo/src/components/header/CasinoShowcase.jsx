import React, { useState } from "react";
// import img1 from '../../assets/images/game/01.jpg';


const categories = [
{ key: "all", label: "ALL" },
{ key: "slots", label: "SLOTS" },
 { key: "roulette", label: "ROULETTE" },
 { key: "blackjack", label: "BLACK JACK" },
 { key: "pokergames", label: "POKER GAMES" },
];


const cards = [
  {
    id: 1,
    img: '/images/01.jpg',
    title: "FREE POKER GAMES",
    category: "roulette",
    badge: "COMING SOON",
  },
  {
    id: 2,
    img: "/images/02.jpg",
    title: "CASINO",
    category: "roulette",
  },
  {
    id: 3,
    img: "/images/03.jpg",
    title: "CASINO 777",
    category: "slots",
  },
  {
    id: 4,
    img: "/images/04.jpg",
    title: "CASINO PLAY",
    category: "slots",
  },
];


function CasinoButton({ children }) {
  return (
    <button
      className="group/button bg-white bg-opacity-90 backdrop-blur-sm text-[#ff2463] font-semibold p-2 rounded-md shadow-md 
        transition-all duration-300 flex items-center gap-2
        hover:bg-[#ff2463] hover:text-white hover:shadow-lg"
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover/button:-rotate-45">
        &#8594;
      </span>
    </button>
  );
}


function CasinoCard({ img, title, category, badge }) {
  return (
    <div
      className="relative w-full min-h-[250px] overflow-hidden 
        transition-transform duration-500 group "
      style={{
        // Always squared (no border-radius), double white shadow (always visible, even on hover)
        borderRadius: 0,
        boxShadow: `
          0px 6px 24px 2px rgba(255,255,255,0.46), 
          0px 16px 60px 10px rgba(255,255,255,0.13)
        `,
      }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-[290px] object-cover rounded-[10px]"
        style={{ borderRadius: 20 }}
      />
      <div className="absolute inset-0 flex items-end pointer-events-none">
        <div
          className="h-20 w-full flex items-center px-6 transition-all duration-500
            bg-[#ff2463e0] opacity-0 translate-x-[-100%]
            group-hover:opacity-100 group-hover:translate-x-0"
          style={{
            borderRadius: 0,
            pointerEvents: "auto",
          }}
        >
          <div className="flex justify-between items-center w-full">
            <div>
              <span className="text-white text-lg font-bold">{title}</span>
              <span className="block text-white/90 text-xs mt-1">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
            <CasinoButton>{badge || "PLAY"}</CasinoButton>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function CasinoPage() {
  const [selected, setSelected] = useState("all");
  const filteredCards =
    selected === "all" ? cards : cards.filter((c) => c.category === selected);


  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center mb-16 text-white">
        <h2
          className="text-4xl font-bold mb-4"
          style={{
            textShadow: '0 0 10px #089dff, 0 0 20px #089dff',
          }}
        >
          BE IN CONTROL
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At Modeltheme, we show only the best websites and portfolios built completely with passion,
          simplicity and creativity!
        </p>
      </div>


      <nav className="flex justify-center gap-6 select-none mb-10 w-full max-w-5xl">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`relative overflow-hidden text-white px-7 py-3 font-semibold tracking-wide transition-colors duration-500 whitespace-nowrap group cursor-pointer
              ${selected === key ? "bg-[#ff2463] shadow-lg" : ""}
              `}
            style={{ borderRadius: 0 }}
          >
            {/* Overlay for top-to-bottom fill effect */}
            <span className={`absolute inset-0 bg-[#ff2463] transition-transform duration-500 origin-top
                ${selected === key ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}
              `}></span>
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </nav>
      {/* Grid width full as in your screenshot */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto ">
        {filteredCards.map((card) => (
          <CasinoCard
            key={card.id}
            img={card.img}
            title={card.title}
            category={card.category}
            badge={card.badge}
          />
        ))}
      </main>
      <div className="mt-20 ">
        <CasinoButton>BROWSE ALL MATCHES</CasinoButton>
      </div>
    </div>
  );
}