import React, { useState, useEffect } from 'react'
import "./Following.css"
import { getFollowers } from '../../services/follows'

function Following({ following }) {

  const [isFollowing, setIsFollowing] = useState(true);

  const toggleFolloing = () => {
    setIsFollowing(prevFollowing => !prevFollowing);
  }

  return (
    <div className='following-item'>
      <h2>Followings</h2>
      <ul>
        {following.map(following => (
          <li key={following.id}>
            {following.user.first_name}
            <img src={following.profile_picture} alt={following.name} className="following-image" />
          </li>
        ))}
      </ul>
      <button onClick={toggleFolloing}>{isFollowing ? 'Following' : 'Follow'}</button>
    </div>
  );
}


export default Following