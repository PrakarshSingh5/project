import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='container_footer'>
      <div className='reserve'>
        
        
          <p> &copy; {new Date().getFullYear()} All rights reserved</p>

      </div>
      <div className='terms'>
        <div>
          <p>Terms</p>
        </div>
        <div>
          <p>Policy</p>
        </div>
        <div>
          <p>Cookie Policy</p>
        </div>
      </div>
       
    </div>
  )
}
