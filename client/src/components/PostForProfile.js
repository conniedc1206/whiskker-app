import * as React from 'react';
import { useState } from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Modal } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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

export default function PostForProfile({post, deletePost}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reloadPage, setReloadPage] = useState(false)

  const { description, image, created_at, user_id} = post
  

  //DELETE
  function handleDeleteClick () {
    console.log(post.id)
    // make a fetch request and update the server
    fetch(`/meow_posts/${post.id}`, {
      method: 'DELETE'
    })
    deletePost(post.id)
  };

  return (
    <Box bgcolor="white" flex={4} p={5}>
    <Card sx={{ maxWidth: 700, margin: 4 }}>
      <CardMedia
        component="img"
        height="20%"
        image={image}
        alt={description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {created_at}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="edit">
        <EditIcon /> 
        </IconButton>

        <IconButton aria-label="delete" >
        <Button onClick={handleDeleteClick}> <DeleteForeverIcon /></Button>
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