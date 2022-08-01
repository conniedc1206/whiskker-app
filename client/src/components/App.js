import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar.js";
import NewsFeed from "./NewsFeed.js";
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Catpanions from './Catpanions.js';
import Profile from "./Profile.js";
import Signup from "./Signup.js";

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  // const [posts, setPosts] = useState([])

  // function for updating currentUser
  const updateUser = (user) => setCurrentUser(user)
  // fetch the user here instead? prompt user "stay logged in?""
  
  console.log(currentUser)
  
  return (
    <div className="App">
      {currentUser ? <NavBar updateUser={updateUser}/> : <SignupNavBar />}
      <Routes>
        <Route path="/" element={currentUser ? <Newsfeed /> : <Login updateUser={updateUser}/>} />
        <Route path="/signup" element={<Signup updateUser={updateUser}/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/users/:id" element={<Newsfeed currentUser={currentUser}/>} />
        <Route path="/mycatpanions" element={<Catpanions/>} />
        <Route path="/me" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
