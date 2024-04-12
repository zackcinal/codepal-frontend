import React, { useState, useEffect } from 'react'
import "./Followers.css"
import { getFollowers } from '../../services/follows'

function Followers({ userId }) {
  const [followers, setFollowers] = useState([]) 

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const fetchedFollowers = await getFollowers(userId);
        setFollowers(fetchedFollowers);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };
    fetchFollowers();
  }, [userId]);

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.username}</li>
        ))}
      </ul>
    </div>
  );
}


export default Followers