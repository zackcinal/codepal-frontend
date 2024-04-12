import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import UserPreview from '../../components/UserPreview/UserPreview'
import { getProfiles, getProfileUser } from '../../services/users'


function MainPage({setProfilePage }) {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    async function fetchProfiles(){
      let response = await getProfiles()
      setProfiles(response)
      console.log(response)
    }

    fetchProfiles()
  }, []);

  return (
    <div className='mainPageContainer'>
      <h1>Developers</h1>
      <div className='profilesContainer'>
        {profiles.map(profile => (
          <UserPreview profile={profile} key={profile.id} setProfilePage={setProfilePage}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MainPage