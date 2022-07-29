import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  // where do we want to track the user's posts?
    // const [posts, setPosts] = useState([])

  // function for updating currentUser
  const updateUser = (user) => setCurrentUser(user)
  
  return (
    <div className="App">
      {currentUser ? <NavBar /> : <SignupNavBar />}
      <Routes>
        <Route path="/" element={<Signup updateUser={updateUser}/>} />
        <Route path="/login" element={<Login updateUser={updateUser}/>} />
        {/* <Route path="/users/:id" element={<Dashboard setEditLog={setEditLog}/>} />
        <Route path="/users/:id" element={<AddLog />} />
        <Route path="/logs/:id" element={<LogDetails editLog={editLog} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
