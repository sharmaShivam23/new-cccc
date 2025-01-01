


import React, { useState, useEffect } from "react";
import "./App.css";
import Splash from "./components/Splash";
import Contact from "./components/Contact";
import { Events } from "./components/Events";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
// import Contact from "./components/Contact";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Register } from "./components/Register";

 
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  
  // const location = useLocation();
 
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
          <Route path="/Register" element={<Register />} />
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



// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Splash from "./components/Splash";
// import Contact from "./components/Contact";
// import { Events } from "./components/Events";
// import Home from "./components/Home";
// import { TeamCards } from "./components/TeamCards";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";
// import { motion } from "framer-motion"; 


// const AnimatedRoutes = () => {
//   const location = useLocation(); 
  
 
//   const pageVariants = {
//     initial: {
//       opacity: 0, 
//       y : "10%",
//       Scale  : 0
//     },
//     in: {
//       opacity: 1,
//       y : "0%",
//       Scale: 1, 
//     },
//     out: {
//       opacity: 0,
//       y : "10%",
//       Scale : 0
//     },
//   };

//   const pageTransition = {
//     type: "spring",
//     stiffness: 50,
//     damping: 25,
//   };

//   return (
//     <motion.div
//       key={location.key} 
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//       style={{ position: "relative", width: "100%", height: "100%" }}
//     >
//       <Routes location={location}>
//         <Route path="/" element={<Home />} />
//         <Route path="/Events" element={<Events />} />
//         <Route path="/TeamCards" element={<TeamCards />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </motion.div>
//   );
// };

// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 4000); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       {isLoaded ? (
//         <>
//           <AnimatedRoutes />
//           <Navbar />
//           <Footer />
//         </>
//       ) : (
//         <Splash />
//       )}
//     </Router>
//   );
// };

// export default App;
