import React from 'react'
import './popular.css'
import product_data from '../Assests/data';
import Item from '../item/Item';
function Popular() {
  return (
    <div className='popular'>
        <h2>Popular in Women</h2>
        <hr/>
        <div className='popular_item'>
            {product_data.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular