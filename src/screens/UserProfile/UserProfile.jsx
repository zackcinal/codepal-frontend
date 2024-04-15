import "./UserProfile.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/reviews.js";
import { useEffect, useState } from "react";
import { getFollowerFollowings } from "../../services/follows.js";
import { getProfile, verifyUser } from "../../services/users.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from "../../components/Projects/Projects.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Followers from "../../components/Followers/Followers.jsx";
import Following from "../../components/Following/Following.jsx";
import CreateProject from "../../components/Projects/CreateProject";

function UserProfile({ profile }) {
  const [reviews, setReviews] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const { profileId } = useParams();

  const redirectToEmail = () => {
    window.location.href = `mailto:${userProfile.user.email}`;
  };

  useEffect(() => {
    console.log("i did change the page");
    const fetchProfile = async () => {
      const profilefetched = await getProfile(profileId);
      setUserProfile(profilefetched);
    };

    fetchProfile();
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
    async function fetchFollows() {
      const response = await getFollowerFollowings(profileId);
      console.log(response);
      setFollowers(response.followers);
      setFollowing(response.following);
    }

    fetchFollows();
  }, []);

  useEffect(() => {
    async function checkIfUserIsTheSame() {
      const user = await verifyUser();

      if (user.profile.id == profileId) setIsCurrentUser(true);
    }

    checkIfUserIsTheSame();
  }, []);
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
        <h3 className="profileRole">
          {userProfile?.role == "FS" 
          ? "Full Stack" 
          : userProfile?.role == "FE"
          ? "Front End"
          : userProfile?.role == "BE"
          ? "Back End"
          : userProfile?.role == "UX"
          ? "User Experience"
          :  ""}</h3>
        <h4 className="profileDescription">{userProfile?.description}</h4>

        {isCurrentUser ? (
          // if this is the user who is logged in
          <Link to="/users/edit">
            <button className="followBtn">Edit Profile</button>
          </Link>
        ) : (
          // if it is not the logged in user
          <div>
            {/* <Link to="/users/follow">
              <button className="followBtn">Follow</button>
            </Link> */}
            <button onClick={redirectToEmail} className="send-email-to">Send an Email!</button>
          </div>
        )}
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
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Following following={following} key={following.id} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default UserProfile;
