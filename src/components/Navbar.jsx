import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className="div">
          <img src={logo} alt="" />
        </div>
        <div className='flex justify-evenly items-center'>
        <ul className='flex font-bold text-xl'>
          <li className='mr-10'><a href="#Home"></a>HOME</li>
          <li className='mr-10'><a href="#About">ABOUT</a></li>
          <li className='mr-10'><a href="#Team">TEAM</a></li>
          <li className='mr-10'><a href="#Events">EVENTS</a></li>
          <li className='mr-10'><a href="#Contact">GET IN TOUCH</a></li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
