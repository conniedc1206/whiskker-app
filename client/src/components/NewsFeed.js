import * as React from 'react';
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import NewsFeedComments from "./NewsFeedComments.js";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Stack } from '@mui/material';
import { Favorite } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';

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

  console.log(meow_posts)

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
  friendsPosts()

  // if no meowposts shown, render add friends to view posts
  return (
    <>
      {/* <Box sx={{ width: '100%' }}>
    {loading ? <LinearProgress /> : null}
      </Box> */}
      <Box bgcolor="white" flex={4} p={5}>
        <Stack>
          {friendsPosts().sort((a, b) => b.id - a.id)
          .map(post => (
            <Card key={post.id} sx={{ maxWidth: 500, margin: 4 }}>
            <CardHeader
              avatar={
                <Avatar alt={post.user_id} src={"need user's profile pic"} sx={{ width: 56, height: 56 }}/>
              }
              action={
                <IconButton aria-label="settings">
                  <EditIcon /> 
                  |   
                  <DeleteForeverIcon />
                </IconButton>
              }
              title={post.user_id}
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
                  {/* <NewsFeedComments/> */}
              </CardContent>
            </Collapse>
          </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
}
