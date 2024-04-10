import React from 'react'
import "./UserProfile.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from '../../components/Projects/Projects.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import Followers from '../../components/Followers/Followers.jsx';
import Following from '../../components/Following/Following.jsx';

function UserProfile() {
  return (
    <div className='userProfilePageContainer'>
      <div className='userProfilePageProfileContainer'>
        <img src='' className='profilePicture' alt="img"></img>
        <h1 className='profileName'> PROFILE FIRST AND LAST</h1>
        <h5 className='profileLocation'> 📍 LOCATION</h5>
        <h3 className='profileRole'>ROLE</h3>
        <h4 className='profileDescription'> DESCRIPTION OF THE PROFILE</h4>
        <button className='followBtn'>Follow</button>
      </div>
          <Tabs className='userProfilePageScreen'>
            <TabList className='userProfilePageOptions'>
              <Tab>
                <p className='userProfilePageOptionsBtn'>Projects</p>
              </Tab>
              <Tab>
                <p className='userProfilePageOptionsBtn'>Reviews</p>
              </Tab>
              <Tab>
                <p className='userProfilePageOptionsBtn'>Followers</p>
              </Tab>
              <Tab>
                <p className='userProfilePageOptionsBtn'>Following</p>
              </Tab>
            </TabList>
            
            <TabPanel >
              < div className='userProfilePageDisplay'>
                <Projects />
              </ div>
            </TabPanel>
            <TabPanel >
              < div className='userProfilePageDisplay'>
                <Reviews />
              </ div>
            </TabPanel>
            <TabPanel >
              < div className='userProfilePageDisplay'>
                <Followers />
              </ div>
            </TabPanel>
            <TabPanel >
              < div className='userProfilePageDisplay'>
                <Following />
              </ div>
            </TabPanel>
          </Tabs>
      </div>
  )
}

export default UserProfile