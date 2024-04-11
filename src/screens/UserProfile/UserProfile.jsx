import "./UserProfile.css";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
<<<<<<< Updated upstream
import Projects from "../../components/Projects/Projects.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Followers from "../../components/Followers/Followers.jsx";
import Following from "../../components/Following/Following.jsx";

function UserProfile(user) {
  return (
    <div className="userProfilePageContainer">
      <div className="userProfilePageProfileContainer">
        <img src={user.profile.profilePicture} className="profilePicture" alt="img" />
        <h1 className="profileName">
          {user.user.first_name} {user.user.last_name}
        </h1>
        <h5 className="profileLocation">{user.profile.location}</h5>
        <h3 className="profileRole">{user.profile.role}</h3>
        <h4 className="profileDescription">{user.profile.description}</h4>
        <button className="followBtn">Edit Profile</button>
=======
import Projects from '../../components/Projects/Projects.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import Followers from '../../components/Followers/Followers.jsx';
import Following from '../../components/Following/Following.jsx';
import { getProfiles, getProfile } from '../../services/users.js'
import { useState, useEffect } from 'react';

function UserProfile({profilePage}) {
  console.log("i entered the page with a new profile",profilePage)
  const [profile, setProfile] = useState(null)

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const userProfile = await getProfile(profilePage);
  //       console.log("this is the profile that matches that id",userProfile)

  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  return (
    <div className='userProfilePageContainer'>
      <div className='userProfilePageProfileContainer'>
        <img src='' className='profilePicture' alt="img"></img>
        <h1 className='profileName'> {profilePage.user}</h1>
        <h5 className='profileLocation'> 📍 {profilePage.location}</h5>
        <h3 className='profileRole'>{profilePage.role=="FS" ? "Full Stack" : profilePage.role=="FE" ? "Front End" : profilePage.role=="BE" ? "Back End" : profilePage.role=="UX" ? "User Experience" : ""}</h3>
        <h4 className='profileDescription'> {profilePage.description}</h4>
        <button className='followBtn'>Follow</button>
>>>>>>> Stashed changes
      </div>
      <Tabs className="userProfilePageScreen">
        <TabList className="userProfilePageOptions">
          <Tab>
            <p className="userProfilePageOptionsBtn">Projects</p>
          </Tab>
          <Tab>
            <p className="userProfilePageOptionsBtn">Reviews</p>
          </Tab>
          <Tab>
            <p className="userProfilePageOptionsBtn">Followers</p>
          </Tab>
          <Tab>
            <p className="userProfilePageOptionsBtn">Following</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="userProfilePageDisplay">
            <Projects />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Reviews />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Followers />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Following />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default UserProfile;
