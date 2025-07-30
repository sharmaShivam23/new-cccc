import React, { useEffect } from 'react'
import RegisterClose from './RegisterClose'
import RegisterOpen from './RegisterOpen'
import RegisterOpen2 from './RegisterOpen2'

export const Register = () => {
   useEffect(() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    },[])
  return (
    <div className='overflow-hidden'>
      {/* <RegisterClose/> */}
      <RegisterOpen2/>
    </div>
  )
}

