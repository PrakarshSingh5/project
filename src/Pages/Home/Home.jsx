import { useEffect, useState } from 'react'
import Header from '../../component/Header2/Header'
import Posts from '../../component/posts/Posts'
import Sidebar from '../../component/sidebar/Sidebar'
import './home.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  useEffect(()=>{
      const fetchPosts=async()=>{
          const res=await axios.get("https://society-sphere-backend.onrender.com/api/posts")
          setPosts(res.data);
        console.log(res.data);
        
      };
      fetchPosts();
  },[search])


  return (
    <div>
        <Header/>
        <div className='home'>
          <Posts posts={posts}/>
          <Sidebar/>
        </div>
    </div>
  )
}
