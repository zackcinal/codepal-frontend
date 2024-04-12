import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import UserPreview from "../../components/UserPreview/UserPreview";
import { getProfiles, getProfileUser } from "../../services/users";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function MainPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      let response = await getProfiles();
      console.log("tab");
      setProfiles(response);
    }

    fetchProfiles();
  }, []);

  return (
    <div className="mainPageContainer">
      <Tabs className="mainPageScreen">
        <TabList className="mainPageOptions">
          <Tab>
            <p className="mainPageOptionsBtn">All Developers</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">Full Stack</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">Front End</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">Back End</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">User Experience</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Developers</h1>
            <div className="profilesContainer">
              {profiles.map((profile) => (
                <UserPreview profile={profile} key={profile.id} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Full Stack</h1>
            <div className="profilesContainer">
              {profiles.map((profile) =>
                profile.role === "FS" ? (
                  <UserPreview profile={profile} key={profile.id} />
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Front End</h1>
            <div className="profilesContainer">
              {profiles.map((profile) =>
                profile.role === "FE" ? (
                  <UserPreview profile={profile} key={profile.id} />
                ) : null

                // if(profile.role === "FE"){
                //   <UserPreview profile={profile} key={profile.id} />
                // }else{
                //   ""
                // }
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Back End</h1>
            <div className="profilesContainer">
              {profiles.map((profile) =>
                profile.role === "BE" ? (
                  <UserPreview profile={profile} key={profile.id} />
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>User Experience</h1>
            <div className="profilesContainer">
              {profiles.map((profile) =>
                profile.role === "UX" ? (
                  <UserPreview profile={profile} key={profile.id} />
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <Footer />
    </div>
  );
}

export default MainPage;
