import React from 'react'
import { AiFillInstagram, AiOutlineX, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2025 Rogers Devices All rights reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineX />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer
