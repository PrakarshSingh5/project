import { Link, redirect } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState(false);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError(false)
   try{
    const res=await axios.post("https://society-sphere-backend.onrender.com/api/auth/register",{
      username,
      email,
      password,
    });
    console.log('Response data:', res.data); // Debugging line
    if (res.data) {
      window.location.replace("/login");
    }
  } catch (err) {
    console.error('Error:', err); // Debugging line
    setError(true);
  }
   
   
  };
  return (
    <div className='register'>
            <span className='registertitle'>Register</span>
            <form className='registerform' onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' placeholder='Enter your username..' 
                    onChange={e=>{setUsername(e.target.value)}}></input>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your Email..'
                    onChange={e=>{setEmail(e.target.value)}}></input>
                    <label>Password</label>
                    <input type='password' placeholder='Set your password..'
                    onChange={e=>{setPassword(e.target.value)}}></input>
                    <button className='registerbtn' type='submit'>Register</button>
            </form>
            <button className='registerloginbtn'><Link to='/login' className='link'>Login</Link></button>
            {error && <span style={{color:"red"}}>Something went wrong !!!</span>}
    </div>
  )
}