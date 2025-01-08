// import React from "react";
// import Map from "./Map";
// // import bgwave from '../images/bgwave.svg'
// // import bgcircle from '../images/bgcircle.svg'
// import bgwave from '../images/bgwave.png'
// import bgcircle from '../images/bgcircle.png'
// const Contact = () => {
//   return (
//     <>
     
//       <div
//         id="contact"
//         style={{
//           // backgroundImage: `url(${bgwave})`,
//           backgroundRepeat : "no-repeat",  
//           backgroundSize : "cover",  
//           height : "100vh",
//           width : "100vw"
//       }}
//         className="flex  justify-center  items-center bg-gray-1000 flex-col h-screen w-full sm:max-w-[90vw] m-auto"
//       >
//         <div 
//          style={{
//           backgroundImage: `url(${bgcircle})`,
//           backgroundRepeat : "no-repeat",  
//           backgroundSize : "cover",  
//           // height : "100vh",
//           // width : "100vw"
//       }}
//         className="text-white flex justify-center border-2 border-white items-center flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 shadow-xl shadow-slate-900 bg-gradient-to-t  from-stone-800 to-transparent h-auto py-5 backdrop-blur-xl rounded-2xl m-10">
//           <h1 className="text-4xl  block text-center">
//             Let's connect Networks
//           </h1>
//           <form action="" className="m-4">
//             <div className="md:flex block gap-2 justify-center items-center text-center">
//               <input
//                 type="text"
//                 className="border-white border-2  rounded-md font-bolder px-3 md:w-6/12 w-full text-white py-2 mt-3 bg-black"
//                 placeholder="First Name"
//               />
//               <input
//                 className="border-white border-2  rounded-md font-bolder  md:w-6/12 w-full px-3  text-white py-2 bg-black mt-3"
//                 type="text"
//                 placeholder="Last Name"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 className="border-white border-2  rounded-md font-bolder px-3 text-white py-2 bg-black w-full mt-3"
//                 placeholder="Email"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 className="border-white border-2  rounded-md font-bolder px-3 text-white py-2 bg-black  w-full mt-3"
//                 placeholder="Phone Number"
//               />
//             </div>

//             <textarea
//               name=""
//               className="border-white border-2  rounded-md font-bolder px-3 text-white h-28 pt-2 bg-black  w-full mt-3"
//               placeholder="Enter your message"
//               id=""
//             ></textarea>
//             <div className="flex justify-center items-center mt-3">
//               <button className="h-10  w-full md:w-96 rounded-md bg-gradient-to-r from-violet-700 to-pink-600 mt-3 text-center">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Map/>
      

//     {/* map */}

//     {/* <div className="sm:w-1/2 w-full">
//       <p className="text-3xl text-white">Map</p>
//     </div> */}
//     </>
//   );
// };

// export default Contact;



import React from 'react'
import video from '../images/contactvideo.mp4'
import ShimmerButton from './ui/shimmer-button'
import Particles from './ui/particles'
import { useState } from 'react'
import ShineBorder from './ui/shine-border'

export const Contact = () => {
  return (
    <>
     <Particles/>
    <div id="contact" className='md:h-screen z-10 h-auto w-screen bg-red- max-w-90vw md:max-w-[90vw] m-auto p-4 block md:flex'>
      <Video/>
      <Form/>
      </div>
      </>
  )
}



const Video = () => {
  return(
    <div className='flex justify-center items-center w-auto md:w-1/2 bg-green- h-auto md:h-[100vh]'>
       <video className='w-full z-40  h-auto md:h-[100vh]' autoPlay loop src={video}></video>
    </div>
  )
}



const Form = () => {
  return(
    <div className='flex justify-center items-center text-white  w-full md:w-1/2 bg-yellow- flex-col h-auto md:h-screen p-2'>

      <div className="text flex justify-center items-center flex-col">
        <p className='sm:text-3xl text-2xl text-center text-white font-bold'>Welcome to Cloud Computing</p>
        <p className='mt-4 sm:text-2xl text-center text-xl'>Lorem, ipsum dolor.</p>
      </div>

      <form className='flex justify-center items-center max-[800px]:w-[70vw] flex-col border- border-white h-[70vh] w-full md:w-[30vw]  md:p-7' action="">
        <h1 className='text-3xl font-bold text-white mb-3 tracking-wider'>Contact Us</h1>
            <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
                placeholder="Name"
              />
            <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
                placeholder="Email"
              />
            <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
                placeholder="Phone Number"
              />
               <textarea
              name=""
              className="border-white border-2  rounded-md font-bolder px-3 text-white h-36 pt-2 bg-black  w-full mt-3"
              placeholder="Enter your message"
              id=""
            ></textarea>

          {/* <ShimmerButton   shimmerColor = {'#ffffff'} className="mt-8 text-white text-xl tracking-wider font-bold"> */}
          {/* <ShimmerButton   shimmerColor = {'#3B0B59'} className="mt-8 text-[#3B0B59] text-xl tracking-wider font-bold"> */}
            {/* Submit */}
          {/* </ShimmerButton> */}

          <ShineBorder
            borderRadius={4}
            borderWidth={0.5}
            duration={3}
            color={["#ffffff", "#3B0B59"]}
            // color={["#ff00ff", "#00ff00"]}
            className="mt-8 text-white text-xl tracking-wider font-bold"
          >
            Submit
          </ShineBorder>
          
      </form>

    </div>
  )
}

