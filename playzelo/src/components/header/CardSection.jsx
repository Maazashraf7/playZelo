import React from 'react';



import image1 from '../../assets/images/01.png'; 
import image2 from '../../assets/images/02.png'; 
import image3 from '../../assets/images/03.png'; 

const CardSection = () => {
  const cardData = [
    {
      image: image1,
      title: "ADVICE AND GUIDE",
      description: "Holistically underwhe fully researched deliverables for revoluonuary sourcess skills and technically sound",
    },
    {
      image: image2,
      title: "GREAT SOLUTIONS",
      description: "Holistically underwhe fully researched deliverables for revoluonuary sourcess skills and technically sound",
    },
    {
      image: image3,
      title: "SUPPORT IN PERSON",
      description: "Holistically underwhe fully researched deliverables for revoluonuary sourcess skills and technically sound",
    },
  ];

  return (
    <>
    <style>
        {`

.bg-darkPurple {
  background-color: #171822;
}

body {
  font-family: 'Poppins', sans-serif;
}

.card-container {
  background-color: #26293A;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.card-container:hover {
  transform: translateY(-5px);
  border-color: #FE3A5A;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
        `}
    </style>
    <section className="bg-darkPurple text-white py-16 px-4 min-h-screen flex items-center justify-center">
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card-container flex flex-col items-center text-center p-8 rounded-2xl w-full max-w-sm"
          >
            <div className="w-full h-40 flex items-center justify-center mb-6">
              <img
                src={card.image}
                alt={card.title}
                className="h-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default CardSection;