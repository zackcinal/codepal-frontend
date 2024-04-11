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
import { getProfile } from './services/profile.js'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { signOut, verifyUser } from './services/users.js';


function App() {
  const [user, setUser] = useState(null);
<<<<<<< Updated upstream
  const [profile, setProfile] = useState(null)
=======
  const [profilePage,setProfilePage] = useState("hello")
>>>>>>> Stashed changes
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await verifyUser();
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
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
<<<<<<< Updated upstream
      <Route path="/" element={<Landing setUser={setUser} user={user} />} />
      <Route path="/home" element={<MainPage setUser={setUser} user={user}/>} />
      <Route path="/userprofile" element={<UserProfile setUser={setUser} user={user} profile={profile} />} />
      <Route path="/editprofile" element={<EditUser setUser={setUser} user={user}/>} />
      <Route path="/editreview" element={<EditReview setUser={setUser} user={user}/>} />
      <Route path="/help" element={<AboutUs setUser={setUser} user={user}/>} />
      <Route path="/signup" element={<SignUp setUser={setUser} user={user}/>} />
      <Route path="/signin" element={<SignIn setUser={setUser} setProfile={setProfile} />} />
=======
      <Route path="/" element={<Landing setUser={setUser} />} />
      <Route path="/home" element={<MainPage setUser={setUser} profilePage={profilePage} setProfilePage={setProfilePage}/>} />
      <Route path="/userprofile" element={<UserProfile setUser={setUser} profilePage={profilePage}/>} />
      <Route path="/editprofile" element={<EditUser setUser={setUser} />} />
      <Route path="/editreview" element={<EditReview setUser={setUser} />} />
      <Route path="/help" element={<AboutUs setUser={setUser} />} />
      <Route path="/signup" element={<SignUp setUser={setUser} />} />
      <Route path="/signin" element={<SignIn setUser={setUser} />} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}

export default App;
