import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();  
  return (

    <div className='navbarContainer'>
      <button 
      onClick={() => {
        navigate("/");
      }}
      className='navbarBtn'>code.Pal</button>
      <div className='navbarOptions'>
        <button className='navbarBtn'>Login</button>
        <button className='navbarBtn'>Signup</button>
        <button 
        onClick={() => {
          navigate("/help");
        }}
        className='navbarBtn'>Help</button>
      </div>
    </div>
  )
}

export default Navbar