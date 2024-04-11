import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import UserPreview from '../../components/UserPreview/UserPreview'
import { getProfiles} from '../../services/users'


function MainPage({setProfilePage, profilePage}) {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    getProfiles()
    .then(response => {
      setProfiles(response)
    })
    .catch(error => {
      console.error('Error fetching profiles:', error);
    });
  }, []);

  return (
    <div className='mainPageContainer'>
      <h1>Developers</h1>
      <div className='profilesContainer'>
        {profiles.map(profile => (
          <UserPreview profile={profile} key={profile.id} setProfilePage={setProfilePage} profilePage={profilePage}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MainPage