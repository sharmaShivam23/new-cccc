import React from "react";
import { useState, useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Faculty from "./Faculty";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import Splash from "./Splash";
import Contact from "./Contact";
import Events from "./Events";
import { Motion } from "./Motion";
import {TeamCards} from "./TeamCards";
import Carousel from "./Carousel";
import Footer from "./Footer";


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
// 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    },4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <Splash />
      ) : (
        <>
          <Motion/>
        <div className="flex justify-center items-center p-4 pt-0 flex-col overflow-hidden">
          {/* <Navbar /> */}
          <Footer></Footer>
          <Landing />
          <About />
          <Faculty />
          <Events/>
          <Carousel/>
          <Contact/>
          <TeamCards/>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
