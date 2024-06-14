import { Link } from 'react-router-dom';
import './navbar.css'
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Navbar() {
  const {user,dispatch}= useContext(Context);
  const pblcfolder = "http://localhost:5000/images/";
  const handleOnLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
      <div className='topleft'>
      <a href='https://www.instagram.com/_prakarsh._/?hl=en' target='blank'> <i className="socialicon fa-brands fa-instagram"></i></a>
     <a href='https://x.com/prakarshsingh_' target='blank'> <i className="socialicon fa-brands fa-x-twitter"></i></a>
      <a href='https://github.com/PrakarshSingh5' target='blank'><i className="socialicon fa-brands fa-github"></i></a>
     <a href='https://www.linkedin.com/in/prakarsh-singh-40a086228/' target='blank'><i className="socialicon fa-brands fa-linkedin"></i></a> 
      </div>
      <div className='topmid'>
            <ul className='navlink'>
                    <li className='navlinkitem'>
                      <Link className="link" to="/" >Home</Link>
                      </li>
                      <li className='navlinkitem'>
                      <Link className="link" to="/about" >About</Link>
                      </li>
                      <li className='navlinkitem'>
                      <Link className="link" to="/contact" >Contact</Link>
                      </li>
                      <li className='navlinkitem'>
                      <Link className="link" to="/write" >Write</Link>
                      </li>
                      <li className='navlinkitem' onClick={handleOnLogout}>
                        {user && "Logout"}
                      </li>
            </ul>
      </div>
      <div className='topright'>
        {
          user?  (<Link to='/profile'> <img className='topimg' src={user.profilepicture? pblcfolder+user.profilepicture : "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1718019355~exp=1718019955~hmac=1c9395835730e9fe127fdbe66720ce3393557339aa0c715f255363400f4e42fb"} alt='P'/>  </Link>
        
        ): (
          <ul className='navlink'>
            <li className='navlinkitem'><Link className="link" to="/login">LOGIN</Link></li>
            <li className='navlinkitem'><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )
      }
       
         <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
