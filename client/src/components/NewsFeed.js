import * as React from 'react';
import { useState, useEffect } from "react";
import NewsFeedComments from "./NewsFeedComments.js";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Stack } from '@mui/material';
import { Favorite } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PostForNewsFeed from './PostForNewsFeed.js';

//Material UI
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsFeed() {
  const [expanded, setExpanded] = useState(false);
  const [allPosts, setAllPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // update this to show currentUser.friends.meow_posts & currentUser.meow_posts sorted by created by meow_posts id
  // useEffect(()=>{
  //   fetch('/meow_posts')
  //     .then(res => {
  //       if(res.ok){
  //         res.json().then(posts => {
  //           setAllPosts(posts)
  //           setLoading(false)
  //         })
  //       } else {
  //         res.json().then(data => setErrors(data.error))
  //       }
  //   })
  // }, [])

  console.log(allPosts)
  
  if(loading) return <h1>Loading...</h1>
  if(errors) return <h1>{errors}</h1>

  // if no meowposts shown, render add friends to view posts

  return (
    <>
      <Box bgcolor="white" flex={4} p={5}>
        <Stack>
          {allPosts.sort((a, b) => b.id - a.id)
          .map(post => (
            <Card key={post.id} sx={{ maxWidth: 500, margin: 4 }}>
            <CardHeader
              avatar={
                <Avatar alt={post.user.username} src={post.user.purrfile_picture} sx={{ width: 56, height: 56 }}/>
              }
              action={
                <IconButton aria-label="settings">
                  <EditIcon /> 
                  |   
                  <DeleteForeverIcon />
                </IconButton>
              }
              title={post.user.username}
              subheader={post.created_at}
            />
            <CardMedia
              component="img"
              height="20%"
              image={post.image}
              alt={post.description}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              <Checkbox {...label} icon={<FavoriteIcon />} checkedIcon={<Favorite sx={{ color: "red" }} />} /> {post.likes} Likes
              </IconButton>
              <IconButton aria-label="share">
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  <NewsFeedComments/>
              </CardContent>
            </Collapse>
          </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
}
