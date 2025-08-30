import React, { useState, useEffect } from "react";

const WithdrawalPage = () => {
  const [balance, setBalance] = useState(12450.0);
  const [pending, setPending] = useState(1200.0);
  const [recent, setRecent] = useState([
    { id: "W-20250810-001", amt: 500, status: "done" },
    { id: "W-20250809-097", amt: 1200, status: "pending" },
    { id: "W-20250808-084", amt: 3000, status: "done" },
    { id: "W-20250806-073", amt: 150, status: "rej" },
  ]);
  const [autoUPI, setAutoUPI] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState(null);
  const [fee, setFee] = useState(0);
  const [credit, setCredit] = useState(0);
  const [toast, setToast] = useState("");

  const fmt = (n) =>
    Number(n).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  useEffect(() => {
    const amt = Number(amount || 0);
    let f = 0;
    if (!method) f = 0;
    else if (method === "upi") f = Math.max(5, Math.round(amt * 0.006));
    else if (method === "bank") f = Math.round(amt * 0.01);
    else if (method === "wallet") f = 0;
    else if (method === "cheque") f = Math.round(amt * 0.015);

    if (amt <= 0) f = 0;
    setFee(f);
    setCredit(Math.max(0, amt - f));
  }, [amount, method]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const quickSelect = (amt) => {
    setAmount(amt);
  };

  const handleSubmit = () => {
    const amt = Number(amount || 0);
    if (!amt || amt <= 0) return showToast("Enter a valid amount");
    if (amt > balance - pending)
      return showToast("Insufficient available balance");
    if (!method) return showToast("Select a payout method");

    if (
      !window.confirm(
        `Confirm withdrawal of ₹${fmt(
          amt
        )}. Amount to be credited: ₹${fmt(credit)}.`
      )
    )
      return;

    const txnId =
      "W-" +
      new Date().toISOString().slice(0, 10).replace(/-/g, "") +
      "-" +
      Math.floor(Math.random() * 900 + 100);

    setRecent([{ id: txnId, amt, status: "pending" }, ...recent]);
    setPending(pending + amt);
    setBalance(balance - amt);
    showToast("Withdrawal requested. Txn: " + txnId);

    setTimeout(() => {
      setRecent((prev) =>
        prev.map((r) =>
          r.id === txnId ? { ...r, status: "done" } : r
        )
      );
      setPending((p) => Math.max(0, p - amt));
    }, 6000);
  };

  const resetForm = () => {
    setAmount("");
    setMethod(null);
    setFee(0);
    setCredit(0);
  };

  const downloadCSV = () => {
    let csv = "Txn ID,Amount,Status\n";
    recent.forEach((r) => (csv += `${r.id},${r.amt},${r.status}\n`));
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "withdrawals_statement.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Statement downloaded");
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-[#071028] via-[#071220] to-[#06111a] text-[#eaf2ff] font-[Outfit] p-6">
      {/* Watermark */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] opacity-5 pointer-events-none select-none z-0">
        <img
          src="assets/logo/logo2.png"
          alt="watermark"
          className="w-[760px] grayscale"
        />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#12233a] flex items-center justify-center shadow-lg overflow-hidden">
            <img src="assets/logo/logo2.png" alt="logo" className="w-10" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Withdraw Funds</h1>
            <p className="text-sm text-white/55">
              Secure, fast withdrawals — payout to bank, UPI or Wallet.
            </p>
          </div>
          <div className="ml-auto bg-[#0b1220] rounded-lg px-3 py-1 text-xs text-white/55">
            Account: <strong>User_12345</strong>
          </div>
        </header>

        {/* Grid */}
        <section className="grid md:grid-cols-[1fr_420px] gap-6">
          {/* Left card */}
          <div className="bg-white/5 rounded-xl p-5 shadow-lg border border-white/5">
            <h3 className="text-lg font-semibold mb-4">Request Withdrawal</h3>

            {/* Balance */}
            <div className="flex justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
              <div>
                <div className="text-sm">Available Balance</div>
                <div className="text-xl font-bold">₹ {fmt(balance)}</div>
              </div>
              <div>
                <div className="text-sm">Pending</div>
                <div className="text-base">₹ {fmt(pending)}</div>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Withdrawal Amount</label>
              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 bg-[#0b1220] border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                />
                <div className="flex gap-2">
                  {[100, 500, 1000].map((v) => (
                    <button
                      key={v}
                      onClick={() => quickSelect(v)}
                      className="px-3 py-1 rounded-lg border border-dashed border-white/10 text-xs text-white/55 hover:text-white hover:border-white/30"
                    >
                      ₹{v}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Methods */}
            <div>
              <label className="block text-sm">Payout Method</label>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {[
                  {
                    key: "bank",
                    title: "Bank Transfer",
                    desc: "NEFT/IMPS — usually 1-3 business days",
                    icon: "bi bi-bank",
                  },
                  {
                    key: "wallet",
                    title: "PlayZelo Wallet",
                    desc: "Instant and free — withdraw to bank anytime",
                    icon: "bi bi-wallet2",
                  },
                  {
                    key: "upi",
                    title: "UPI",
                    desc: "Instant (subject to bank) — min ₹10",
                    icon: "bi bi-phone",
                  },
                  {
                    key: "cheque",
                    title: "Cheque",
                    desc: "By request — slower, optional",
                    icon: "bi bi-file-earmark-person",
                  },
                ].map((m) => (
                  <div
                    key={m.key}
                    onClick={() => setMethod(m.key)}
                    className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition border-2 ${
                      method === m.key
                        ? "border-blue-500 bg-[#1c2439]"
                        : "border-transparent bg-[#0f172a] hover:bg-[#1e293b]"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-md bg-[#1e293b] flex items-center justify-center text-xl text-blue-400">
                      <i className={m.icon}></i>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{m.title}</div>
                      <div className="text-xs text-slate-400">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Method specific */}
            <div className="flex flex-col gap-3 mt-4">
              {method === "bank" && (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-300">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name as per bank"
                      className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-300">
                      Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234567890"
                      className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-300">IFSC Code</label>
                    <input
                      type="text"
                      placeholder="HDFC0001234"
                      className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                    />
                  </div>
                </>
              )}

              {method === "upi" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-300">UPI ID</label>
                  <input
                    type="text"
                    placeholder="example@upi"
                    className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                  />
                </div>
              )}

              {method === "wallet" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-300">Wallet ID</label>
                  <input
                    type="text"
                    placeholder="Enter Wallet ID"
                    className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                  />
                </div>
              )}

              {method === "cheque" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-300">Name on Cheque</label>
                  <input
                    type="text"
                    placeholder="Enter name on cheque"
                    className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
                  />
                </div>
              )}
            </div>

            {/* Fee */}
            <div className="mt-4 text-sm">
              <div>Estimated Fee: ₹ {fmt(fee)}</div>
              <div>Amount to be Credited: ₹ {fmt(credit)}</div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold px-4 py-2 rounded-lg"
                >
                  Request Withdrawal
                </button>
                <button
                  onClick={resetForm}
                  className="border border-white/10 px-4 py-2 rounded-lg"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col">
            {/* Quick actions */}
            <div className="bg-[#0c1222] rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Quick Actions</h3>
                <span className="text-xs text-white/60">Safe & verified</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-sm">Auto-withdraw to UPI</span>
                <button
                  onClick={() => {
                    setAutoUPI(!autoUPI);
                    showToast(
                      "Auto UPI " + (autoUPI ? "disabled" : "enabled")
                    );
                  }}
                  className="px-3 py-1 border border-white/20 rounded-lg text-sm hover:bg-white/10"
                >
                  {autoUPI ? "Disable" : "Enable"}
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-sm">Download Statement</span>
                <button
                  onClick={downloadCSV}
                  className="px-3 py-1 border border-white/20 rounded-lg text-sm hover:bg-white/10"
                >
                  Download
                </button>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Contact Support</span>
                <button className="px-3 py-1 border border-white/20 rounded-lg text-sm hover:bg-white/10">
                  Open
                </button>
              </div>
            </div>

            {/* Recent Withdrawals */}
            <div className="bg-white/5 rounded-xl p-4 shadow-lg border border-white/5 mb-4">
              <h5 className="text-sm font-semibold mb-2">
                Recent Withdrawals
              </h5>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="text-white/55">
                    <th className="text-left py-2 px-1">Txn ID</th>
                    <th className="text-left py-2 px-1">Amt</th>
                    <th className="text-left py-2 px-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((r) => (
                    <tr key={r.id} className="border-t border-white/5">
                      <td className="py-2 px-1">{r.id}</td>
                      <td className="py-2 px-1">₹ {fmt(r.amt)}</td>
                      <td className="py-2 px-1">
                        <span
                          className={`px-2 py-1 rounded-md text-[11px] font-semibold ${
                            r.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : r.status === "done"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {r.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Limits */}
            <div className="bg-white/5 rounded-xl p-4 border-l-4 border-neutral-800 text-sm">
              <div className="font-semibold">Payout Limits</div>
              <div className="text-xs text-white/55">Per day / Per txn</div>
              <div className="mt-2">Min withdrawal: ₹10</div>
              <div>Max per txn: ₹50,000</div>
              <div>Daily limit: ₹2,00,000</div>
            </div>
          </aside>
        </section>

        {/* Notes */}
        <div className="mt-5 bg-blue-500/10 border-l-4 border-neutral-800 rounded p-4">
          <div className="flex items-center font-semibold text-sm mb-2">
            <i className="bi bi-info-circle mr-2"></i>
            Important Withdrawal Notes
          </div>
          <ul className="list-disc pl-5 text-xs text-white/80 space-y-1">
            <li>
              All withdrawals are subject to KYC verification and fraud checks.
            </li>
            <li>
              Bank transfers may take 1–3 business days. UPI is usually instant.
            </li>
            <li>
              Fees may apply depending on payout method (shown before confirm).
            </li>
          </ul>
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed right-5 bottom-5 bg-gradient-to-b from-[#0b1220] to-[#071428] px-4 py-2 rounded-lg shadow-lg border border-white/5 text-sm">
          {toast}
        </div>
      )}
    </div>
  );
};

export default WithdrawalPage;