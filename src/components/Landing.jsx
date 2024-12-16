


import React from 'react'
import { motion } from 'framer-motion'
import img from '../images/img.svg'
import landingBg from '../images/landingBg.svg'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <>
      <div 
        className='mt-0 md:flex block bg-slate-400 h-full w-full bg-gradient-to-l from-[#3A7CA5] via-[#01172F] to-[#F6E8EA]' 
        style={{ backgroundImage: `url(${landingBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        {/* Navbar */}
        <div className='absolute   w-full'>
          <Navbar />
        </div>

        {/* Left Section */}
        <motion.div 
          className="flex flex-col justify-center items-start p-8 md:p-16 w-full md:w-1/2 text-center md:text-left"
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}  
          transition={{ type: 'spring', duration: 3 }}
        >
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight'>
            Cloud Computing Cell
          </h1>
          <p className='text-lg md:text-2xl text-white opacity-90'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae est quaerat sunt tempore necessitatibus a nam natus dolorum hic vel debitis id temporibus blanditiis voluptates eveniet ducimus, culpa nesciunt minus? 
            Error animi eos iusto maiores impedit quia quam quis dignissimos exercitationem debitis mollitia, inventore, suscipit sint rem, amet ipsa. Reprehenderit reiciendis, suscipit voluptas ullam aut eius quae architecto quasi perspiciatis.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex justify-center items-center w-full md:w-1/2 p-8 md:p-16 mt-8 md:mt-0"
          initial={{ x: -500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}  
          transition={{ type: 'spring', duration: 3 }}
        >
          <img 
            src={img} 
            alt="Cloud Computing"
            // className="max-w-full h-auto bg-gradient-to-t from-[3A7CA5] from-[01172F] to-[F6E8EA]"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </>
  )
}

export default Landing;
