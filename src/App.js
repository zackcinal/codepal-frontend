import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import SignIn from './screens/SignIn/SignIn.jsx';
import SignUp from './screens/SignUp/SignUp.jsx';
import AboutUs from './screens/AboutUs/AboutUs.jsx';
import Landing from './screens/LandingPage/Landing.jsx';
import EditUser from './screens/EditUser/EditUser.jsx';
import MainPage from './screens/MainPage/MainPage.jsx';
import EditReview from './screens/EditReview/EditReview.jsx';
import UserProfile from './screens/UserProfile/UserProfile.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { signOut, verifyUser } from './services/users.js';
// import CreateProject from './components/Projects/CreateProject';
import Projects from './components/Projects/Projects';
import Reviews from './components/Reviews/Reviews.jsx';


function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null)
  const [profilePage, setProfilePage] = useState(null)

  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await verifyUser();
      console.log("this is the fetched user", fetchedUser.profile)
      setUser(fetchedUser.user);
      setProfile(fetchedUser.profile);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await signOut(); 
    setUser(null);
    setProfile(null);
    navigate("/signin");
  };

  return (
    <div className="App">
      <Navbar profile={profile} handleLogout={handleLogout} />
      <Projects user={user} profile={profile} />
      <Routes>
      <Route path="/" element={<Landing setUser={setUser} user={user} />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/userprofile/:profileId" element={<UserProfile profilePage={profilePage}/>} />
      {/* {user?.first_name && <Route path="/userprofile" element={<UserProfile setUser={setUser} user={user} profile={profile} />} />} */}
      <Route path="/editprofile" element={<EditUser setUser={setUser} user={user} profilePage={profilePage}/>} />
      <Route path="/editreview" element={<EditReview setUser={setUser} user={user}/>} />
      <Route path="/help" element={<AboutUs setUser={setUser} user={user}/>} />
      <Route path="/signup" element={<SignUp setUser={setUser} user={user}/>} />
      <Route path="/signin" element={<SignIn setUser={setUser} setProfile={setProfile} />} />
      {/* <Route path="/createproject" element={<CreateProject user={user} profile={profile} />} /> */}
      </Routes>
    </div>
  );
}

export default App;