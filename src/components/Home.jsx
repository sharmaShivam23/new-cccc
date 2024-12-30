import React from "react";
import { useState, useEffect } from "react";
import About from "./About";
import Team from "./Team";
import Faculty from "./Faculty";
import Splash from "./Splash";
import Contact from "./Contact";
import { TeamCards } from "./TeamCards";
import Carousel from "./Carousel";
import Landing from "./Landing";
import Number from "./Number";
import Map from "./Map";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { Alumni } from "./Alumni";
import MyComponent from "./MyComponent";

const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="flex justify-center  items-center p-4 pt-0 flex-col overflow-hidden">
          <Landing></Landing>
          {/* <MyComponent /> */}
          <About />
          <Faculty />
          <Team />
          <Carousel />
          <Number />
          <Alumni />
          <Map />
        </div>
      </>
    </div>
  );
};

export default Home;
