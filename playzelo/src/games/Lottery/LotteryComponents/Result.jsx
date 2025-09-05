import React, { useState } from "react";
 
const LotteryResult = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showResult, setShowResult] = useState(false);
 
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
 
  // Function to generate multiple lottery results dynamically
  const generateResults = (date, count = 50) => {
    const results = [];
    for (let i = 1; i <= count; i++) {
      results.push({
        title: `Lottery #${i}`,
        prize: `₹${(Math.floor(Math.random() * 100000) + 1000).toLocaleString()}`,
        winner: `Winner ${i}`,
      });
    }
    return results;
  };
 
  const handleDateChange = (e) => {
    const chosenDate = e.target.value;
    if (chosenDate >= today) {
      alert("❌ Sirf aaj se pehle ki date select kar sakte ho!");
      setSelectedDate("");
      setShowResult(false);
    } else {
      setSelectedDate(chosenDate);
      setShowResult(true);
    }
  };
 
  const results = showResult ? generateResults(selectedDate, 60) : [];
 
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-950 py-6 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-300 drop-shadow-lg">Lottery Results</h1>
 
      {/* Date Picker */}
      <div className="mb-6 w-full max-w-sm">
        <label className="block mb-2 text-lg font-medium text-blue-200">
          Select Date (Before Today):
        </label>
        <input
          type="date"
          className="w-full border border-blue-600 bg-blue-900 text-blue-100 px-3 py-2 rounded-md shadow-md focus:ring focus:ring-blue-400"
          onChange={handleDateChange}
          value={selectedDate}
          max={today}
        />
      </div>
 
      {/* Show Results */}
      {showResult && (
        <div className="w-full max-w-6xl bg-blue-900 shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-center mb-4 text-blue-200">
            Lottery Results - {selectedDate}
          </h2>
 
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.map((lottery, index) => (
                <div
                  key={index}
                  className="bg-blue-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                >
                  <h3 className="font-bold text-lg mb-2 text-blue-100">{lottery.title}</h3>
                  <p className="text-blue-200 mb-1">
                    <span className="font-medium">Prize:</span> {lottery.prize}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Winner:</span> {lottery.winner}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-blue-300 font-medium mt-4">
              ❌ Result for this date is not available!
            </p>
          )}
        </div>
      )}
    </div>
  );
};
 
export default LotteryResult;