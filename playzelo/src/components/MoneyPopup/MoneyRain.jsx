import React, { useEffect } from "react";
 import './MoneyRain.css';
export default function MoneyRain() {
  useEffect(() => {
    const moneyRainContainer = document.getElementById("moneyRain");
 
    const interval = setInterval(() => {
      if (!moneyRainContainer) return;
 
      const note = document.createElement("div");
      note.classList.add("money-note");
      note.innerText = "💵";
      note.style.position = "absolute";
 
      // Random horizontal position across full viewport width
      note.style.left = `${Math.random() * 100}vw`;
 
      // Random animation duration between 2s and 4s
      note.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
 
      // Random horizontal start offset (optional for slight side movement)
      note.style.transform = `translateX(${(Math.random() - 0.5) * 50}px)`;
 
      moneyRainContainer.appendChild(note);
 
      // Remove after animation duration (max 4s + some buffer)
      setTimeout(() => {
        note.remove();
      }, 4000);
    }, 200);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div
      _id_="moneyRain"
      _style_={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
      }}
    ></div>
  );
}