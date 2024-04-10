import './App.css';
import { verifyUser} from './services/users.js';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './screens/AboutUs/AboutUs.jsx';
import EditUser from './screens/EditUser/EditUser.jsx';
import EditReview from './screens/EditReview/EditReview.jsx';
import Landing from './screens/LandingPage/Landing.jsx';
import MainPage from './screens/MainPage/MainPage.jsx';
import SignIn from './screens/SignIn/SignIn.jsx';
import SignUp from './screens/SignUp/SignUp.jsx';
import UserProfile from './screens/UserProfile/UserProfile.jsx';

import Navbar from './components/NavBar/Navbar.jsx';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };

    fetchUser();
  }, []);

  return (
    <div className="App" user={user}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Landing setUser={setUser} />} />
      <Route path="/home" element={<MainPage setUser={setUser} />} />
      <Route path="/userprofile" element={<UserProfile setUser={setUser} />} />
      <Route path="/editprofile" element={<EditUser setUser={setUser} />} />
      <Route path="/editreview" element={<EditReview setUser={setUser} />} />
      <Route path="/help" element={<AboutUs setUser={setUser} />} />
      <Route path="/signup" element={<SignUp setUser={setUser} />} />
      <Route path="/signin" element={<SignIn setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
