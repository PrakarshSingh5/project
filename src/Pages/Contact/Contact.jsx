import React from 'react'
import './contact.css';


function Contact() {
  return (
    <div className='container_contact'>
      <div className="wrapper">
        <div className='img_comp'>
        <div className="col1">
           <img src='https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
         </div>
        </div>
      
        <div className="col2">
        <div className='input_form'>
        <input type='text' placeholder='Name'/>
        <input type='eamil' placeholder='your email'/>
        <textarea type='text' placeholder='message'/>
        <button>Submit </button>
        </div>
        
      </div>
      </div>
     
    </div>
  )
}

export default Contact
