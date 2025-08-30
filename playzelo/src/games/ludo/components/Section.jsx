import TournamentCard from "../LobbyComponent/TornamentCard";
import React from "react";
import "../../../ludo/pages/LudoPlayZelo.css";
 
export default function Section({ title, tournaments }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {tournaments.map((t, i) => (
        <TournamentCard key={i} prize={t.prize} entry={t.entry} />
      ))}
    </div>
  );
}