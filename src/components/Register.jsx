import React, { useEffect } from 'react'
import RegisterClose from './RegisterClose'

export const Register = () => {
   useEffect(() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    })
  return (
    <>
      <RegisterClose/>
    </>
  )
}


const RegisterOpen = () => {
  return(
    <div></div>
  )
}

