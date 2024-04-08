import './App.css';
import { verifyUser} from './services/users.js'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import SignOut from './screens/SignOut/SignOut.jsx';
import SignUp from './screens/SignUp/SignUp.jsx'; 
import SignIn from './screens/SignIn/SignIn.jsx';
import Landing from './screens/Landing Page/Landing.jsx';



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
      <Routes>
      <Route path="/" element={<Landing setUser={setUser} />} />
      <Route path="/register" element={<SignUp setUser={setUser} />} />
      <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
      <Route path="/sign-out" element={<SignOut setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
