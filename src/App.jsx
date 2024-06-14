import { useContext } from "react"
import Navbar from "./component/Header/Navbar"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Newpost from "./Pages/newpost/Newpost"
import Single from "./Pages/postdescription/Single"
import Profile from "./Pages/profile/Profile"
import Register from "./Pages/register/Register"
import {
  BrowserRouter as Router, Routes,Route,Link, } from "react-router-dom";
import { Context } from "./context/Context"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"
import Footer from "./component/Footer/Footer"

function App() {
const {user}=useContext(Context);
  return (
    
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={user?<Home/>:<Register/>}></Route>
        <Route path="/login" element={user?<Home/>:<Login/>}></Route>
        <Route path="/write" element={user?<Newpost/>:<Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={user?<Profile/>:<Register/>}></Route>
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
