import { Link, useLocation } from 'react-router-dom'
import './singlePost.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function SinglePost() {
  //taking the id of the current post by location
   const location=useLocation();
   //taking the string 2 index 
   const path=location.pathname.split("/")[2];
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
const [update,setUpdate]=useState(false);
  const [post,setPost]=useState({});
   const pblfolder="http://localhost:5000/images/";
   const {user} =useContext(Context);
const handledelete=async()=>{
try{ 
  await axios.delete(`https://society-sphere-backend.onrender.com/api/posts/${post._id}`,{
    data:{username:user.username},
  });
  window.location.replace("/");
}catch(err){
  console.log(err);
} 
}
const handleupdate=async()=>{
  try{
    await axios.put(`https://society-sphere-backend.onrender.com/api/posts/${post._id}`,
      {username:user.username, title,desc }
    );
    setUpdate(false);
  }catch(err){
    console.log(err);
  }
}
  useEffect(()=>{
    const getPost=async ()=>{
      const res=await axios.get("https://society-sphere-backend.onrender.com/api/posts/"+path);
      setPost(res.data);
      setDesc(res.data.desc);
      setTitle(res.data.title);
    };
    getPost();
   } ,[path])
  
  return (
    <div className='singlepost'>
    <div className='singlepostwrapper'>
      {post.photo && (<img src={pblfolder+post.photo} alt="" className="singlepostimg" />
     )}
      {update ?(<input type='text' value={title} className='singleposttitleinput' autoFocus  onChange={(e)=>setTitle(e.target.value)}/>):(
      
        <h1 className='singleposttitle'>{title}
          {post.username===user?.username &&  <div className="singlepostedit">
        <i className="singleposticon fa-solid fa-pen-to-square" onClick={()=>setUpdate(true)} ></i>
        <i className="singleposticon fa-solid fa-trash"  onClick={handledelete}></i>
         </div> }
        </h1>
      )}
     <div className="singlepostinfo">
        <span className='singlepostauthor'>Author: <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link></span>
        <span className='singlepostdate'>{new Date(post.createdAt).toDateString()}</span>
     </div>
     { update ? ( <textarea className='singlepostdescinput' value={desc} onChange={(e)=>setDesc(e.target.value)} />
     ):(
       <p className='singlepostdesc'>{desc} </p>
     )}
    {update && ( <button className='upbtn' onClick={handleupdate}>Update</button>)}
   
     
      </div>
    </div>
  )
}
