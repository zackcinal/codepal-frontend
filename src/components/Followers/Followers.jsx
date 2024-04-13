import React, { useState, useEffect } from 'react'
import "./Followers.css"
import { getFollowerFollowings } from '../../services/follows'
import { getUser } from '../../services/users.js'

function Followers({ followers }) {


 
  const [onefollowers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const fetchedFollowers = await getFollowerFollowings();
        setFollowers(fetchedFollowers);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };
    fetchFollowers();
  }, []);

  return (
    <div>
      {onefollowers?.followers?.map((follow) => {
        return <> 
        <h2>{follow.description}</h2>
        </>
      })}
     
    </div>
  );
}


export default Followers