import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats , setCate]=useState([]);
  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get('/api/categories');
      setCate(res.data);
    }
    getCats();
  },[]);
  return (
    <div className='sidebar'>
        <div className='sidebaritem'>
            <span className='sidebartitle'>About Me</span>
            <img src="https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image'/>
            <p>I'm Prakarsh Singh, a web developer proficient in crafting dynamic and responsive web applications using modern frameworks like React and Node.js. Additionally, I excel as a competitive programmer, efficiently solving algorithmic challenges using diverse data structures and algorithms. My passion lies in leveraging technology to create intuitive user experiences and tackling complex problems with elegant solutions.</p>
        </div>
      <div className='sidebaritem'>
        <span className='sidebartitle'>Categories</span>
        <ul className="sidebarlist">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`}><li className="sidebarlistitem">{c.name}</li></Link>
          ))}
            
           
        </ul>
      </div>
      <div className='sidebaritem'>
      <span className='sidebartitle'>Follow Us</span>
      <div className='sidebarsocial'>
      <i className="sidebaricon fa-brands fa-instagram"></i>
      <i className="sidebaricon fa-brands fa-x-twitter"></i>
      <i className="sidebaricon fa-brands fa-github"></i>
      <i className="sidebaricon fa-brands fa-linkedin"></i>
      </div>
      </div>
    </div>
  )
}
