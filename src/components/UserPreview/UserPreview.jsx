import React, { useEffect } from 'react'
import "./UserPreview.css"
import { useNavigate, useState } from "react-router-dom";
import { getProfiles, getProfile } from '../../services/users'



function UserPreview({ profile, setProfilePage, profilePage }) {
  const navigate = useNavigate();


  function outerButtonClick() {
      navigate("/userprofile");
      console.log("Outer button clicked");
      

      const fetchProfile = async () => {
        try {
          const userProfile = await getProfile(profile.user);
          console.log("this is the profile that matches that id",userProfile)
          setProfilePage(userProfile)
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
  
      fetchProfile();
  }

  function innerButtonClick(event) {
      console.log("Inner button clicked");
      event.stopPropagation();
      navigate("/");
  }

  return (
    <button 
      onClick={() => {
      outerButtonClick()
    }}
    className='profileCard'>
      <div className='profileCardHeader'>
        <img src={profile.profile_picture} alt={profile.user.username}/>
        <h2>{profile.user}</h2>
        <h4>{profile.location}</h4>
        <h4>{profile.role=="FS" ? "Full Stack" : profile.role=="FE" ? "Front End" : profile.role=="BE" ? "Back End" : profile.role=="UX" ? "User Experience" : ""}</h4>
      </div>
      <div className='profileCardFollowers'> 
        <h5>## Followers</h5>
        <button 
          onClick={(event) => {
          innerButtonClick(event)
        }}
        className='profileCardFollowBtn'>Follow</button>
      </div>
    </button>
  )
}
export default UserPreview