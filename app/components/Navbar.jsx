import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p>
        <Link href="/">Rogers Devices</Link>
      </p>

      <button type='button' className='cart-icon'>
        <AiOutlineShopping />
       <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar
