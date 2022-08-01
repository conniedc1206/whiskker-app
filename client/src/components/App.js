import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Newsfeed from './Newsfeed.js';
import Catpanions from './Catpanions.js';


function App() {
  const [currentUser, setCurrentUser] = useState(false)

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
        {/* <Route path="/login" element={<Login updateUser={updateUser}/>} /> */}
        <Route path="/users/:id" element={<Newsfeed currentUser={currentUser}/>} />
        <Route path="/mycatpanions" element={<Catpanions/>} />
        {/* 
        <Route path="/users/:id" element={<AddLog />} />
        <Route path="/logs/:id" element={<LogDetails editLog={editLog} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
