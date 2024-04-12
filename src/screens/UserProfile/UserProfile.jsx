import "./UserProfile.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from "../../components/Projects/Projects.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Followers from "../../components/Followers/Followers.jsx";
import Following from "../../components/Following/Following.jsx";
import CreateProject from "../../components/Projects/CreateProject";
import { Link } from "react-router-dom";

function UserProfile({user, profile}) {
  return (
    <div className="userProfilePageContainer">
      <div className="userProfilePageProfileContainer">
        <img src={profile.profile_picture} className="profilePicture" alt="img"/>
        <h1 className="profileName">
          {user.first_name} {user.last_name}
        </h1>
        <h5 className="profileLocation">{profile.location}</h5>
        <h3 className="profileRole">{profile.role}</h3>
        <h4 className="profileDescription">{profile.description}</h4>
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
            <Reviews />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Followers />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="userProfilePageDisplay">
            <Following />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default UserProfile;
