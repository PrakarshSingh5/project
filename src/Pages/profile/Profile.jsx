import { useContext, useState } from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import {Context} from '../../context/Context'
import './profile.css'
import axios from 'axios'

export default function Profile() {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [file,setFile]=useState(null);
  const [success, setSuccess]=useState(false);

  const {user,dispatch}=useContext(Context);

  const pblcfolder = "http://localhost:5000/images/"

  const handleOnUpdate= async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updateuser={
      userId: user._id,
      username,
      email,
      password
    };
    if(file){
      const data =new FormData();
      const filename=Date.now() + file.name;
      
      data.append("name",filename);
      data.append("file",file);
      updateuser.profilepicture=filename;
      try{
        await axios.post("/api/upload",data);
      }catch(err){
          console.log(err);
      }
    }
    try{
     const res= await axios.put("/api/users/"+ user._id , updateuser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"UPDATE_FAILURE"});
      console.log(err);
    }
  
  };

  return (
    
    <div className='profile'>
            <div className='profilewrapper'>
                <div className="profiletitle">
                <span className='profiletitleupdate'>Update Your Profile</span>
                <span className='profiletitledelete'>Delete</span>
                </div>
               <form className='profileform' onSubmit={handleOnUpdate}>
                      <label>Profile Picture</label>
                        <div className='profilepicture'>
                            <img src={file ? URL.createObjectURL(file) : (user.profilepicture ? pblcfolder+user.profilepicture:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1718019652~exp=1718020252~hmac=0274cd933fd986337fe61adca7c44e599a3115a3ea6b6413546a58bea1acc5fb")} alt=''/>
                            <label htmlFor='fileInput'>
                                   <i className="profilepictureicon fa-regular fa-circle-user"></i>
                            </label>
                            <input type='file' id='fileInput' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                        </div>
                        <label>Username </label>
                        <input type='text' placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}></input>
                        <label>Email</label>

                        <input type='email' placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <label>Password</label>
                        <input type='password' onChange={(e)=>setPassword(e.target.value)} ></input>
                        <button className='profilesubmit' type='submit'>Update</button>
                        {success && <span style={{color:'green', textAlign:"center",marginTop:"20px"}}>Profile has been updated...</span>}
               </form>
            </div>
            <Sidebar/>
    </div>
  )
}
