import { useState } from "react";
import { ArrowPathIcon, PlusIcon, ClockIcon } from "@heroicons/react/24/solid";
import Footer from "../../components/depositComponents/Footer";

export default function WalletUI() {
  const [mockMode, setMockMode] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [amount, setAmount] = useState(1000);
  const upiId = "23334456";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(upiId)
      .then(() => {
        alert("UPI ID copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const channelOptions = [
    { name: "UPI-QR", range: "₹100 - 50,000", icon: "📱" },
    { name: "Local UPI", range: "₹200 - 30,000", icon: "🏦" },
    { name: "ARPay", range: "₹300 - 50,000", icon: "📂" },
    { name: "E-Wallet", range: "₹500 - 1,00,000", icon: "💳" },
    { name: "UPI × QR", range: "₹100 - 50,000", icon: "🔲" },
    { name: "Paytm × QR", range: "₹200 - 20,000", icon: "📷" },
    { name: "USDT-TRC20", range: "₹10 - 99,999", icon: "₿" },
  ];

  const presetAmounts = [100, 300, 400, 500, 900, 1000, 1500, 4000, 5000];

  return (
    <div className="min-h-screen bg-[#0B1429] text-white px-4 sm:px-6 lg:px-12 py-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-xl font-bold">PlayZelo · Wallet</h1>
                  <p className="text-white/60 text-sm">Deposit · Casino-grade UI</p>
                </div>
                <div className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ENV: <span className="text-white/90 font-bold">Stage</span>
                </div>
              </div>
      
              <div className="flex items-center gap-4">
                {/* Toggle */}
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={mockMode}
                    onChange={() => setMockMode(!mockMode)}
                  />
                  <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-purple-900 relative transition-colors duration-300">
                    <div
                      className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${
                        mockMode ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>
                  <span className="ml-3 text-sm text-white/70">Mock Mode</span>
                </label>
      
                {/* Refresh Button */}
                <button className="flex items-center gap-1 px-3 py-1 border border-white/10 rounded-md text-sm font-semibold hover:bg-white/10 transition">
                  <ArrowPathIcon className="w-4 h-4" />
                  Refresh
                </button>
              </div>
          </div>

      {/* Balance Card */}
      <div className="bg-[#0F223C] rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-white/70">Balance</p>
          <h2 className="text-4xl font-extrabold mt-1">₹ 391.00</h2>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 transition">
            <PlusIcon className="w-4 h-4" />
            Add ₹100 (demo)
          </button>
          <button className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 transition">
            <ClockIcon className="w-4 h-4" />
            History
          </button>
        </div>
      </div>

      {/* Deposit Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Channel Selection */}
        <div className="bg-[#0F223C] rounded-2xl p-4 sm:p-6 w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold">Select channel</h3>
            <span className="bg-[#192a45] px-3 py-1 rounded-full text-xs sm:text-sm text-white/60">
              Min: ₹100 • Max: ₹50,000
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channelOptions.map((option) => (
              <div
                key={option.name}
                className={`flex items-center gap-4 bg-gradient-to-br from-[#1a2540] to-[#10182b] border ${
                  option.name === "E-Wallet"
                    ? "border-purple-500"
                    : "border-[#232c44]"
                } rounded-xl px-4 py-5 cursor-pointer hover:border-purple-500 transition`}
              >
                <div className="flex items-center justify-center w-11 h-12 rounded-lg bg-[#2d3a5a]">
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-lg">{option.name}</div>
                  <div className="text-sm text-white/60">{option.range}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-2 text-white/70 mt-6 text-sm whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              <span className="text-sm">
                Do not reuse a QR for multiple payments. Each request generates
                a unique UPI ID.
              </span>
            </div>
          </div>
        </div>

        {/* Deposit Amount */}
        <div className="bg-[#0F223C] rounded-2xl p-6 w-full lg:w-1/2 relative">
          <div className="absolute right-4 top-4 bg-white/10 px-3 py-1 rounded-full text-sm">
            E-Wallet
          </div>

          <h3 className="text-lg font-semibold mb-4">Deposit amount</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelectedAmount(amt);
                  setAmount(amt);
                }}
                className={`py-3 rounded-md ${
                  selectedAmount === amt
                    ? "bg-white/10 border border-purple-500"
                    : "bg-transparent border border-white/10 hover:bg-white/5"
                }`}
              >
                ₹ {amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Manual Amount Input */}
          <div className="flex items-center border border-white/10 rounded-md overflow-hidden mb-2">
            <span className="px-3 text-white">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Enter amount"
            />
            <button
              className="px-4 text-white bg-transparent hover:bg-white/10"
              onClick={() => setAmount("")}
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-white/60 mb-4">
            Fee: ₹15.00 • Supports multiple banks
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                const randomAmount = console.log(
                  "Amount must be between 100 to 50000"
                );
                setAmount(randomAmount);
                setSelectedAmount(null);
                alert(`Generated amount: ₹${randomAmount}`);
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 3a1 1 0 011-1h2a1 1 0 110 2H5v2a1 1 0 11-2 0V4a1 1 0 011-1zm10 0a1 1 0 011-1h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 13a1 1 0 100 2h2a1 1 0 100-2H4zm10 0a1 1 0 100 2h2a1 1 0 100-2h-2z" />
              </svg>
              Generate UPI QR
            </button>

            <button
              onClick={handleCopy}
              className="border border-white/10 px-4 py-2 rounded-md hover:bg-white text-black font-bold"
            >
              📋 Copy UPI ID
            </button>

            <button className="border border-white/10 px-4 py-2 rounded-md hover:bg-white text-black font-bold">
              ℹ️ Rules
            </button>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
 
);
}