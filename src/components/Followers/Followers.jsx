import React, { useState, useEffect } from 'react'
import "./Followers.css"
import { getFollowers } from '../../services/follows'
import { getUser } from '../../services/users.js'

function Followers({ followers }) {
 

  // useEffect(() => {
  //   const fetchFollowers = async () => {
  //     try {
  //       const fetchedFollowers = await getFollowers(userId);
  //       setFollowers(fetchedFollowers);
  //     } catch (error) {
  //       console.error("Error fetching followers:", error);
  //     }
  //   };
  //   fetchFollowers();
  // }, [userId]);

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map(follower => (
          <li key={follower.id}>
            {follower.profile_picture && <img src={follower.profile_picture} alt={follower.name} className="follower-image" />}
            <span>{follower.name}</span>
            {follower.user.first_name}
            
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Followers