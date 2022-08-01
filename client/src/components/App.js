import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar.js";
import NewsFeed from "./NewsFeed.js";
import Login from "./Login.js";
import SignupNavBar from "./SignupNavBar.js"
import Profile from "./Profile.js";
import Signup from "./Signup.js";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  // where do we want to track the user's posts?
  //NewsFeed Component
    // const [posts, setPosts] = useState([])

  // function for updating currentUser
  const updateUser = (user) => setCurrentUser(user)
  
  return (
    <div className="App">
      {/* {currentUser ? <NavBar /> : <SignupNavBar />} */}
      <Routes>
        {/* <Route path="/" element={<SignupNavBar/>} /> */}
        {/* <Route path="/" element={<Signup updateUser={updateUser}/>} /> */}
        <Route path="/" element={<Signup updateUser={updateUser}/>} />
        <Route path="/login" element={<Login updateUser={updateUser}/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/me" element={<Profile/>} />
        {/* <Route path="/users/:id" element={<Dashboard setEditLog={setEditLog}/>} />
        <Route path="/users/:id" element={<AddLog />} />
        <Route path="/logs/:id" element={<LogDetails editLog={editLog} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
