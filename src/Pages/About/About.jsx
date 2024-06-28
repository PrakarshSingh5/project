import React from 'react'
import './about.css';

function About() {
  return (
    <div className='container_about'>
        <div className='top1'>
            <h1>About us</h1>
        </div>
        <div className='bottom'>
          <div className='wrapper1'>
            <div className='info_img'>
                 <img src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            </div>
             <div className='info_data'>
                  <p>Our Website aim to Invite every different socities of college come on single platform and 
                    post all the information regarding there upcoming and past events such that every college student can access every information on
                    a single platoform easily without going on different platforms.
                  </p>
             </div>
             
          </div>
        </div>
    </div>
  )
}

export default About
