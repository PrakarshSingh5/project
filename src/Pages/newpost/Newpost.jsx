import {  useContext, useState } from 'react';
import {Context} from '../../context/Context'
import './newpost.css';
import axios from "axios";

export default function Newpost() {
  const [title,setTitle]=useState("");
  const [desc, setDesc]=useState("");
  const [file,setFile]=useState(null);
  const {user} = useContext(Context);


  const handleOnSubmit= async (e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data =new FormData();
      const filename=Date.now()+file.name;
      
      data.append("name",filename);
      data.append("file",file)
      newPost.photo=filename;
      try{
        await axios.post("https://society-sphere-backend.onrender.com/api/upload",data);
      }catch(err){
          console.log(err);
      }
    }
    try{
     const res=await axios.post("/api/posts",newPost);
     console.log(res);
     window.location.replace("/post/" + res.data._id);
    }catch(err){
      console.log(err);
    }
  
  }

  return (
    <div className='newpost'>
       
       {file && (<img className='newpostimg' src={URL.createObjectURL(file)} alt=""/>)}
        <form className='newpostform' onSubmit={handleOnSubmit}>
            <div className='newpostformgroup'>
                    <label htmlFor='fileInput'>
                    <i className="newposticon fa-solid fa-upload"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type='text' placeholder='Title' className='newpostinput' onChange={e=>setTitle(e.target.value)} autoFocus={true}/>
            </div>
            <div className='newpostformgroup'>
                <textarea placeholder='Tell something about your post.. ' type="text" className='newpostinput newposttext' onChange={e=>setDesc(e.target.value)} ></textarea>
            </div>

            <button className='newpostsubmit' type='submit'>Publish</button>
        </form>
    </div>
  )
}
