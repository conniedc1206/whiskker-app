import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar.js";
import NewsFeed from './NewsFeed.js';
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Catpanions from './Catpanions.js';
import Profile from "./Profile.js";
import Signup from "./Signup.js";

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
  
  return (
    <div className="App">
      {currentUser ? <NavBar updateUser={updateUser}/> : <SignupNavBar />}
      <Routes>
        <Route path="/" element={currentUser ? <NewsFeed /> : <Login updateUser={updateUser}/>} />
        <Route path="/signup" element={<Signup updateUser={updateUser}/>} />
        <Route path="/navbar" element={<NavBar updateUser={updateUser}/>} />
        <Route path="/users/:id" element={<NewsFeed currentUser={currentUser}/>} />
        <Route path="/mycatpanions" element={<Catpanions/>} />
        <Route path="/me" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
