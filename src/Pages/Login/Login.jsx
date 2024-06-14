import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const {dispatch, isFetching}=useContext(Context);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res=await axios.post("/api/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload: res.data});

    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  return (
    <div className='login'>
        <span className='logintitle'>Login</span>
        <form className='loginform' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' placeholder='Enter your Username...' ref={userRef}></input>
            <label>Password </label>
            <input type='password' placeholder='Enter your Password...' ref={passwordRef}></input>
    <button className='loginuser' type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className='registeruser'><Link to='/register' className='link'>Register</Link></button>
    </div>
  )
}
