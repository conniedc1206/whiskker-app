import React from "react";
import CreatePost from "./CreatePost.js"
import { Avatar, Typography, Grid, Toolbar, Container, Button, } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";
// import ProfileNavBar from "./ProfileNavBar.js";
import PostForProfile from "./PostForProfile";

// create PostForProfile for currentUser.meow_posts
// create EditPostForProfile


export default function Profile ({ currentUser }) {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
        <main>
            <div>
                <Container maxwidth="sm" style={{ marginTop: "100px" }} display="center" alignItems='center'
                             justifyContent='center'>
                              
                    <Avatar src="https://m.media-amazon.com/images/I/71kNvlpS9GL._AC_SS450_.jpg" sx={{ width: 150, height: 150 }} align="center" >
                        </Avatar>
                    <Typography variant="h5" style={{ marginTop: "15px" }}color="text.secondary" gutterBottom>
                        UserName
                    </Typography>
                    <Typography variant="h6" style={{ marginTop: "10px" }} color="text.secondary">
                        Full Name
                     </Typography>

                        <Typography variant="h6" style={{ marginTop: "10px" }}color="text.secondary" paragraph>
                        Descripton / Bio
                        </Typography>
                       
                    <div>
                        <Grid container spacing={2} justify="center" style={{ marginTop: "30px" }}>
                            <Grid item>
                                <Button variant="contained" color="success">
                                    Posts
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="success">
                                    Catpanions
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container style={{ marginTop: "5%" }}>
                <Grid container spacing={1}>
                {cards.map((card) =>( 
                    <Grid item key={card} xs={12} sm={6} md={4} container spacing={3}>
                    <PostForProfile />
                </Grid>
                ))}
                </Grid>
            </Container>
        </main>
        <CreatePost />
        </>
    )
}