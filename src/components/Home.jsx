import React from "react";
import { useState, useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Team from "./Team";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import Splash from "./Splash";
import Contact from "./Contact";
import Events from "./Events";


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <div className="m-4">
          {/* <Navbar /> */}
          <Landing />
          <About />
          <Team />
          <Events/>
          <Contact/>
          </div>
          {/* <Contact /> */}
        </>
      )}
    </div>
  );
};

export default Home;
