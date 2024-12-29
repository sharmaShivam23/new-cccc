import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dev from "../EventsImg/dev.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import devclash from '../EventsImg/devclash.png'
import graphicon from '../EventsImg/graphicon.png'
import hacker from '../EventsImg/hacker.png'
import nimbus from '../EventsImg/nimbus.png'
import spocc from '../EventsImg/spocc.png'
export const Event = () => {
  return (
    <>
      <EventCarousel />
      <EventImages />
    </>
  );
};

const EventCarousel = () => {
  return (
    <div className="sm:h-[80vh] sm:mb-20 mb-3 h-[60vh]  w-screen  flex justify-center relative text-center">
      <div className="container mx-auto h-[47rem] w-screen sm:h-[40rem] p-[2rem] relative">
        <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="text-white text-center text-2xl sm:text-5xl mb-20 md:text-6xl underline font-bold"
        >
          Events
        </motion.h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="3"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".forward",
            prevEl: ".backward",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper w-[90%] sm:w-[80%] lg:w-[70%]  relative p-5 h-[30%] sm:h-[80%]"
        >
          {/* Swiper slides */}
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg4"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg7"
            />
          </SwiperSlide> */}

          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 z-50 space-x-0">
            <div className="backward text-white text-3xl z-50 transform rotate-180 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
            <div className="forward text-white text-3xl z-50 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
          </div>

          <div className="swiper-pagination w-[15rem] mx-auto mt-4 z-10"></div>
        </Swiper>
      </div>
    </div>
  );
};

const EventImages = () => {
  return (
    <div className="text-white text-4xl flex flex-col justify-center items-center max-w-[90vw] h-auto">
      <img src={devclash} className="sm:w-[60vw] w-[75vw] sm:m-8 m-4" alt="" />
      <img src={graphicon} className="sm:w-[60vw] w-[75vw] sm:m-8 m-4" alt="" />
      <img src={hacker} className="sm:w-[60vw] w-[75vw] sm:m-8 m-4" alt="" />
      <img src={nimbus} className="sm:w-[60vw] w-[75vw] sm:m-8 m-4" alt="" />
      <img src={spocc} className="sm:w-[60vw] w-[75vw] sm:m-8 m-4" alt="" />
     
    </div>
  );
};
