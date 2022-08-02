import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import NewsFeed from './NewsFeed.js';
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Catpanions from './Catpanions.js';
import Profile from "./Profile.js";
import Signup from "./Signup.js";
import MeowMail from "./MeowMail.js";

function App() {
  const [currentUser, setCurrentUser] = useState(false)

  // function for updating currentUser
  const updateUser = (user) => setCurrentUser(user)

  // to check if there's a user logged in each time the App loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      updateUser(foundUser);
    }
  }, []);

  console.log(currentUser)
  
  return (
    <div className="App">
      {currentUser ? <NavBar updateUser={updateUser}/> : <SignupNavBar />}
      <Routes>
        <Route path={currentUser ? "/newsfeed" : "/"} element={currentUser ? <NewsFeed /> : <Login updateUser={updateUser}/>} />
        <Route path="signup" element={<Signup updateUser={updateUser}/>} />
        {/* <Route path="newsfeed" element={<NewsFeed />} /> */}
        <Route path="mycatpanions" element={<Catpanions currentUser={currentUser}/>} />
        <Route path="me" element={<Profile currentUser={currentUser}/>}/>
        <Route path="messaging" element={<MeowMail currentUser={currentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
