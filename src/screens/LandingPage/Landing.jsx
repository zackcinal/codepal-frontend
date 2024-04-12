import { useEffect } from 'react'
import "./Landing.css"
import { useNavigate } from "react-router-dom";
import { getProfileUser } from '../../services/users';

function Landing() {
  const navigate = useNavigate(); 


  return (
    <div className='landingPageContainer'>
      <h1 className='landingPageTitle'>code.Pal</h1>
      <h2 className='landingPageDescription'>Welcome to our React App for hiring developers! This platform serves as a hub for both developers seeking opportunities and clients looking to hire skilled professionals. Please use this hub as a platform to showcase your talent.</h2>
      <button 
      onClick={() => {
        navigate("/signin");
      }}
      className='landingPageBtn'>Start</button>
    </div>
  )
}

export default Landing