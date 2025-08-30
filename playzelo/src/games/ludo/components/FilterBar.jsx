import "../../../ludo/pages/LudoPlayZelo.css";


export default function FilterBar() {
  return (
    <div className="filter-bar">
      <button className="all-btn">All</button>
      <button className="regular-btn">
        REGULAR <span style={{ color: "#6b7280", fontSize: "13px" }}>8-10 min game</span>
      </button>
      <button className="dropdown">▼</button>
    </div>
  );
}