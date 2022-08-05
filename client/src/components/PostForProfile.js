import * as React from 'react';
import { useState } from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Modal, TextField, Stack, InputAdornment } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { GiCat } from 'react-icons/gi';

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

export default function PostForProfile({ currentUser, post, deletePost }) {
  // delete button
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //edit button
  const [editPostValues, setEditPostValues] = useState({
    description: post.description, 
    image: post.image,
    like: post.like,
    user_id: currentUser.id,
  })
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const { description, image, created_at } = post
  
  //DELETE
  function handleDeleteClick () {
    console.log(post.id)
    // make a delete fetch request and update the backend as well as the post state
    fetch(`/meow_posts/${post.id}`, {
      method: 'DELETE'
    })
    deletePost(post.id)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPostValues({
        ...editPostValues,
        [name]: value
    })
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    console.log(post.id)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ ...editPostValues}),
    };
    fetch(`/meow_posts/${post.id}`, configObj)
    .then(resp => resp.json())
    .then(updatedPost => setEditPostValues(updatedPost))
    
  }
  console.log(editPostValues)

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
        <EditIcon onClick={handleEditOpen}  /> 
        </IconButton>
        {/* //Modal for Edit */}
        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
          >
       <Box sx={style} textAlign='center' borderRadius={2} p={8}>
            <Typography variant="h5" color="black" textAlign="center">
            Edit Post
            </Typography>
    <form onSubmit={handleEditSubmit}>
            <TextField
                sx={{ width: "100%" }}
                name="description"
                id="description"
                multiline
                rows={3}
                placeholder="Add edited description here"
                variant="standard"
                value={editPostValues.description}
                onChange={handleChange}
                />
            <Stack direction="row" mt={2} mb={3} gap={1}>
                <IconButton color="success" aria-label="upload picture" component="label">
                <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiCat/>
                        </InputAdornment>
                      ),
                    }}
                id="image"
                name="image"
                label="Edit Image URL"
                type="text"
                value={editPostValues.image}
                onChange={handleChange}
                />
                </IconButton>
            </Stack>
            <Stack>
                <Button color="success" display="center" onSubmit={handleEditSubmit} onClick={handleEditClose} >EDIT</Button>
            </Stack>
        </form>
        </Box>
        </Modal>

        <IconButton onClick={handleOpen} aria-label="delete" >
        <Button> <DeleteForeverIcon /></Button>
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
            <Button sx={{ margin: 2 }} variant="outlined" onClick={handleDeleteClick}>Yes</Button>
            <Button sx={{ margin: 2 }} variant="outlined" onClick={handleClose}>No</Button>
          </Box>
        </Modal>
        </CardActions>
    </Card>
    </Box>
  );
}