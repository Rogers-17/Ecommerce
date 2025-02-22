import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner = {} }) => {
  const {
    discount = '',
    largeText1 = '',
    largeText2 = '',
    saleTime = '',
    smallText = '',
    midText = '',
    product = '',
    buttonText = '',
    image = '',
    desc = '',
  } = footerBanner;

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
      <div className='left'>
      <p>{footerBanner.discount}</p>
      <h3>{footerBanner.largeText1}</h3>
      <h3>{footerBanner.largeText2}</h3>
      <p>{footerBanner.saleTime}</p>
      </div>
      <div className='right'>
      <p>{smallText}</p>
      <h3>{midText}</h3>
      <p>{desc}</p>
      <Link href={`/product/${product}`}>
      <button type='button'>{buttonText}</button>
      </Link>
      </div>

      <img 
      src={urlFor(image)}
      className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner
