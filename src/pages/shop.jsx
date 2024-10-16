import React from 'react'
import Hero from '../Hero/Hero';
import Popular from '../popular/popular.jsx';
import Offers from '../offers/Offers.jsx';
import NewCollection from '../NewCollection/NewCollection';
import NewsLetter from '../NewsLetter/NewsLetter';
import ShopCategory from './ShopCategory';
function Shop() {
  return (
    <div>
      <Hero/>
    <Popular/>
    <Offers/>
    <NewCollection/>
    <NewsLetter/>
    <ShopCategory/>
    </div>
  )
}

export default Shop;