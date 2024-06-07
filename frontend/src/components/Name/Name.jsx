import React from 'react'
import './name.css'
import pic01 from '../../assets/images/name/pic01.jpg'

export default function Name() {
  return (
    <div className='bordername'>
        
      <a className='name' href=""><img className='img01' src={pic01}/>Name</a>
      <button className='btn02'> Delete</button>
      
    </div>
  )
}
