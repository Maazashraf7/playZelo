import React from "react";
 
const cards = [
  {
    title: "Secure",
    description: "Every deposit request gets a unique reference and UPI ID. We verify UTR to mark payment ",
    highlight: "PAID.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.5-3.1 9-5.7 9-10V5l-9-3-9 3v7c0 4.3 3.5 6.9 9 10z" />
      </svg>
    ),
  },
  {
    title: "Instant",
    description: "Most payments confirm in under 60s. You can also submit UTR manually if your bank app did not return to the site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Support",
    description: "Any issue? Contact support with your Order ID & UTR. Never share your OTP/PIN.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4h1a3 3 0 003-3v-5a3 3 0 00-3-3h-1M6 14v4H5a3 3 0 01-3-3v-5a3 3 0 013-3h1m0 0V5a3 3 0 013-3h4a3 3 0 013 3v3M9 20h6" />
      </svg>
    ),
  },
];
 
const Footer = () => {
  return (
    <div className="bg-[#0D111C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111827] p-2 rounded-lg border border-[#1F2937] flex items-start gap-4"
          >
            <div className="sm:text-sm md:text-xl">{card.icon}</div>
            <div>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-gray-300">
                {card.description}
                {card.highlight && <span className="text-white font-semibold">{card.highlight}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Footer; 