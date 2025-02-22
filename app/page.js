import React from 'react'

import { client } from './lib/client'
import { Products, Footer, FooterBanner, HeroBanner, Navbar, Layout, Product } from './components'

// This function fetches data on the server side before the page renders
const Home = async () => {
  // Fetch the list of products
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // Fetch the banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export default Home;
