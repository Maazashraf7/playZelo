BalanceCard.jsx
import React from "react";
 
export default function BalanceCard({ balance, onAdd100, onShowHistory }) {
  return (
    <div className="wallet-card p-3 p-md-4 mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <div className="soft">Balance</div>
          <div className="wallet-balance">₹ {balance?.toFixed(2)}</div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-sm btn-outline-light" onClick={onAdd100}>
            <i className="bi bi-plus-circle"></i> Add ₹100 (demo)
          </button>
          <button
            className="btn btn-sm btn-outline-light"
            onClick={onShowHistory}
          >
            <i className="bi bi-clock-history"></i> History
          </button>
        </div>
      </div>
    </div>
  );
}