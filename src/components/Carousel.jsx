import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Carousel = () => {
 
  const obj = [
    {
      img : null,
      name : "shivam",
      surName : "sharma",
      designation : "jdndnd"
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // beforeChange: (current, next) => {
    //   setIsAnimating(true);
    //   setTimeout(() => setIsAnimating(false), 1000);
    //   setActiveSlide(next);
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10 mb-20 items-center bg-yellow-100 justify-center w-1/2 md:w-full mx-auto md:px-8 lg:px-16 relative">
   

      {/* Carousel */}
      <Slider {...settings}>
        {obj.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 shadow-lg rounded-lg transform transition-transform `}
          >
            {/* Image Section */}
            <div className="img w-40 h-40 md:w-64 md:h-80 flex-shrink-0  rounded-lg overflow-hidden shadow-md relative">
              <img
                src={card.img}
                className="object-cover w-full h-full"
                alt={`${card.name} ${card.surName}`}
              />
              {/* Active Slide Data */}

                <div
                  className={`absolute bottom-0 left-0 w-full [text-shadow:0_0_10px_black] bg-gradient-to-t from-[rgb(7,11,25)] to-transparent text-white py-2 text-center transition-opacity `}
                >
                  <h2 className="text-lg font-bold sm:text-sm md:text-base">
                    {card.name} {card.surName}
                  </h2>
                  <p className="text-sm sm:text-sm md:text-md">
                    {card.designation}
                  </p>
                </div>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
