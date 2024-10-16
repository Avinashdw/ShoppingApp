import React from 'react'
import './NewsLetter.css';
function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletters and stay updated </p>
        <div>
        <input type='text' name='email' value='' placeholder='Your Email Id'></input>
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;