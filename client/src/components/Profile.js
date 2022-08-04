import React, { useEffect, useState } from "react";
import PostForProfile from "./PostForProfile";
import CreatePost from "./CreatePost"

import { Avatar, Typography, Grid, Toolbar, Container, Button, } from "@mui/material";


export default function Profile ({ currentUser }) {
    const [posts, setPosts] = useState([]) //keep track of our logged in user's posts dynamically
    
    const { username, purrfile_picture, bio, full_name, created_at } = currentUser

    //changes to user's account needs to reflect on the profile? add a state for logged in user in app?

    //fetch user's meow_posts
    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
        .then(res => res.json())
        .then(userObj => 
            setPosts(userObj.meow_posts)
        )
    }, [])

    // callback functions for posts CRUD
     const addPost = (newPost) => setPosts(posts => [...posts, newPost])

    const deletePost = (id) => setPosts(current => current.filter(p => p.id !== id)) 
  
    // const updateProduction = (updatedProduction) => setProductions(current => {
    //   return current.map(production => {
    //    if(production.id === updatedProduction.id){
    //      return updatedProduction
    //    } else {
    //      return production
    //    }
    //   })
    // })


    return (
        <>
        <main>
            <div>
                <Container maxwidth="sm" style={{ marginTop: "100px" }} display="center" alignItems='center'
                             justifyContent='center'>
                              
                    <Avatar src={purrfile_picture} sx={{ width: 150, height: 150 }} align="center" >
                    </Avatar>
                    <Typography variant="h5" style={{ marginTop: "15px" }}color="text.secondary" gutterBottom>
                    Username: {username}
                    </Typography>
                    <Typography variant="h6" style={{ marginTop: "10px" }} color="text.secondary">
                    Full Name: {full_name}
                     </Typography>
                    <Typography variant="h6" style={{ marginTop: "10px" }}color="text.secondary" paragraph>
                    Bio: {bio}
                    </Typography> 
            <div>
                <Grid container spacing={2} justify="center" style={{ marginTop: "30px" }}>
                    <Grid item>
                        Number of MeowPosts:
                    </Grid>
                    <Grid item>
                        Number of Catpanions:
                    </Grid>
                </Grid>
            </div>
            </Container>
        </div>
            <Container style={{ marginTop: "5%" }}>
                <Grid container spacing={1}>
                {posts?.map((post) =>( 
                    <PostForProfile key={post.id} post={post} deletePost={deletePost}/>
                ))}
                </Grid>
            </Container>
    </main>
    <CreatePost currentUser={currentUser} addPost={addPost} />
    </>
    )
}
