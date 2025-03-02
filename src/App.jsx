


// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Splash from "./components/Splash";

// import { Events } from "./components/Events";
// import Home from "./components/Home";
// import { TeamCards } from "./components/TeamCards";
// import { BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
// // import Contact from "./components/Contact";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Register } from "./components/Register";
// import { Edevclash } from "./components/Edevclash";
// import {Egraphicon} from "./components/Egraphicon";
// import {Ehackeroverflow} from "./components/Ehackeroverflow";
// import {Enimbus} from "./components/Enimbus";
// import {Espocc} from "./components/Espocc";
// import { Contact } from "./components/Contact";

 
// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
  
  
//   const location = useLocation();
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 4000); // 4 seconds

   
//     return () => clearTimeout(timer);
//   }, []);

  
//     useEffect(() => {
//       if(location.pathname === "Register"){
//         document.title = "404 not found";
  
//       }
//       else {
//         document.title = "Cloud Computing Cell - AKGEC";
//       }
//     },[location])

//   return (
//     <Router>
     
//       {isLoaded ? (
//         <>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Events" element={<Events />} />
//           <Route path="/Team" element={<TeamCards />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/Devclash" element={<Edevclash />} />
//           <Route path="/Graphicon" element={<Egraphicon />} />
//           <Route path="/HackerOverflow" element={<Ehackeroverflow />} />
//           <Route path="/Nimbus" element={<Enimbus />} />
//           <Route path="/Spocc" element={<Espocc />} />
//         </Routes>
//           <Navbar />
//            <Footer />
//           </>
//       ) : (
       
//         <Splash />
//        )} 
//     // </Router>
//   );
// };

// export default App;







import React, { useState, useEffect } from "react";
import "./App.css";
import Splash from "./components/Splash";
import { Events } from "./components/Events";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Register } from "./components/Register";
import { Edevclash } from "./components/Edevclash";
import { Egraphicon } from "./components/Egraphicon";
import { Ehackeroverflow } from "./components/Ehackeroverflow";
import { Enimbus } from "./components/Enimbus";
import { Espocc } from "./components/Espocc";
import { Contact } from "./components/Contact";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <RouteWithTitle />
      {isLoaded ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Team" element={<TeamCards />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Devclash" element={<Edevclash />} />
            <Route path="/Graphicon" element={<Egraphicon />} />
            <Route path="/HackerOverflow" element={<Ehackeroverflow />} />
            <Route path="/Nimbus" element={<Enimbus />} />
            <Route path="/Spocc" element={<Espocc />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Splash />
      )}
    </Router>
  );
};


const RouteWithTitle = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Register") {
      document.title = "404 not found";
    } else {
      document.title = "Cloud Computing Cell - AKGEC";
    }
  }, [location]);

  return null;
};

export default App;
