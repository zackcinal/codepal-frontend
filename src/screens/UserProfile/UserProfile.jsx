import "./UserProfile.css";
import { getReviews } from "../../services/reviews.js";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from "../../components/Projects/Projects.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Followers from "../../components/Followers/Followers.jsx";
import Following from "../../components/Following/Following.jsx";
import { getProfile } from "../../services/users.js";
import { getFollowerFollowings, getFollowers } from "../../services/follows.js";
import { useParams } from "react-router-dom";
import CreateProject from "../../components/Projects/CreateProject";
import { Link } from "react-router-dom";



function UserProfile({profile}) {
  const [reviews, setReviews] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userProfile, setUserProfile] = useState (null)

  const { profileId } = useParams()


  useEffect(() => {
    console.log("i did change the page")
    const fetchProfile = async () =>{
      const profilefetched = await getProfile(profileId)
      setUserProfile( profilefetched )
    }
  
    fetchProfile()
  }, [profileId]);

  useEffect(() => {
    getReviews(profileId)
      .then((response) => {
        setReviews(response);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [profileId]);

  useEffect(() => {
    async function fetchFollows () {
      const response = await getFollowerFollowings()
      setFollowers(response.followers)
      setFollowing(response.following)
    }

    fetchFollows()
  }, [])


  return (
    <div className="userProfilePageContainer">
      <div className="userProfilePageProfileContainer">

         <img
           src={userProfile?.profile_picture}
           className="profilePicture"
           alt="img"
         />
          <h1 className="profileName">
           {userProfile?.user.first_name} {userProfile?.user.last_name}
         </h1>
         <h5 className="profileLocation">{userProfile?.location}</h5>
         <h3 className="profileRole">{userProfile?.role}</h3>
         <h4 className="profileDescription">{userProfile?.description}</h4>
         <button className="followBtn">Edit Profile</button>
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
           {reviews?.map((review) => (
              <Reviews review={review} key={reviews.id} />
            ))}
           </div>
         </TabPanel>
         <TabPanel>
           <div className="userProfilePageDisplay">
              <Followers followers={followers} key={followers.id} />

           {/* <Followers userId={profileId} /> */}
           </div>
         </TabPanel>
         <TabPanel>
           <div className="userProfilePageDisplay">
             <Following following={following} key={following.id}/>
           </div>
         </TabPanel>
       </Tabs>


    </div>
  );
  }

export default UserProfile;











// function UserProfile(user, userId) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     getReviews(user.user.id)
//       .then((response) => {
//         setReviews(response);
//       })
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//       });
//   }, [user.user.id]);

//   return (
//     <div className="userProfilePageContainer">
//       <div className="userProfilePageProfileContainer">
//         <img
//           src={user.profile.profilePicture}
//           className="profilePicture"
//           alt="img"
//         />
//         <h1 className="profileName">
//           {user.user.first_name} {user.user.last_name}
//         </h1>
//         <h5 className="profileLocation">{user.profile.location}</h5>
//         <h3 className="profileRole">{user.profile.role}</h3>
//         <h4 className="profileDescription">{user.profile.description}</h4>
//         <button className="followBtn">Edit Profile</button>
//       </div>

//       <Tabs className="userProfilePageScreen">
//         <TabList className="userProfilePageOptions">
//           <Tab>
//             <p className="userProfilePageOptionsBtn">Projects</p>
//           </Tab>
//           <Tab>
//             <p className="userProfilePageOptionsBtn">Reviews</p>
//           </Tab>

//           <Tab>
//             <p className="userProfilePageOptionsBtn">Followers</p>
//           </Tab>
//           <Tab>
//             <p className="userProfilePageOptionsBtn">Following</p>
//           </Tab>
//         </TabList>

//         <TabPanel>
//           <div className="userProfilePageDisplay">
//             <Projects />
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="userProfilePageDisplay">
//             {reviews.map((review) => (
//               <Reviews review={review} key={reviews.id} />
//             ))}
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="userProfilePageDisplay">
//           <Followers userId={user.id} />
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="userProfilePageDisplay">
//             <Following />
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// }

// export default UserProfile;
