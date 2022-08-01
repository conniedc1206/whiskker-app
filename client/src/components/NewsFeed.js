import * as React from 'react';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import NewsFeedComments from "./NewsFeedComments.js";
import Posts from "./Posts.js";
import NavBar from "./NavBar.js";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton   } from '@mui/material';
import { ArrowForwardIosOutlined, Favorite,   } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
  const [count, setCount] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const params = useParams()
  const {id} = params

  useEffect(()=>{
    fetch('/meow_posts')
      .then(res => {
        if(res.ok){
          res.json().then(posts => {
            setPosts(posts)
            setLoading(false)
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
    })
  }, [])
  
  if(loading) return <h1>Loading...</h1>
  if(errors) return <h1>{errors}</h1>

  return (
    <>
      <Box bgcolor="white" flex={4} p={5}>
        {/* render out each of the user's post here */}
        <h3>Posts</h3>
        <ul>
          {posts.sort((a, b) => b.id - a.id)
          .map(post => (
            <li key={post.id}>
                <h2>{post.description}</h2>
                <img src={post.image} alt={post.description}/>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
}
