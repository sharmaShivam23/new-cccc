import React from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import CCC from "../images/CCC.png";
import { FiChevronDown } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
export const Motion = () => {
  return (
    <div className="z-50">
      <Sidebar />
      {/* <ExampleContent/> */}
      <ResNavbar />
      <Social />
    </div>
  );
};

const Sidebar = () => {
  const handle = () => {
    setOpen(true);
  };

  const handles = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <motion.nav
      layout
      onHoverStart={handle}
      onHoverEnd={handles}
      className={`z-50 fixed  top-2 h-[95.7vh] hidden cursor-pointer sm:block  border-r-2 shrink-0 border-violet-800 bg-black p-3`}
      style={{ width: open ? "235px" : "fit-content" }}
    >
      <TitleSection open={open} />
      <div className="space-y-1">
        <Option
          to="#"
          Icon={FaHome}
          title="Home"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="#team"
          Icon={FaPeopleGroup}
          title="Team"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="#events"
          Icon={MdEmojiEvents}
          title="Events"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          to="#achievements"
          Icon={GiAchievement}
          title="Achievements"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs="1"
        />
        <Option
          to="#contact"
          Icon={FaPhoneVolume}
          title="Contact"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ to, Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <>
      <motion.button
        layout
        onClick={() => setSelected(title)}
        className={` z-50 relative flex h-16 w-full items-center rounded-md  transition-colors ${
          selected === title
            ? "bg-white"
            : "hover:text-black text-white hover:bg-purple-700"
        }`}
      >
        <motion.div
          layout
          className="grid h-full text-3xl  w-10 place-content-center "
        >
          <Icon />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-lg ml-2 font-semibold"
          >
            {title}
          </motion.span>
        )}
        <a href={to} className="absolute inset-0"></a>
        {notifs && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{ transform: "translateY(-50%)" }}
            className="absolute right-2  size-4 ronded bg-indigo-500 text-xs animate-bounce font-bold  text-white top-7"
          >
            {notifs}
          </motion.span>
        )}
        {/* {notifs && open && (
        <motion.span initial ={{scale : 0 , opacity : 0}} animate={{opacity : 1 , scale : 1}} transition={{delay : 0.5}} style={{transform : "translateY(-50%)"}} className='absolute right-2  size-4 ronded bg-indigo-500 text-xs text-white top-7'>
          {notifs}
        </motion.span>
      )} */}
      </motion.button>
    </>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className=" z-50 mb-3 border-b border-violet-600 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors ">
        {/* <Logo/> */}
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-white"
            >
              <span className="block text-xs font-bold ">
                Cloud Computing Cell
              </span>
              <span className="block text-xs text-slate-600 font-bold">
                Think Develop Deploy
              </span>
            </motion.div>
          )}
        </div>
        {open && (
          <FiChevronDown className="text-white mr-2 text-xl font-bold" />
        )}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <>
      <motion.div layout>
        <img
          src={CCC}
          className={`h-12 z-50 ${open ? "animate-slideo" : ""}`}
          alt=""
        />
      </motion.div>
    </>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="text-white absolute bottom-0 left-0 right-0 border-t border-violet-600 transition-colors"
    >
      <div className="flex items-center p-2">
        <div className="grid size-10 place-center text-lg">
          <FaAnglesLeft
            className={` font-bold text-xl transition-transform mt-3 ${
              open && "rotate-180"
            }`}
          />
        </div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-lg font-bold  text-white"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

// const ExampleContent = () => <div className='h-[100vh] bg-red-800 w-full'></div>

const ResNavbar = () => {
  return (
    <div className="block sm:hidden fixed left-0 w-full bottom-0 z-50 border-t-2 border-violet-800">
      <div className="icons flex text-white bg-black h-16 justify-evenly items-center text-2xl">
        <motion.div
          initial={{ x: -80, rotate: 360 }}
          whileInView={{ x: 0, rotate: 0 }}
          transition={{ duration: 3 }}
        >
          <img src={CCC} className="h-10" alt="" />
        </motion.div>
        <div className="border-r border-violet-600 h-full pb-3 mt-3 mb-3"></div>
        {/* <div className='border-white border-2 m-1 h-full'></div> */}
        <a href="#">
          <FaHome className="hover:scale-110" />
        </a>
        <a href="#team">
          <FaPeopleGroup />
        </a>
        <a href="#events">
          <MdEmojiEvents />
        </a>
        <a href="#contact">
          <GiAchievement />
        </a>
        <a href="#achievements">
          <FaPhoneVolume />
        </a>
      </div>
    </div>
  );
};



const Social = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className="bg-black text-white hidden  fixed w-16 h-[95.7vh] border-l-2 border-violet-700 mt-2 right-0 top-0 sm:flex justify-center items-center flex-col gap-10 text-4xl cursor-pointer z-50">
      <a href="#">
        <FaSquareInstagram className="cursor-pointer    hover:text-orange-500 relative hover:scale-125 transition-all duration-1000 ease-in-out delay-0"  onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} />
        <div
          className={`${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <div
            className={`absolute right-20 top-52 bg-white text-lg text-red-500 font-bold font-serif p-2 rounded-xl  px-10`}
          >
            Instagram
          </div>
          <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[550px] right-[74px]"></div>
        </div>
      </a>
      <a href="#team">
        <FaSquareTwitter className="cursor-pointer hover:text-blue-700 relative hover:scale-125 transition-all duration-1000 ease-in-out delay-0"  onMouseEnter={() => setIsHovered2(true)} 
                onMouseLeave={() => setIsHovered2(false)} />
        <div
          className={`${
            isHovered2 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <div
            className={`absolute right-20 top-80 bg-white text-lg text-black font-bold font-serif p-2 rounded-xl  px-10`}
          >
            Twitter
          </div>
          <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[470px] right-[74px]"></div>
        </div>
      </a>
      <a href="#events">
        <FaLinkedin className="cursor-pointer relative hover:text-blue-500 hover:scale-125 transition-all duration-1000 ease-in-out delay-0" onMouseEnter={() => setIsHovered3(true)} 
                onMouseLeave={() => setIsHovered3(false)} />
        <div 
           className={`${
            isHovered3 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <div 
            className={`absolute right-20 top-96 bg-white text-lg text-blue-800 font-serif font-bold p-2 rounded-xl  px-10`}
          >
            Linkedln
          </div>
          <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[406px] right-[74px]"></div>
        </div>
      </a>
      <a href="#contact">
        <FaFacebook className="hover:text-blue-600"/>
      </a>
      <a href="#achievements">
        <IoLogoYoutube className="hover:text-red-600"/>
      </a>
    </div>
  );
};
