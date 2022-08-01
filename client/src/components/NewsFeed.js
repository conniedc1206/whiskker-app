import * as React from 'react';
import { useState } from "react";
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

  


    //Material UI
  const [expanded, setExpanded] = useState(false);
  
  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box bgcolor="white" flex={4} p={5}>
    <Card sx={{ maxWidth: 500, margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#e8f5e9" }} aria-label="cats">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditIcon /> 
            |   
            <DeleteForeverIcon />
          </IconButton>
        }
        title="Insert Name Here"
        subheader="Insert Date Created Here"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"
        alt="cat image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Add Description Here
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton count={count} aria-label="add to favorites">
      <Checkbox {...label} 
      //liked button
        onClick={() => setCount(count + 1)}
        icon={<FavoriteIcon />} 
        checkedIcon={<Favorite sx={{ color: "red" }} />} /> 
        {count}
      </IconButton>
      <IconButton aria-label="share">
          {/* <ShareIcon /> */}
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
    </Box>
  );
}
