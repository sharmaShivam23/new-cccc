// import React from "react";
// import "./App.css";
// import Splash from "./components/Splash";
// import Landing from "./components/About";
// import Home from "./components/Home";
// import { TeamCards } from "./components/TeamCards";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
// import ShimmerButton from "./components/ui/shimmer-button";

// const App = () => {
//   return (
//     <>
//       <Home />
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import "./App.css";
import Splash from "./components/Splash";
import Contact from "./components/Contact";
import { Events } from "./components/Events";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contact from "./components/Contact";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
 
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); // 4 seconds

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
     
      {isLoaded ? (
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/TeamCards" element={<TeamCards />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
          <Navbar />
           <Footer />
          </>
      ) : (
       
        <Splash />
      )}
    </Router>
  );
};

export default App;
