import { useState } from "react";
import { ArrowPathIcon, PlusIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function WalletUI() {
  const [mockMode, setMockMode] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [amount, setAmount] = useState(1000);

  //  const presetAmounts = [100, 500, 1000, 2000];
  // const [amount, setAmount] = useState("");
  // const [selectedAmount, setSelectedAmount] = useState(null);
  const upiId = "23334456";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(upiId)
      .then(() => {
        alert("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const channelOptions = [
    { name: "UPI-QR", range: "₹100 - 50,000", icon: "🏦" },
    { name: "Local UPI", range: "₹200 - 30,000", icon: "🏦" },
    { name: "ARPay", range: "₹300 - 50,000", icon: "📂" },
    { name: "E-Wallet", range: "₹500 - 1,00,000", icon: "💳" },
    { name: "UPI × QR", range: "₹100 - 50,000", icon: "🔲" },
    { name: "Paytm × QR", range: "₹200 - 20,000", icon: "📷" },
    { name: "USDT-TRC20", range: "₹10 - 99,999", icon: "📷" },
  ];

  const presetAmounts = [100, 300, 400, 500, 900, 1000, 1500, 4000, 5000];

  return (
    <div className="min-h-screen bg-[#0B1429] text-white px-6 py-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center sm:text-sm md:text-2xl">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold">PlayZelo · Wallet</h1>
            <p className="text-white/60 text-sm">Deposit · Casino-grade UI</p>
          </div>
          <div className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-semibold">
            ENV: <span className="text-white/90 font-bold">Stage</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Toggle */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={mockMode}
              onChange={() => setMockMode(!mockMode)}
            />
            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-purple-600" />
            <span className="ml-2 text-sm text-white/70">Mock Mode</span>
          </label>

          {/* Refresh */}
          <button className="flex items-center gap-1 px-3 py-1 border border-white/10 rounded-md text-sm font-semibold hover:bg-white/10 transition">
            <ArrowPathIcon className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-[#0F223C] rounded-2xl p-6 flex justify-between items-center">
        <div>
          <p className="text-white/70">Balance</p>
          <h2 className="text-4xl font-extrabold mt-1">₹ 791.00</h2>
        </div>
        <div className="flex gap-3">
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
      <div className="flex flex-col md:flex-row gap-6">
        {/* Channel Selection */}
        <div className="bg-[#0F223C] rounded-2xl p-6 md:w-1/2 w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Select channel</h3>
            <span className="sm:text-sm text-white/60">
              Min: ₹500 • Max: ₹1,00,000
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 w-[500px] mx-8 h-auto">
            {channelOptions.map((option) => (
              <div
                key={option.name}
                className={`bg-gradient-to-br from-[#141f33] to-[#0c1423] border ${
                  option.name === "E-Wallet"
                    ? "border-purple-500"
                    : "border-transparent"
                } p-1 rounded-xl cursor-pointer hover:border-purple-500 transition`}
              >
                <div className="text-center justify-left">
                <span className="text-2xl mt-8">{option.icon}</span>
                </div> 
                {/* Name and Range */}
                <div className="text-center">
                  <div className="font-semibold">{option.name}</div>
                  <div className="text-sm text-white/60">{option.range}</div>
                </div>

                <div className="flex items-center p-4 rounded-xl w-full">
                   {/* Left: Image  */}
                  <div className="h-10 flex items-center justify-center mr-4"></div>

                  {/* Right: Text  */}
                  <div className="flex flex-col justify-center">
                    <span className="text-white font-semibold leading-tight py-3">
                      Paytm × QR
                    </span>
                    <span className="text-white/60 text-sm leading-tight">
                      ₹200 - 20,000
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 

        {/* Deposit Amount */}
        <div className="bg-[#0F223C] rounded-2xl p-6 w-full md:w-1/2 relative">
          <div className="absolute right-4 top-4 bg-white/10 px-3 py-1 rounded-full text-sm">
            E-Wallet
          </div>

          <h3 className="text-lg font-semibold mb-4">Deposit amount</h3>

          <div className="grid grid-cols-3 gap-4 mb-4">
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
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Enter amount"
            />
            <button
              className="px-4 text-white bg-transparent  hover:bg-white/10"
              onClick={() => setAmount("")}
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-white/60 mb-4">
            Fee: ₹15.00 • Supports multiple banks
          </p>

          <div className="flex flex-wrap gap-3">
            {/* <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-md">
              🔳 Generate UPI QR
            </button> */}
            <button
              onClick={() => {
                // const randomAmount = Math.floor(Math.random() * (50000 - 100 + 1)) + 100;
                const randomAmount = console.log(
                  "Amount must be between 100 to 50000"
                );
                setAmount(randomAmount);
                setSelectedAmount(null); // Optional: deselect preset
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
    </div>
  );
}