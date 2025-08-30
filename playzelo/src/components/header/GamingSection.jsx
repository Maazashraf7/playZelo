import React from 'react';

// You will need to replace these with your actual image paths
import paymentImage from '../../assets/images/jaqport/04.jpg';
import greatSolutionsImage from '../../assets/images/jaqport/05.jpg';
import supportInPersonImage1 from '../../assets/images/jaqport/06.jpg';
import supportInPersonImage2 from '../../assets/images/jaqport/07.jpg';

// Card Component nested inside GamingSection
const Card = ({ title, description, image, altText }) => {
  return (
    <div className="w-full">
      <div className="bg-[#10143a] p-8 rounded-[20px] text-center text-white game__item item-layer">
        <div className="flex justify-center items-center mb-6">
          <img src={image} alt={altText} className="max-h-[150px] w-auto" />
        </div>
        <div className="px-4">
          <h4 className="text-xl font-bold mb-2">
            <a href="#">{title}</a>
          </h4>
          <p className="text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const GamingSection = () => {
  const cardData = [
    {
      title: 'PAYMENT LIMITATION',
      description: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
      image: paymentImage,
      altText: 'Casino roulette wheel'
    },
    {
      title: 'GREAT SOLUTIONS',
      description: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
      image: greatSolutionsImage,
      altText: 'Slot machine'
    },
    {
      title: 'SUPPORT IN PERSON',
      description: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
      image: supportInPersonImage1,
      altText: 'Casino hand'
    },
    {
      title: 'SUPPORT IN PERSON',
      description: 'Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound',
      image: supportInPersonImage2,
      altText: 'Support desk'
    },
  ];

  return (
    <>
    <style>
        {`
        .game__item.item-layer {
  position: relative;
  z-index: 1;
}

.game__item.item-layer::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 3px;
  background: linear-gradient(to right, #452445, #552763, #35339d, #272147);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
        `}
    </style>
     <section className="py-24" style={{ background: '#0b0f2a' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ textShadow: '0 0 10px #089dff, 0 0 20px #089dff' }}>
            BE IN CONTROL
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Modeltheme, we show only the best websites and portfolios built completely with passion,
            simplicity and creativity!
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              altText={card.altText}
            />
          ))}
        </div>
      </div>
    </section>

    </>
   
  );
};

export default GamingSection;