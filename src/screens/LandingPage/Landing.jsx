import React from 'react'
import "./Landing.css"
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate(); 
  return (
    <div className='landingPageContainer'>
      <h1 className='landingPageTitle'>code.Pal</h1>
      <h2 className='landingPageDescription'>this is our project description</h2>
      <button 
      onClick={() => {
        navigate("/home");
      }}
      className='landingPageBtn'>Start</button>
    </div>
  )
}

export default Landing