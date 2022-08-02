import * as React from 'react';
import { useState } from "react";
import NewsFeedComments from "./NewsFeedComments.js";
import { Box, Checkbox, styled, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Button, Modal, Grid   } from '@mui/material';
import { Favorite  } from '@mui/icons-material'
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PostForNewsFeed() {
    //Material UI
  const [expanded, setExpanded] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // Material UI, Heart on and off
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box bgcolor="white" flex={4} p={5}>
    <Card sx={{ maxWidth: 700, margin: 4 }}>
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
        <IconButton aria-label="add to favorites">
        <Checkbox {...label} icon={<FavoriteIcon />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="edit">
        <EditIcon /> 
        </IconButton>
        <IconButton aria-label="delete">
        <Button onClick={handleOpen}> <DeleteForeverIcon /></Button>
        </IconButton>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} textAlign='center' borderRadius={2} p={8}>
    <Typography id="modal-modal-title" variant="h7" component="h2">
      Are you sure you want to delete?
    </Typography>
    <Button sx={{ margin: 2 }} variant="outlined">Yes</Button>
    <Button sx={{ margin: 2 }} variant="outlined">No</Button>
  </Box>
</Modal>
        </CardActions>
    </Card>
    </Box>
  );
}