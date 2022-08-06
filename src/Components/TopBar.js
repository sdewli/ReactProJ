import React from 'react'
import image from './logo.png';


import image1 from './userimage.jpeg';
export default function TopBar() {
  return (
    <div className='topbar'>
    <img className='img1' src={image} />

    <img className='imgg' src={image1}/>
      
    </div>
  )
}
