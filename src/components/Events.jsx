// import React from 'react'

// const Events = () => {
//   return (
//     <div id="events" className='h-screen w-screen bg-green-300 flex justify-center items-center text-3xl font-bold'>
//       Events
//     </div>
//   )
// }

// export default Events


///*************** */
// import React, { useState } from 'react';

// const HoverCard = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hover, setHover] = useState(false);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     setMousePosition({ x: clientX, y: clientY });
//   };

//   const handleMouseEnter = () => setHover(true);
//   const handleMouseLeave = () => setHover(false);

//   // Calculating translation and rotation based on mouse position
//   const rotateX = (mousePosition.y - window.innerHeight / 2) / 20;
//   const rotateY = (mousePosition.x - window.innerWidth / 2) / 20;
//   const translateZ = (mousePosition.y - window.innerHeight / 2) / 50;
//   const translateX = (mousePosition.x - window.innerWidth / 2) / 20;
//   const translateY = (mousePosition.y - window.innerHeight / 2) / 20;

//   return (
//     <div className='h-screen w-screen flex justify-center items-center max-w-[90vw]  m-auto'>
//     <div
//       className="relative w-[1000px] h-[500px] ml-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//       style={{
//         transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(${translateX}px) translateY(${translateY}px)`,
//         transition: 'transform 0.1s ease-out',
//       }}
//     >
//       {/* Background Gradient Effect */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 transition-all duration-300`}
//         style={{
//           // backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`,
//         }}
//       ></div>

//       {/* Card Content */}
//       <div className="relative z-10 text-white p-6 flex flex-col justify-center items-center h-full">
//         <h1 className="text-3xl font-bold mb-4">Card Title</h1>
//         <p className="text-lg">
//           Th
//         </p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default HoverCard;




// import React, { useState, useRef, useEffect } from "react";

// const HoverCard = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const requestRef = useRef();
//   const lastTime = useRef(0);

//   const handleMouseEnter = (e) => {
//     const { left, top } = e.target.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;
//     setMousePosition({ x, y });
//   };

//   const handleMouseMove = (e) => {
//     const { left, top } = e.target.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;
//     setMousePosition({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 0, y: 0 });
//   };

//   const calculateRotation = () => {
//     const centerX = 100; // Half of card width (350px)
//     const centerY = 200; // Half of card height (500px)
//     const offsetX = (mousePosition.x - centerX) / centerX; // Normalized X
//     const offsetY = (mousePosition.y - centerY) / centerY; // Normalized Y

//     // Rotation effect
//     const rotateX = offsetY * 15; // Increase for more noticeable rotation
//     const rotateY = -offsetX * 15; // Inverted for proper direction

//     // 3D translation for weight effect
//     const translateX = offsetX * 10; // Small translation on X axis
//     const translateY = offsetY * 10; // Small translation on Y axis

//     return {
//       transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`,
//     };
//   };

//   useEffect(() => {
//     // Debounce to optimize performance
//     const handleMouseMoveDebounced = (e) => {
//       const now = performance.now();
//       if (now - lastTime.current >= 16) { // Only update every 16ms (60 FPS)
//         const { left, top } = e.target.getBoundingClientRect();
//         const x = e.clientX - left;
//         const y = e.clientY - top;
//         setMousePosition({ x, y });
//         lastTime.current = now;
//       }
//     };

//     const cardElement = document.querySelector(".hover-card");

//     cardElement.addEventListener("mousemove", handleMouseMoveDebounced);

//     return () => {
//       cardElement.removeEventListener("mousemove", handleMouseMoveDebounced);
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen flex justify-center items-center">
//       <div
//         className="hover-card relative w-[850px] h-[500px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={calculateRotation()}
//       >
//         {/* Gradient background effect */}
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-70 transition-all duration-300 ease-in-out"
//           style={{
//             backgroundPosition: `${(mousePosition.x / 350) * 100}% ${(mousePosition.y / 500) * 100}%`,
//           }}
//         ></div>

//         {/* Card content */}
//         <div className="relative z-10 text-white p-6 flex flex-col justify-center items-center h-full">
//           <h1 className="text-3xl font-bold mb-4">Interactive Card</h1>
//           <p className="text-lg">
//             Move your pointer around to interact with the card.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverCard;


import React from 'react'

const Events = () => {
  return (
    <div id="events h-screen w-full">
      
    </div>
  )
}

export default Events
