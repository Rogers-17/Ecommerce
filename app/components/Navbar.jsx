"use client"

import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import Cart from '@/app/components/Cart'
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities} = useStateContext();


  return (
    <div className='navbar-container'>
      <p>
        <Link href="/">Rogers Devices</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
       <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

    </div>
  )
}

export default Navbar
