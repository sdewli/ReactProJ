import React from 'react'
import image from './search.png';

export default function Search({ value, onSearchChange }) {
  return (
    <>
      <input
        className='search' 
        type="text" 
        placeholder="Search..."  
        onChange={e => onSearchChange(e.target.value) } 
      />
    </>
  )
}
