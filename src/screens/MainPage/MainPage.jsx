import { useEffect, useState } from "react";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";
import UserPreview from "../../components/UserPreview/UserPreview";
import { getProfiles } from "../../services/users";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function MainPage({profile}) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      let response = await getProfiles();
      setProfiles(response);
    }

    fetchProfiles();
  }, []);

  return (
    <div className="mainPageContainer">
      <Tabs className="mainPageScreen">
        <TabList className="mainPageOptions">
          <Tab>
            <p className="mainPageOptionsBtn">ALL DEVELOPERS</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">FULL STACK</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">FRONT END</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">BACK END</p>
          </Tab>
          <Tab>
            <p className="mainPageOptionsBtn">UX</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Developers</h1>
            <div className="profilesContainer">
              {profiles.map((currentProfile) => (
                <UserPreview profile={currentProfile} key={currentProfile.id} myProfile={profile}/>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Full Stack</h1>
            <div className="profilesContainer">
              {profiles.map((currentProfile) =>
                currentProfile.role === "FS" ? (
                  <UserPreview profile={currentProfile} key={currentProfile.id} myProfile={profile}/>
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Front End</h1>
            <div className="profilesContainer">
              {profiles.map((currentProfile) =>
                currentProfile.role === "FE" ? (
                  <UserPreview profile={currentProfile} key={currentProfile.id} myProfile={profile}/>
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>Back End</h1>
            <div className="profilesContainer">
              {profiles.map((currentProfile) =>
                currentProfile.role === "BE" ? (
                  <UserPreview profile={currentProfile} key={currentProfile.id} myProfile={profile}/>
                ) : null
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mainPageDisplay">
            <h1>User Experience</h1>
            <div className="profilesContainer">
              {profiles.map((currentProfile) =>
                currentProfile.role === "UX" ? (
                  <UserPreview profile={currentProfile} key={currentProfile.id} myProfile={profile}/>
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
