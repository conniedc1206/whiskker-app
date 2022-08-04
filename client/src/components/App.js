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
import MyAccount from "./MyAccount.js"
import { GiConsoleController } from 'react-icons/gi';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [catpanions, setCatpanions] = useState([])
  const [posts, setPosts] = useState([])

  // to check if there's a user logged in each time the App loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  //fetch user's posts
  // useEffect(() => {
  //   fetch(`/users/${currentUser.id}`)
  //     .then(res => res.json())
  //     .then(userObj => setPosts(userObj.meow_posts))
  // }, [])

  // callback functions for posts CRUD
  const addPost = (newPost) => setPosts(posts => [...posts, newPost])

  // const updateProduction = (updatedProduction) => setProductions(current => {
  //   return current.map(production => {
  //    if(production.id === updatedProduction.id){
  //      return updatedProduction
  //    } else {
  //      return production
  //    }
  //   })
  // })

  const deletePost = (id) => setPosts(current => current.filter(p => p.id !== id)) 

  // to fetch all catpanions
  useEffect(() => {
    fetch("/catpanions")
      .then(res => res.json())
      .then(setCatpanions)
  }, [])
  // console.log(catpanions)
  
  return (
    <div className="App">
      {currentUser ? <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <SignupNavBar />}
      <Routes>
        <Route path={currentUser ? "/newsfeed" : "/"} element={currentUser ? <NewsFeed currentUser={currentUser}/> : <Login setCurrentUser={setCurrentUser}/>} />
        <Route path="signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="mycatpanions" element={<Catpanions currentUser={currentUser}/>} />
        <Route path="me" element={<Profile currentUser={currentUser} addPost={addPost} deletePost={deletePost} posts={posts}/>}/>
        <Route path="messaging" element={<MeowMail currentUser={currentUser}/>}/>
        <Route path="myaccount" element={<MyAccount currentUser={currentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
