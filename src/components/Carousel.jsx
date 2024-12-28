






import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import web from '../images/web.png';
import ui from '../images/ui.png';
import cloud from '../images/cloud.png';
import app from '../images/app.png';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const data = [
    {
      img: web,
      domain: 'Web Development',
      details: 'Web development is at the heart of creating online presence for individuals, businesses, and organizations alike. It encompasses everything from building simple static pages to complex dynamic websites and web applications that interact with databases and users in real-time. Web developers use various technologies, such as HTML, CSS, JavaScript, and backend frameworks like Node.js, Ruby on Rails, and Django, to craft websites that are not only functional but also visually appealing.',
      from: "#ffaa40",
      to: "#9c40ff",
       height : "[55vh]"
    },
    {
      img: app,
      domain: 'Mobile App Development',
      details: 'Mobile app development has revolutionized how we interact with technology. With millions of mobile devices worldwide, the demand for mobile apps continues to grow. Mobile app developers create applications for platforms like iOS and Android, allowing users to engage with services, content, and functionality on-the-go. From social media platforms to banking apps and games, mobile apps have become an integral part of daily life',
      from: "#00BFBF",
      to: "#1E10FF",
      height : "[55vh]"
    },
    {
      img: ui,
      domain: 'UI/UX Design',
      details: 'UI/UX Design is essential for creating products that users love to interact with. It focuses on the design of user interfaces (UI) and the overall experience (UX) users have when they interact with a product, whether it’s a website or mobile application. The goal of UI/UX design is to ensure that the product is both visually appealing and functional, making it easy for users to navigate and achieve their goals.In todays digital world, user expectations are higher than ever. Companies need to invest in UI/UX design',
      from: "#8A2BE2",
      to: "#7B90EE",
      height : "[800px]"
    },
    {
      img: cloud,
      domain: 'Cloud Computing',
      details: 'Cloud computing is transforming the way businesses operate and deliver services. It allows companies to store data and run applications on remote servers instead of relying on traditional on-site infrastructure. The cloud offers scalable, cost-effective, and flexible solutions that enable businesses to manage and process data more efficiently. Cloud computing also enhances collaboration by enabling teams to access shared resources and work together seamlessly, regardless of location. It has revolutionized industries like ',
      from: "#FF1493",
      to: "#FF6347",
      height : "[800px]"
    },
  ];
  
  return (
    <>
    <div className="max-w-[90vw] m-auto h-[100vh] flex-col text-white flex justify-center items-center overflow-hidden">
    <motion.h1
              initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-white text-center text-2xl sm:text-5xl sm:mb-2 relative top-7 mb-4 md:text-6xl underline font-bold"
            >
              Our Domains
            </motion.h1>
      <div className="max-w-[90vw] m-auto h-[80vh]">
        <Slider {...settings}>
          {data.map((card, index) => (
            <>
            {/* {console.log('Gradient From:', card.from, 'To:', card.to)} */}

            <div
              key={index}
              className="flex w-full justify-center items-center h-[80vh]"
             
              style={{
                background: `linear-gradient(to left, ${card.from}, ${card.to})`,
                zIndex: 100,
              }}
            >
              <div className="sm:flex block justify-center items-center h-full">
                <div className="sm:w-3/6 w-full h-[35vh] sm:h-full flex justify-center items-center">
                  <img src={card.img} alt="" className={`h-40 sm:h-[65vh] animate-bounce`} />
                </div>

                <div className="sm:w-4/6 w-full h-[35vh] text-center flex flex-col justify-center items-center p-9">
                  <p 
                 className="sm:text-5xl text-2xl mb-7 mt-2 font-bold text-white">{card.domain}</p>
                  <motion.p
                    initial={{ opacity: 0, y: 500 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 100,
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="font-bold text-xs sm:text-2xl mb-6 text-white shadow-none"
                  >
                    {card.details}
                  </motion.p>
                </div>
              </div>
            </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Carousel;
