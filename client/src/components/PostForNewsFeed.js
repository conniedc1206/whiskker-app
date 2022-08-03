import * as React from 'react';
import { useState } from "react";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Button, TextField, Stack  } from '@mui/material';
import { CollectionsBookmarkOutlined, Favorite,   } from '@mui/icons-material'
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

export default function PostForNewsFeed({post, currentUser}) {
    //Material UI
  const [expanded, setExpanded] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like)
  const [likeToggle, setLikeToggle] = useState(false)
  const [commentTxt, setCommentTxt] = useState("");
  const [commentThread, setCommentThread] = useState(post.comments)

  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //for someone else's post, other users can ONLY update like and comment
  //currentUser can only like 1 post ONCE??stay highlighted?
  const handleAddLike = (e) => {
    console.log(post.id)
    setLikeToggle(currentLikeToggle => !currentLikeToggle)
    // fetch UPDATE meow_posts/:id 
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: like: post.like + 1
      body: JSON.stringify(likeToggle ? {like: likeCount-1} : {like: likeCount+1}),
    };
    fetch(`/meow_posts/${post.id}`, configObj)
    .then((resp) => resp.json())
    .then((obj) => {
      setLikeCount(obj.like)
    });
  }

  // const handleSubmitComment = (e) => {
    // find the post's object or key
    // fetch UPDATE meow_posts/:id 
    // body: comment: "what is typed in the box", user_id: currentUser.id
  // }
  // console.log(commentTxt)

  return (
    <>
    <Card key={post.id} sx={{ width: "40%", margin: 3 }}>
            <CardHeader
              avatar={
                <Avatar alt={post.user.id} src={post.user.purrfile_picture} sx={{ width: 56, height: 56 }}/>
              }
              title={post.user.username}
              subheader={post.created_at.slice(0, 10)}
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
              <Button 
                aria-label="add to favorites"
                onClick={handleAddLike}
                name="like"
                id="like"
                value={post.like} 
              >
              <Checkbox {...label} icon={<FavoriteIcon />} checkedIcon={<Favorite sx={{ color: "red" }} />} /> {likeCount}
              </Button>
              
              {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Card>
                <Box sx={{ p: "15px" }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar
                src={currentUser.purrfile_picture}
                alt="user-avatar"
                />
                <TextField
                multiline
                fullWidth
                margin="0"
                //    minRows={4}
                id="outlined-multilined"
                placeholder="Meows"
                value={commentTxt}
                onChange={(e) => {
                    setCommentTxt(e.target.value);
                  }}
                  />
                <Button
                onSubmit={handleSubmitComment}
                size="small"
                sx={{bgcolor: "success",color: "neutral.white",p: "8px 25px","&:hover": {bgcolor: "success"},}}>
                Send
                </Button>
                </Stack>
                </Box>
                </Card>
              </CardContent>
            </Collapse> */}
          </Card>
    </>
  );
}