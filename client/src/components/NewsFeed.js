import * as React from 'react';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import NewsFeedComments from "./NewsFeedComments.js";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Stack, Grid } from '@mui/material';
import { Favorite } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
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

export default function NewsFeed({currentUser}) {
  const [expanded, setExpanded] = useState(false);
  const [allPosts, setAllPosts] = useState([])
  const [errors, setErrors] = useState([]);
  // const [loading, setLoading] = useState(true)

  const { friends, meow_posts } = currentUser
  
  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // requesting all meow_posts
  useEffect(() => {
    fetch("/meow_posts")
    .then(res => {
      if(res.ok){
          res.json().then(posts => {
              setAllPosts(posts)
          })
      } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
  })
  }, []);
  
  
  // for each friend's user_id, map through allPosts and filter out the ones that are matching the friend's user_id
  function friendsPosts() {
    let idsArray = []
    const pluck = (arr, key) => arr.map(i => i[key]);
    const friendIds = pluck(friends, 'id')
    idsArray = [...friendIds, currentUser.id]

    const postsArray = []
    for ( let i = 0; i < idsArray.length; i++ ) {
      const eachPostsArray = allPosts.filter(post => post.user.id === idsArray[i])
      postsArray.push(eachPostsArray)
    }
    return postsArray.flat()
  }
  // console.log(friendsPosts())

  // if no meowposts shown, render add friends to view posts

  console.log()


  return (
    <>
      {/* <Box sx={{ width: '100%' }}>
    {loading ? <LinearProgress /> : null}
      </Box> */}
      <Box bgcolor="white" flex={4} p={5}>
        <Stack alignItems="center">
          {currentUser.friends.length > 0 ? friendsPosts().sort((a, b) => b.id - a.id)
          ?.map(post => (
            <PostForNewsFeed key={post.id} post={post} currentUser={currentUser}/>
          )) 
          : 
          <Box container style={{ display: "inline-block" }}>
            <Link component={RouterLink} to="/mycatpanions">Add some catpanions to view meowposts!</Link>
          </Box>
          }
        </Stack>
      </Box>
    </>
  );
}
