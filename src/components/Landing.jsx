// import React, { useState } from 'react'
// import img from '../images/img.svg'
// // import landingBg from '../images/landingBg'
// import { motion } from 'framer-motion'
// const Landing = () => {

//   return (
//     <>
//     <div className="landing h-auto w-screen text-white bg-black">
//       {/* head */}
//       <motion.div initial={{y : -50 , filter : 'blur(10px)' , opacity : 0 }} whileInView={{y : 0 ,  filter : 'blur(0px)' , opacity : 1}} transition={{duration : 2 , ease : 'easeInOut'}} className="head ml-24 flex flex-col justify-center items-center">
//         <p className='text-4xl font-bold mt-6'>CLOUD COMPUTING CELL</p>
//         <p className='mt-2 text-2xl font-semibold'>Think<span className='ml-3 border-r-2 mr-3 border-white'></span>Develop<span className='ml-3 mr-3 border-r-2'></span>Deploy</p>
//       </motion.div>
       
//        <div className="content block sm:flex justify-center ">
//       {/* left */}
//       <motion.div initial={{x : -400}} whileInView={{x : 0}} transition={{duration : 1}}
//        className="left w-1/2 ml-24 mt-8 font-thin h-auto">
//         <h1 className='text-xl underline text-slate-400'>About Us</h1>
//         <p className='text-xl font-semibold mt-6'>Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering College since February 2016</p>
//         <p className='text-xl font-semibold mt-6'>Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering College since February 2016 . Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cumque accusantium deleniti cupiditate
//         Animi repudiandae obcaecati ipsam quas est? Quibusdam perspiciatis sequi nemo, laudantium provident natus similique inventore. Ullam accusamus, dignissimos nihil ad saepe id delectus autem commodi, illum aspernatur nesciunt deserunt praesentium.</p>
//         <p className='text-xl font-semibold mt-6'>Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering College since February 2016. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus dicta iusto exercitationem, repellendus et repellat vero dignissimos nesciunt autem ratione quos incidunt!e nemo perferendis sint?</p>

//         <div className="btn mt-10 flex gap-10">
//           <button className='relative border-2 border-white text-lg font-bold p-3 rounded-xl'>Know More
//             <div className='opacity-0'>
//           <div className={`absolute bottom-16 bg-white text-black p-2 rounded-xl px-10`}>Know</div>
//           <div className='h-3 w-3 bg-white absolute rotate-45 bottom-[58px] left-[38px]'></div>
//           </div>
//           </button>
//           <button className='border-2 border-white text-lg font-bold p-3 rounded-xl'>Contact Us</button>
//         </div>
//       </motion.div>


//       {/* right */}
//       <motion.div initial={{x : 400}} whileInView={{x : 0}} transition={{duration : 1}} className="right w-1/2 relative bottom-24">
//        <img src={img} className='h-screen' alt="" />
//       </motion.div>


//       </div>
//       </div>
//     </>
//   )
// }

// export default Landing






import React, { useState } from 'react';
import img from '../images/img.svg'; // import landingBg from '../images/landingBg'
import { motion } from 'framer-motion';


const Landing = () => {
  const [isHovered, setIsHovered] = useState(false); // state to track hover
  const [isHovered2, setIsHovered2] = useState(false); // state to track hover

  

  return (
    <>
      <div className="landing  text-white bg-black px-10 m-auto max-w-[90.3vw] max-[500px]:max-w-[100vw]">
        {/* head */}
        <motion.div
          initial={{ y: -50, filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="head ml-24 flex flex-col justify-center items-center text-center relative right-14"
        >
          <p className="text-4xl font-bold mt-6">CLOUD COMPUTING CELL</p>
          <p className="mt-2 text-2xl font-semibold">
            Think
            <span className="ml-3 border-r-2 mr-3 border-white"></span>
            Develop
            <span className="ml-3 mr-3 border-r-2"></span>
            Deploy
          </p>
        </motion.div>

        <div className="content block md:flex justify-center">
          {/* left */}
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="left md:w-1/2 max-w-full m-auto ml-5  mt-16 font-thin h-auto"
            // className="left w-1/2 ml-24 mt-8 font-thin h-auto"
          >
            <h1 className="text-2xl underline text-slate-400">About Us</h1>
            <p className="text-xl font-semibold mt-6">
              Cloud Computing Cell has been a part of Ajay Kumar Garg
              Engineering College since February 2016
            </p>
            <p className="text-2xl font-semibold mt-6">
              Cloud Computing Cell has been a part of Ajay Kumar Garg
              Engineering College since February 2016. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Soluta cumque atium.
            </p>
            <p className="text-2xl font-semibold mt-6">
              Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
              College since February 2016. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis voluptatibus dicta iusto
              exercitationem, repellendus et repellat vero dignissimos nesciunt
              autem ratione quos incidunt!e nemo perferendis sint?
            </p>
            <div className="btn mt-10 flex gap-10">
              <button
                className="relative border-2 border-white text-lg font-bold p-3 rounded-xl"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
              >
                Know More
                <div
                  className={`${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200`}
                >
                  <div
                    className={`absolute bottom-16 bg-white text-black p-2 rounded-xl px-10`}
                  >
                    Know
                  </div>
                  <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[58px] left-[38px]"></div>
                </div>
              </button>
              <button className="border-2 border-white text-lg font-bold p-3 rounded-xl"
              onMouseEnter={() => setIsHovered2(true)} 
              onMouseLeave={() => setIsHovered2(false)} 
              >
                Contact Us
                <div
                  className={`${
                    isHovered2 ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200`}
                >
                  <div
                    className={`absolute bottom-52 bg-white text-black p-2 rounded-xl px-10`}
                  >
                    hello
                  </div>
                  <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[203px] left-[300px] "></div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{x : 500}}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="right md:w-1/2 w-full relative bottom-24 "
            // className="right w-1/2 relative bottom-24 mr-6"
          >
            <img src={img} className="h-[800px]" alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing;
