import React from 'react';
 
const data = [
  {
    title: 'PAYMENT LIMITATION',
    img: '/images/04.png',
    desc: 'Holisticly underwhe fully researched deliverables for revolutionary sourcess skills and technically sound',
  },
  {
    title: 'GREAT SOLUTIONS',
    img: '/images/05.png',
    desc: 'Holisticly underwhe fully researched deliverables for revolutionary sourcess skills and technically sound',
  },
  {
    title: 'SUPPORT IN PERSON',
    img: '/images/06.png',
    desc: 'Holisticly underwhe fully researched deliverables for revolutionary sourcess skills and technically sound',
  },
  {
    title: 'SUPPORT IN PERSON',
    img: '/images/07.png',
    desc: 'Holisticly underwhe fully researched deliverables for revolutionary sourcess skills and technically sound',
  },
];
 
export default function CasinoFeatures() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#10052C] to-[#39184B] flex flex-col items-center justify-center py-8">
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
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Layered white shadows */}
            <div
              className="absolute inset-0 rounded-md pointer-events-none"
              style={{
                zIndex: 0,
                top: '26px',
                left: '26px',
                right: '-26px',
                bottom: '-26px',
                boxShadow: '0 24px 64px 0 rgba(255,255,255,0.13)',
                transition: 'box-shadow 0.2s',
              }}
            />
            <div
              className="absolute inset-0 rounded-md pointer-events-none"
              style={{
                zIndex: 0,
                top: '13px',
                left: '13px',
                right: '-13px',
                bottom: '-13px',
                boxShadow: '0 12px 32px 0 rgba(255,255,255,0.18)',
                transition: 'box-shadow 0.2s',
              }}
            />
            {/* Main Card */}
            <div className="relative bg-[#262C53] rounded-md flex items-center shadow-lg px-6 py-8 z-10 transition-all duration-200 group-hover:shadow-2xl group-hover:scale-[1.03]">
              <div className="flex-shrink-0 mr-6">
                <img src={item.img} alt="" className="w-48 h-48 object-contain" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </h2>
                <p className="text-white text-lg leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
