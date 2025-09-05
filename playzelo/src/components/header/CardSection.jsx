import React from 'react';
import Slider from "react-slick";

import image1 from '../../assets/images/01.png'; 
import image2 from '../../assets/images/02.png'; 
import image3 from '../../assets/images/03.png'; 
import image4 from '../../assets/images/02.png'; // ✅ added because you used image4

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    {
      image: image4,
      title: "FAST DELIVERY",
      description: "On-time delivery with best quality to satisfy all customer needs and expectations.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <style>{`
        .card-container {
          background-color: #26293A;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          border: 2px solid transparent;
          margin: 0 1rem;
          position: relative;
        }
        .card-container:hover {
          box-shadow: 0 15px 30px rgba(255, 58, 90, 0.4);
          cursor: pointer;
        }

        .card-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1rem;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
          pointer-events: none;
        }
        .card-container:hover::after {
          border-color: #FE3A5A;
        }

        .slick-slide > div {
          padding: 0 10px;
        }

        .slick-prev:before,
        .slick-next:before {
          color: #ff0000;
          font-size: 20px;
          line-height: 40px;
        }
        
        .slick-prev, .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          opacity: 1;
        }

        .slick-prev:hover, .slick-next:hover {
          background-color: #f0f0f0;
        }

        .slick-prev {
          left: calc(50% - 30px);
          bottom: -70px;
          top: auto;
          transform: translateX(-50%);
        }
        
        .slick-next {
          right: calc(50% - 30px);
          bottom: -70px;
          top: auto;
          transform: translateX(50%);
        }

        .slick-dots {
          display: none !important;
        }
        
        @media (max-width: 640px) {
          .slick-prev, .slick-next {
            display: none !important;
          }
        }
      `}</style>
      <section className="bg-[#171822] py-10 px-4 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-10">Our Services</h2>
        <div className="max-w-7xl w-full relative mb-16">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index}>
                <div className="card-container">
                  <div className="w-full h-40 flex items-center justify-center mb-6">
                    <img src={card.image} alt={card.title} className="h-32 object-contain mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CardSection;
