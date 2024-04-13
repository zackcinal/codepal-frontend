import React, { useState, useEffect } from 'react'
import "./Following.css"
import { getFollowers } from '../../services/follows'

function Following({ following }) {
 

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
      <h2>Followings</h2>
      <ul>
        {following.map(following => (
          <li key={following.id}>
            {following.user.first_name}
            <img src={following.profile_picture} alt={following.name} className="following-image" />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Following